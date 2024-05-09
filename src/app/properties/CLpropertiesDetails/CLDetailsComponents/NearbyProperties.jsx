import React from "react";
import Image from "next/image";
import NearbyPropertiesCard from "./NearbyPropertiesCard";



export default function NearbyProperties() {
  
  return (
    <div className='flex flex-col bg-wtxt md:max-w-[1440px] pb-10 items-start w-full '>
     
     <div className=" px-6 py-4 flex flex-col ">
     <h2 className="font-semibold text-[20px] md:text-2xl md:leading-10 leading-[20px] text-ptxt">Other Truliv Properties Nearby</h2>

     <div className="mt-6 flex flex-wrap gap-x-4 md:gap-x-10">

     <NearbyPropertiesCard style=' bg-[#FFF9F5]  text-ptxt border-ptxt'/> 
     <NearbyPropertiesCard style=' bg-[#53BD00]  text-white border-[#06992F]'/> 
     <NearbyPropertiesCard style=' bg-[#53BD00]  text-white border-[#06992F]'/> 
     {/* <NearbyPropertiesCard style=' bg-[#FFF9F5]  text-ptxt border-ptxt'/>  */}
     </div>

     </div>
     
     
    </div>
  );
}
