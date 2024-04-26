import React from "react";
import Image from "next/image";


export default function HouseRules() {
  return (
    <div className="flex flex-col w-[800px] gap-y-4 py-[50px] border-b-[1px] border-[#E0E0E0] mt-6">
     
     <div className="bg-[#FBFBFB] px-6 py-4 flex justify-between ">
     <h2 className="font-medium text-2xl leading-10 text-ptxt">House Rules & Policies</h2>
     <Image className=" rounded-md"src="/rightArrow2.svg"  alt="rightArrow"  width={24}   height={40}/>

     </div>
     
     
    </div>
  );
}
