"use client";
import { useEffect } from 'react'; // Import useEffect hook
import pageTitle from "@/common/utils/page-title";
import PageHeading from "@/components/pageHeading";
import Work from "@/components/work";
import Notice from "@/components/work/Notice";
import { Metadata } from "next";

export const metadata: Metadata = pageTitle.work;

const WorkPage = () => {
   useEffect(() => {
      // Code that accesses document
      // This code will only be executed in the browser environment
      // You can put your document-dependent logic here
   }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

   return (
      <div>
         <PageHeading>Process</PageHeading>
         <Work />
      </div>
   );
};

export default WorkPage;
