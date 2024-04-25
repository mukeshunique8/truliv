import React from "react";
import Image from "next/image";
import NearbyPropertiesCard from "./NearbyPropertiesCard";


export default function NearbyProperties() {
  return (
    <div className='flex flex-col bg-wtxt w-[1440px] bg- pl-12 '>
     
     <div className="bg-[#FBFBFB] px-6 py-4 flex flex-col ">
     <h2 className="font-medium text-2xl leading-10 text-ptxt">Other Truliv Properties Nearby</h2>

     <div className="mt-6 flex gap-x-10">

     <NearbyPropertiesCard/> 
     <NearbyPropertiesCard/> 
     <NearbyPropertiesCard/> 
     </div>

     </div>
     
     
    </div>
  );
}

{/* <Image className=" rounded-md"src="/rightArrow2.svg"  alt="rightArrow"  width={24}   height={40}/> */}