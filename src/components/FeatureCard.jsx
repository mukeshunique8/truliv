import { React, useContext } from "react";
import Image from "next/image";
import { HouseContext } from "../Contexts/HouseContext";

export default function FeatureCard(props) {
  const { houseType } = useContext(HouseContext);

  return (
    <div className="w-full h-full md:w-[212px] md:h-[277px] flex featCardbg">
      <div className="featCardbg1 w-full h-auto gap-y-5 hover:scale-105 items-center justify-center     cursor-pointer transition-all duration-700 mx-2 my-2 md:my-[10px] flex flex-col p-2 sm:py-4  ">
        <div
        // className="relative w-[60px] h-[60px]"
          className={`relative   ${
            houseType === "Holiday Homes" ? "w-[120px]" : "w-[60px]"
          } ${houseType === "Holiday Homes" ? "h-[120px]" : "h-[60px]"}`}
        >
          <Image
            className="flex"
            src={props.featUrl}
            alt={props.featalt}
            fill
            sizes="100%"
          />
        </div>

        <div className=" gap-y-2 flex flex-col justify-center items-center text-center ">
          <p className="font-semibold text-base cursor-pointer text-[13px] md:text-btxt">
            {props.feathead}
          </p>
          <p className="font-normal text-[11px] md:text-[13px] cursor-pointer leading-normal md:leading-[19px] text-[#6D6D6D]">
            {props.featDesc}
          </p>
        </div>
      </div>
    </div>
  );
}

// className={`relative   w-${
//   houseType === "Holiday Homes" ? "[120px]" : "[60px]"
// } h-${houseType === "Holiday Homes" ? "[120px]" : "[60px]"}`}