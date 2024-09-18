import ContactUsForm from "./ContactUsForm";
interface Props {
   newCaseForm: any
}

const ContactUs = ({ newCaseForm }) => {
   return (
      <section className="pb-[50px] md:pb-[100px]">
         {newCaseForm === true ? "" : <h1
            className="text-[2rem] md:text-[2.8rem] font-bold font-roboto inline-block"
            data-aos="fade-up"
         >
            Contact
            <span className="block h-[5px] mt-[-6px] bg-orange-600"></span>
         </h1>}

         <div
            className="grid  lg:grid-cols-2 gap-[20px] rounded-[10px]  py-[40px] md:py-[80px] px-[30px] md:px-[60px] "
         // data-aos="fade-down"
         // data-aos-duration="100"
         >
            <div className="flex flex-col gap-[20px] ">
               <ContactUsForm />
            </div>

         </div>
      </section>
   );
};

export default ContactUs;
