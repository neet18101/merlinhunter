import { TServiceRepository } from "@/common/types/services";
import { ArrowDownRightIcon, CallIcon } from "@/components/icons";
import clsx from "clsx";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useMediaQuery } from "usehooks-ts";
import { useState } from "react";

type Props = {
   item: TServiceRepository;
   className?: string;
   type?: string;
};

const CardPanel = ({ item, className, type }: Props) => {
   const matches = useMediaQuery("(min-width: 768px)");
   const [callText, setCallText] = useState<string>("Call Now");
   const changeCallText = () => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
         setCallText("Call Now");
      } else {

         setCallText("+44 020 3340 6070");
      }
   };

   return (
      <div
         className={clsx(
            "card-panel rounded-md shadow-md py-[20px] px-[12px] md:py-[40px] md:px-[30px] lg:px-[10px] xl:px-[30px]  text-center flex flex-col border border-[#D1D1D1] min-w-[250px] md:full font-sans  min-h-[400px] md:min-h-[550px] items-center justify-center",
            className
         )}
      >
         <div className="grid place-items-center gap-4 ">
            <div
               className={clsx(
                  "rounded-full w-[60px] h-[60px] m-auto mb-[20px] text-[2.5rem] md:text-[3.5rem] font-bold grid place-items-center font font-roboto text-teal-950  ",
                  {
                     "md:text-white":
                        type === "primaryCard" || type === "secondoryCard",
                  }
               )}
            >
               {item.icon}
            </div>
            <h1 className="text-[1.3rem] font-bold font-roboto">
               {item.title}
            </h1>
            <p className="text-[14px] mt-[10px] mb-[20px] font-lato">
               {matches
                  ? `${item.description.substring(0, 100)}...`
                  : `${item.description.substring(0, 70)}...`}
            </p>


            <div className="lg:block hidden">
               <a
                  href="tel:+44 020 3340 6070"
                  className="border border-orange-600 hover:bg-orange-600 rounded-full px-[20px] text-orange-600 hover:text-white py-[8px] flex items-center justify-center gap-[5px] cursor-[url(/assets/images/greenCircle.svg),_pointer] orangelink stroke-orange-600 hover:stroke-white"
                  onClick={changeCallText}
               >
                  <CallIcon />
                  <i>{callText}</i>
               </a>
            </div>

         </div>

         <p className=" hidden  text-teal-950">Hello</p>
      </div>
   );
};

export default CardPanel;
