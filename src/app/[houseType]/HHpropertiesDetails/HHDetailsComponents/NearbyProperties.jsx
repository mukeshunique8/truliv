import React from "react";
import Image from "next/image";
import NearbyPropertiesCard from "./NearbyPropertiesCard";


export default function NearbyProperties() {
  return (
    <div className='flex flex-col bg-wtxt w-[1440px] pb-10 pl-12 '>
     
     <div className="bg-[#FBFBFB] px-6 py-4 flex flex-col ">
     <h2 className="font-semibold text-2xl leading-10 text-ptxt">Explore Other Holiday Homes</h2>

     <div className="mt-6 flex gap-x-10">

     <NearbyPropertiesCard style=' bg-[#FFF9F5]  text-ptxt border-ptxt'/> 
     <NearbyPropertiesCard style=' bg-[#53BD00]  text-white border-[#06992F]'/> 
     <NearbyPropertiesCard style=' bg-[#FFF9F5]  text-ptxt border-ptxt'/> 
     </div>

     </div>
     
     
    </div>
  );
}

{/* <Image className=" rounded-md"src="/rightArrow2.svg"  alt="rightArrow"  width={24}   height={40}/> */}