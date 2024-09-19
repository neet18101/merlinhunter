"use client";
import { TServiceRepository } from "@/common/types/services";
import SwiperCarousel from "./SwiperCarousel";
import { useState, useEffect, Fragment } from "react";

const services: TServiceRepository[] = [
   {
      _id: "Address trace",
      title: "Address trace",
      description:
         "An address trace investigation is a type of investigation that aims to locate the current address of an individual or entity. This can be done for a variety of reasons, such as to serve legal documents, to collect a debt, or to find a missing person. There are a number of ways to conduct an address trace investigation. Some common methods include:",
      icon: "1",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Hidden Asset ",
      title: "Hidden Asset Searches",
      description:
         "A hidden asset search is an investigation conducted to uncover assets that an individual or company has intentionally concealed. These assets may be hidden for various reasons, such as to avoid paying taxes, debts, or child support, or to protect them from creditors or legal claims. Methods used in hidden asset searches:",
      icon: "2",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Fact Finding Investigation",
      title: "Fact Finding Investigation",
      description:
         "A false allegation investigation is the process of gathering evidence to determine whether an allegation is false. This can be a complex and challenging process, as it often involves conflicting testimony and limited evidence. False allegations can be made for a variety of reasons, such as retaliation, revenge, or personal gain.",
      icon: "3",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Background Checks",
      title: "Background Checks",
      description:
         "A background check is a process that verifies an individual's personal and professional information. ",
      icon: "5",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   }
];

const servicesTablet: TServiceRepository[] = [
   {
      _id: "Address trace",
      title: "Address Trace",
      description:
         "An address trace investigation is a type of investigation that aims to locate the current address of an individual or entity. This can be done for a variety of reasons, such as to serve legal documents, to collect a debt, or to find a missing person. There are a number of ways to conduct an address trace investigation. Some common methods include:",
      icon: "1",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Hidden Asset ",
      title: "Hidden Asset Searches",
      description:
         "A hidden asset search is an investigation conducted to uncover assets that an individual or company has intentionally concealed. These assets may be hidden for various reasons, such as to avoid paying taxes, debts, or child support, or to protect them from creditors or legal claims. Methods used in hidden asset searches:",
      icon: "2",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Fact Finding Investigation",
      title: "Fact Finding Investigation",
      description:
         "A false allegation investigation is the process of gathering evidence to determine whether an allegation is false. This can be a complex and challenging process, as it often involves conflicting testimony and limited evidence. False allegations can be made for a variety of reasons, such as retaliation, revenge, or personal gain.",
      icon: "3",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Background Checks",
      title: "Background Checks",
      description:
         "A background check is a process that verifies an individual's personal and professional information. ",
      icon: "4",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Social Media Investigation",
      title: "Social Media Investigation",
      description:
         "A social media investigation is a type of investigation that aims to gather information from social media platforms to support a legal case or other investigation. Social media platforms contain a wealth of information about individuals and organisations, including their personal information, interests, activities, and relationships",
      icon: "5",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   }

];

const servicesMobile: TServiceRepository[] = [
   {
      _id: "Address trace",
      title: "Address Trace",
      description:
         "An address trace investigation is a type of investigation that aims to locate the current address of an individual or entity. This can be done for a variety of reasons, such as to serve legal documents, to collect a debt, or to find a missing person. There are a number of ways to conduct an address trace investigation. Some common methods include:",
      icon: "1",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Hidden Asset ",
      title: "Hidden Asset Searches",
      description:
         "A hidden asset search is an investigation conducted to uncover assets that an individual or company has intentionally concealed. These assets may be hidden for various reasons, such as to avoid paying taxes, debts, or child support, or to protect them from creditors or legal claims. Methods used in hidden asset searches:",
      icon: "2",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Fact Finding Investigation",
      title: "Fact Finding Investigation",
      description:
         "A false allegation investigation is the process of gathering evidence to determine whether an allegation is false. This can be a complex and challenging process, as it often involves conflicting testimony and limited evidence. False allegations can be made for a variety of reasons, such as retaliation, revenge, or personal gain.",
      icon: "3",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
  
   {
      _id: "Background Checks",
      title: "Background Checks",
      description:
         "A background check is a process that verifies an individual's personal and professional information. ",
      icon: "4",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Social Media Investigation",
      title: "Social Media Investigation",
      description:
         "A social media investigation is a type of investigation that aims to gather information from social media platforms to support a legal case or other investigation. Social media platforms contain a wealth of information about individuals and organisations, including their personal information, interests, activities, and relationships",
      icon: "5",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
];

const OurServices = () => {
   const [isLoading, setIsLoading] = useState(true);
   // const matches = useMediaQuery("(min-width: 768px)");

   const matches = true;

   useEffect(() => {
      // console.log("window", window);
      if (typeof window !== "undefined") {
         setIsLoading(false);
      }
   }, []);

   return (
      <section className="overflow-hidden pb-[50px] md:pb-[100px]">
         <h1
            className="text-[2rem] md:text-[2.8rem] font-bold font-roboto inline-block"
            data-aos="fade-up"
            data-aos-duration="1000"
         >
            Services
            <span className="block h-[5px] mt-[-8px] bg-orange-600"></span>
         </h1>

         <div className="p-0 md:px-[30px] hidden xl:block m-auto pt-[60px]  ">
            <SwiperCarousel services={services} />
         </div>
         <div className="p-0 lg:px-[15px] xl:px-[30px] hidden md:block xl:hidden m-auto pt-[60px] ">
            <SwiperCarousel services={servicesTablet} />
         </div>
         <div className="p-0 md:px-[30px] md:hidden  m-auto pt-[60px] ">
            <SwiperCarousel services={servicesMobile} />
         </div>
      </section>
   );
};

export default OurServices;

