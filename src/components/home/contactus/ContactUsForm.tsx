"use client";

import { client } from "@/common/utils/sanity";
import { SendIcon } from "@/components/icons";
import { Checkbox } from "@/components/inputs";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import emailjs from '@emailjs/browser';

const ContactUsForm = () => {
   const router = useRouter();
   const [isChecked, setIsChecked] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState(false); // Step 2
   const form = useRef<HTMLFormElement>(null);

   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      country_code: "",
      phone: "",
      alternatePhone: "",
      question: [] as string[],
      message: "",
   });
   const handleCheckboxChange = (question: string) => {
      const updatedQuestions = [...formData.question];
      if (updatedQuestions.includes(question)) {
         updatedQuestions.splice(updatedQuestions.indexOf(question), 1);
      } else {
         updatedQuestions.push(question);
      }
      setFormData({ ...formData, question: updatedQuestions });
   };
   const handlePhoneChange = (value: string) => {
      setFormData({ ...formData, phone: value });
   };
   const handleSubmit = async (e: any) => {
      e.preventDefault();
      try {
         const response = await axios.post("/api/contactus", formData);
         // console.log(response.status);
         setIsLoading(false);
         setFormData({
            firstName: "",
            lastName: "",
            email: "",
            country_code: "",
            phone: "",
            alternatePhone: "",
            question: [] as string[],
            message: "",
         });
         const serviceId = "service_3s4jwuc";
         const templateId = "template_g9jh0mx";
         const publicKey = "oXZr_5k5eBTMvJttl"

         const emailResponse = await emailjs.sendForm(serviceId, templateId, form.current!, {
            publicKey: publicKey,
         });
         // console.log('Email sent successfully!', emailResponse);



         if (response.status === 200 || emailResponse.status === 200) {
            router.push("/thankyou")
         }
      } catch (error) {
         console.log(error);
      }

   };
   return (
      <div className="flex flex-col gap-[40px]  ">
         <form ref={form} className="grid gap-[20px]" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-[10px]">
               <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                  <i className="fas fa-heart" aria-hidden="true" />
               </div>
               <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                     setFormData({ ...formData, firstName: e.target.value })
                  }
                  placeholder="Full Name"
                  required
                  className="bg-transparent col-span-2  w-full border-b border-neutral-500 text-neutral-550 outline-none pt-[10px] py-[13px] px-[10px]  "
               />
               {/* <input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
               
                  onChange={(e) =>
                     setFormData({ ...formData, lastName: e.target.value })
                  }
                  placeholder="Last Name"
                  className="bg-transparent  w-full border-b border-neutral-500 text-neutral-550 outline-none pt-[10px] py-[13px] px-[10px]  "
               /> */}
               <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  name="phone"
                  defaultCountry="US"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="bg-transparent   w-full col-span-2 border-b border-neutral-500 text-neutral-550 outline-none pt-[10px] py-[13px] px-[10px] outline-none  "

               />

               {/* <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  required
                  onChange={(e) =>
                     setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Phone"
                  name="phone"
                  className="bg-transparent   w-full border-b border-neutral-500 text-neutral-550 outline-none pt-[10px] py-[13px] px-[10px] "
               /> */}
               <input
                  id="email"
                  type="email"
                  value={formData.email}
                  required
                  onChange={(e) =>
                     setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Email"
                  name="email"
                  className="bg-transparent col-span-2  w-full border-b border-neutral-500 text-neutral-550 outline-none pt-[10px] py-[13px] px-[10px]  "
               />{" "}

               {/* <input
                  id="alternatePhone"
                  type="tel"
                  value={formData.alternatePhone}
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        alternatePhone: e.target.value,
                     })
                  }
                  placeholder="Phone"
                  name="phone"
                  className="bg-transparent col-span-2  w-full border-b border-neutral-500 text-neutral-550 outline-none pt-[10px] py-[13px] px-[10px]  "
               /> */}
            </div>
            {/* <div
               className="flex flex-col ps-[10px] gap-[20px]"
               data-aos="fade-up"
               data-aos-duration="3000"
            >
               <label htmlFor="question" className="py-[12px] text-zinc-850r">
                  In Which Service You Have Questions? 
                  What best describes your situation?”
               </label>
               <div className="grid md:grid-cols-2 gap-[10px] px[10px]">
                  <Checkbox
                     title="Missing Person"
                     isChecked={formData.question.includes("Missing Person")}
                     onChange={() => handleCheckboxChange("Missing Person")}
                  />
                  <Checkbox
                     title="Civil Disputes"
                     isChecked={formData.question.includes("Civil Disputes")}
                     onChange={() => handleCheckboxChange("Civil Disputes")}
                  />
                  <Checkbox
                     title="Fraud Detection and Misconduct"
                     isChecked={formData.question.includes(
                        "Fraud Detection and Misconduct"
                     )}
                     onChange={() =>
                        handleCheckboxChange("Fraud Detection and Misconduct")
                     }
                  />
                  <Checkbox
                     title="Other"
                     isChecked={formData.question.includes("Other")}
                     onChange={() => handleCheckboxChange("Other")}
                  />
               </div>
            </div> */}
            <div>
               <input
                  id="message"
                  type="text"
                  onChange={(e) =>
                     setFormData({ ...formData, message: e.target.value })
                  }
                  value={formData.message}
                  placeholder="Your Message"
                  name="message"
                  className="bg-transparent col-span-2  w-full border-b border-neutral-500 text-neutral-550 outline-none pt-[10px] py-[13px] px-[10px]  "
               />
            </div>

            <motion.div
               className="box"
               whileHover={{ scale: 1.03 }}
               transition={{ type: "spring", stiffness: 400, damping: 5 }}
            >
               <button
                  type="submit"
                  className="bg-orange-650 hover:bg-orange-700 flex items-center text-white gap-[10px] rounded-full px-[30px] py-[12px] border-black"
               >
                  {isLoading ? "Loading..." : "Get In Touch"} <SendIcon />
               </button>
            </motion.div>
         </form>
      </div>
   );
};

export default ContactUsForm;
