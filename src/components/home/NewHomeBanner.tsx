"use client";
import clsx from "clsx";
import {
   CircleIcon,
   RectangleIcon,
   SemiCircleIcon,
   TringleIcon,
} from "../icons";
import "./style.css";
import Container from "@/components/container";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "@/common/assets/frame-6.json";
import { useRef } from "react";
import Link from "next/link";

const NewHomeBanner = () => {
   const frameRef = useRef<LottieRefCurrentProps>(null);
  

   return (
      <div className="bg-white  relative pb-[60px] ">
         <Container background=" relative pt-6 pb-12  z-10 ">
            <div
               className={clsx(
                  "flex flex-col gap-[150px] font-sans py-8 md:pt-[72px] md:pb-[80px]  mt-[72px]   "
               )}
            >
               <div className="flex justify-center w-full  flex-col text-[16px] z-10">
                  {/* <span className="text-neutral-300 font-sans tracking-[1.6px] uppercase animate__animated  animate__bounceInRight animate__fast">
                     WELCOME TO MERLIN HUNTER & ASSOCIATES
                  </span> */}
                  <h1 className="w-full md:max-w-[750px] mt-[10px] text-[2.4rem] md:text-[3.4rem] font-bold md:leading-[76px] mb-[20px] text-zinc-850 font-roboto animate__animated animate__bounceInLeft md:animate__bounce animate__animated ">
                     Seeking what lies <br /> unseen
                  </h1>
                  <p className="text-stone-500 w-full md:max-w-[750px] font-lato animate__animated  animate__bounceInRight animate__fast hidden md:block ">
                     Our team can tailor an investigation in confidence,
                     ethically <br /> and legally to help unravel your
                     mysteries.
                  </p>
                  <p className="text-stone-500 w-full md:max-w-[750px] font-lato animate__animated  animate__bounceInRight animate__fast md:hidden ">
                     Our team can tailor an investigation in confidence,
                     ethically and legally to help unravel your mysteries.
                  </p>
                  <div className="mt-[30px] flex gap-[20px]">
                     <Link href="/services">
                        <button className="py-[12px] px-[30px] text-[14px] rounded-full bg-teal-950 hover:bg-white hover:text-teal-950 border border-teal-950 hover:border-teal-950 text-white font-lato orangelink animate__animated animate__backInLeft">
                           Our Service
                        </button>
                     </Link>
                     <Link href="/new-case">
                        <button className="py-[12px] px-[30px] text-[14px] border bg-white border-orange-600 rounded-full text-orange-600 hover:text-white hover:bg-orange-600 font-lato greenlink animate__animated animate__backInRight">
                           New Case
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
            {/* Desktop */}
            

           {/* mobile */}
         </Container>
         <Lottie
            onComplete={() => {
               frameRef.current?.goToAndPlay(5, true);
            }}
            animationData={animationData}
            lottieRef={frameRef}
            loop={false}
            className="animate__animated md:hidden animate__bounceInDown absolute bottom-0 "
         />
         {/* <div className=" md:hidden  bottom-[0px] sm:bottom-0 z-0   border-black">
          
         </div> */}
      </div>
   );
};

export default NewHomeBanner;
