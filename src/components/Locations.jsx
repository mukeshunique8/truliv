import React from "react";
import AreaCards from "../components/AreaCards";
import Image from "next/image";

export default function Locations() {
  return (
    <div className="bg-[#FFF3EE] relative    w-full flex flex-col justify-center items-center">
      {/* Location Font */}

      <div className="w-[1440px]  flex flex-col justify-center items-center ">
        <h2 className="text-[#000000] mt-[377px] text-center font-medium text-5xl leading-[72px]">
          We are available in many <br /> places in{" "}
          <span className="border-b-2  border-[#E95F29]">Chennai</span>{" "}
        </h2>
      </div>

      {/* Location Cards */}

      <div className="relative w-[1440px] pb-[45px] bg-sbg z-40 rounded-b-[25%]  pt-[54px] px-[44px] gap-y-[33px]  flex-wrap flex  justify-evenly  bg-yellow-300-400  ">
        <AreaCards
          imgw="79"
          imgh="154"
          area="OMR"
          desc="As historic as"
          areaUrl="/OMR.svg"
          areaAlt="OMR"
        />
        <AreaCards
          imgw="104"
          imgh="147"
          area="Shenoy Nagar"
          desc="As traditional as"
          areaUrl="/Shenoy Nagar.svg"
          areaAlt="Shenoy Nagar"
        />
        <AreaCards
          imgw="115"
          imgh="155"
          area="Anna Nagar"
          desc="As cultural as"
          areaUrl="/Anna Nagar.svg"
          areaAlt="Anna Nagar"
        />
        <AreaCards
          imgw="73"
          imgh="147"
          area="Porur"
          desc="As historic as"
          areaUrl="/Porur.svg"
          areaAlt="Porur"
        />
        <AreaCards
          imgw="131"
          imgh="117"
          area="Nungambakkam"
          desc="As traditional as"
          areaUrl="/Nungambakkam.svg"
          areaAlt="Nungambakkam"
        />
        <AreaCards
          imgw="127"
          imgh="155"
          area="Adayar"
          desc="As cultural as"
          areaUrl="/Adayar.svg"
          areaAlt="Adayar"
        />
        <AreaCards
          imgw="110"
          imgh="147"
          area="T. Nagar"
          desc="As traditional as"
          areaUrl="/T. Nagar.svg"
          areaAlt="T. Nagar"
        />
         {/* <div className="absolute -z-30 top-0 w-[1440px]  ">
        <Image
          className=""
          src="/rectanglePrimary.svg"
          alt="rectanglePrimary"
          width={1440}
          height={446}
        />

        
      </div> */}
      </div>

     

      
    </div>
  );
}
