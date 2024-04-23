import React from "react";
import Image from "next/image";

export default function FeatureCard(props) {
  return (
    <div className="w-[212px] h-[277px] flex justify-center  featCardbg">
      <div className="featCardbg1 hover:scale-105 cursor-poi
      nter transition-all duration-700 mx-2 my-[10px] flex flex-col items-center gap-y-[25px]  ">
        <div className="px-[39px] pt-[47px] ">
          <Image
            className="a"
            src={props.featUrl}
            alt={props.featalt}
            width={118}
            height={118}
          />
        </div>

        <div className=" flex flex-col justify-center items-center text-center ">
          <p className="font-semibold text-[16px] cursor-pointer leading-normal  text-[#110229]">
            {props.featDesc}
          </p>
        </div>
      </div>
    </div>
  );
}
