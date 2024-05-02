import React from "react";
import Image from "next/image";

export default function FeatureCard(props) {
  return (
    <div className="w-[171px] h-[190px] md:w-[212px] md:h-[277px] flex featCardbg">
      <div className="featCardbg1 hover:scale-105 cursor-poi
      nter transition-all duration-700 mx-2 my-[10px] flex flex-col items-center md:gap-y-[25px] gap-y-[15px]  ">
        <div className="px-[39px] pt-[47px] ">
          <Image
            className="hidden md:flex"
            src={props.featUrl}
            alt={props.featalt}
            width={118}
            height={118}
          />
           <Image
            className="md:hidden flex"
            src={props.featUrl}
            alt={props.featalt}
            width={80}
            height={80}
          />
        </div>

        <div className=" flex flex-col justify-center items-center text-center ">
          <p className="font-semibold md:text-[16px] text-[13px] cursor-pointer leading-normal  text-[#110229]">
            {props.featDesc}
          </p>
        </div>
      </div>
    </div>
  );
}
