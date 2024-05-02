import React from "react";
import Image from "next/image";

export default function FeatureCard(props) {
  return (
    <div className="w-[171px] h-[190px] md:w-[212px] md:h-[277px] flex featCardbg">
        
      <div className="featCardbg1 hover:scale-105  cursor-pointer transition-all duration-700 mx-2 my-2 md:my-[10px] flex flex-col items-center  ">

        <div className="md:px-[68px] pt-3 md:pt-[42px] ">
          <Image
            className="hidden md:flex"
            src={props.featUrl}
            alt={props.featalt}
            width={60}
            height={60}
          />
          <Image
            className="md:hidden flex"
            src={props.featUrl}
            alt={props.featalt}
            width={38}
            height={38}
          />
        </div>

   

        <div className="md:px-[17px] p-1 md:py-[22px]  flex flex-col justify-center items-center md:gap-y-2 text-center ">
          <p className="font-semibold text-base cursor-pointer text-[13px] md:text-btxt">{props.feathead}</p>
          <p className="font-normal text-[11px] md:text-[13px] cursor-pointer leading-normal md:leading-[19px] text-[#6D6D6D]">
          {props.featDesc}
          </p>
        </div>
      </div>
    </div>
  );
}
