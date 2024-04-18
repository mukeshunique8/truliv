import React from "react";
import FeatureCard from "../components/FeatureCard";

export default function FeatureList() {
  return (
    <div className=" w-full  flex flex-col justify-center items-center">

      <div className="relative bg-orange-600 w-[1440px]  flex flex-col justify-center items-center ">

        <h2 className="font-semibold pt-[194px] text-wtxt leading-[72px] text-[48px]">
          Your Perfect Co - living Partner
        </h2>

        <div className="w-full pt-[38px] gap-x-8 justify-center  flex flow-row">
          <FeatureCard featalt='featBookings' featUrl='/featBookings.svg' feathead='No Booking Fees' featDesc='At Truliv, enjoy a fee-free, transparent, and affordable experience'   />
          <FeatureCard  featalt='feat100' featUrl='/feat100.svg' feathead='100% online process' featDesc='Experience a 100% online process for seamless convenience'   />
          <FeatureCard  featalt='featShort' featUrl='/featShort.svg' feathead='Short Notice Period' featDesc='Simply raise your notice, 30 days in advance'   />
          <FeatureCard  featalt='feat7' featUrl='/feat7.svg' feathead='7-Day refund policy' featDesc='We ensure your refund is processed within 7 working days from your last day of notice'   />
        </div>


      </div>
    </div>
  );
}
