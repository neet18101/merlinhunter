import { RightArrowIcon } from "../icons";

const WhoWeAre = () => {
   return (
      <div className="py-[50px] md:py-[100px] font-sans">
         <div className="grid lg:grid-cols-1 gap-[20px]">

            {/* Left section */}
            <div
               className="flex flex-col text-[16px] gap-[30px] text-[#404040] font-lato pt-[0px] md:p-0"
               data-aos="fade-left"
            >
               {/* //    <p>
            //       Merlin, Hunter & Associates is a private non-governmental
            //       intelligence agency located in the heart of London’s financial
            //       district
            //    </p>
            //    <p>
            //       We house a small team of ethical and professional
            //       investigators, journalist and intelligence analyst that have
            //       comprehensive experience in dealing with complex civil and
            //       arbitrary cases.
            //    </p>
            //    <p>
            //       We provide confidential intelligence gathering and
            //       investigative services to high net worth individuals,
            //       businesses and law firms worldwide.
            //    </p> */}
               <p>
                  Like a diver searching for pearls, we plunge into the depths
                  for truth. Merlin, Hunter & Associates is a private
                  non-governmental intelligence provider home to a small team of
                  ethical and professional investigators and intelligence
                  experts that have comprehensive experience in dealing with
                  complex civil and arbitrary cases for high net worth
                  individuals, businesses and law firms worldwide.
               </p>
            </div>
         </div>
      </div>
   );
};

export default WhoWeAre;
