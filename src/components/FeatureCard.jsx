import React from "react";
import Image from "next/image";

export default function FeatureCard(props) {
  return (
    <div className="w-[212px] h-[277px] flex justify-center  featCardbg">
        
      <div className="featCardbg1 hover:scale-105 cursor-pointer transition-all duration-700 mx-2 my-[10px] flex flex-col items-center  ">

        <div className="px-[68px] pt-[42px] ">
          <Image
            className="a"
            src={props.featUrl}
            alt={props.featalt}
            width={60}
            height={60}
          />
        </div>

   

        <div className="px-[17px] py-[22px]  flex flex-col justify-center items-center gap-y-2 text-center ">
          <p className="font-semibold text-base cursor-pointer text-btxt">{props.feathead}</p>
          <p className="font-normal text-[13px] cursor-pointer leading-[19px] text-[#6D6D6D]">
          {props.featDesc}
          </p>
        </div>
      </div>
    </div>
  );
}
