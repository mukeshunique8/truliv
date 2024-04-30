import React, { useContext } from "react";
import FeatureCard2 from "../components/FeatureCard2";
import FeatureCard from "../components/FeatureCard";
import { HouseContext } from "../Contexts/HouseContext";
import Image from "next/image";


export default function FeatureList() {
  const { houseType } = useContext(HouseContext);

  return (
    <div className=" w-full   flex flex-col justify-center items-center">
      <div className="relative bg-pbg w-full  flex flex-col justify-center items-center ">

{/* 
          <div className="absolute top-[285px] left-0">
          <Image
            className="absolute  "
            src="/nearbysize.svg"
            alt=''
            width={441}
            height={441}
          />
           <Image
            className="absolute top-[285px] "
            src="/key1.png"
            alt=''
            width={441}
            height={441}
          />
          
          </div> */}



        {/* Conditional rendering based on houseType */}
        {houseType === "Co-Living Spaces" && (
        <h2 className="font-semibold py-[100px]  md:py-[194px] text-wtxt leading-[72px] text-[22px] md:text-[48px]">
                        Your Perfect Co - living Partner

          </h2>
        )}
        {houseType === "Holiday Homes" && (
        <h2 className="font-semibold py-[100px]  md:py-[194px] text-wtxt leading-[72px] text-[22px] md:text-[48px]">
            Here’s why you should pick Truliv!{" "}
          </h2>
        )}
        {/* Default rendering if houseType is neither "Coliving" nor "Home" */}
        {!(
          houseType === "Co-Living Spaces" || houseType === "Holiday Homes"
        ) && (
          <h2 className="font-semibold py-[100px]  md:py-[194px] text-wtxt leading-[72px] text-[22px] md:text-[48px]">
            Your Perfect Co - living Partner
          </h2>
        )}

        {/* FeatureCard rendering based on houseType */}
        
        {houseType === "Co-Living Spaces" && (
          <div className="w-full absolute top-[285px] pt-[38px] gap-x-8 justify-center  flex flow-row">
          
        
          
            <FeatureCard
              featalt="featBookings"
              featUrl="/featBookings.svg"
              feathead="No Booking Fees"
              featDesc="At Truliv, enjoy a fee-free, transparent, and affordable experience"
            />
            <FeatureCard
              featalt="feat100"
              featUrl="/feat100.svg"
              feathead="100% online process"
              featDesc="Experience a 100% online process for seamless convenience"
            />
            <FeatureCard
              featalt="featShort"
              featUrl="/featShort.svg"
              feathead="Short Notice Period"
              featDesc="Simply raise your notice, 30 days in advance"
            />
            <FeatureCard
              featalt="feat7"
              featUrl="/feat7.svg"
              feathead="7-Day refund policy"
              featDesc="We ensure your refund is processed within 7 working days from your last day of notice"
            />
          </div>
        )}
        {houseType === "Holiday Homes" && (
          <div className="w-full absolute top-[285px] pt-[38px] gap-x-8 justify-center  flex flow-row">
            <FeatureCard2
              featalt="cleanRooms"
              featUrl="/cleanRooms.svg"
              featDesc="Clean rooms"
            />
            <FeatureCard2
              featalt="affordablePrice"
              featUrl="/affordablePrice.svg"
              featDesc="Affordable prices"
            />
            <FeatureCard2
              featalt="culturalExperiences"
              featUrl="/culturalExperiences.svg"
              featDesc="Cultural experiences"
            />
            <FeatureCard2
              featalt="petFriendly"
              featUrl="/petFriendly.svg"
              featDesc="Pet friendly"
            />
          </div>
        )}
        {/* Default rendering if houseType is neither "Coliving" nor "Home" */}
        {!(
          houseType === "Co-Living Spaces" || houseType === "Holiday Homes"
        ) && (
          <div className="w-full md:bg-transparent bg-ptxt absolute top-[150px] md:top-[285px] py-[38px] md:gap-x-8 gap-x-2 gap-y-2  justify-center px-3  flex flex-wrap flow-row">
            <FeatureCard
              featalt="featBookings"
              featUrl="/featBookings.svg"
              feathead="No Booking Fees"
              featDesc="At Truliv, enjoy a fee-free, transparent, and affordable experience"
            />
            <FeatureCard
              featalt="feat100"
              featUrl="/feat100.svg"
              feathead="100% online process"
              featDesc="Experience a 100% online process for seamless convenience"
            />
            <FeatureCard
              featalt="featShort"
              featUrl="/featShort.svg"
              feathead="Short Notice Period"
              featDesc="Simply raise your notice, 30 days in advance"
            />
            <FeatureCard
              featalt="feat7"
              featUrl="/feat7.svg"
              feathead="7-Day refund policy"
              featDesc="We ensure your refund is processed within 7 working days from your last day of notice"
            />
          </div>
        )}
      </div>
    </div>
  );
}
