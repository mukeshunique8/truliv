import React from "react";
import Image from "next/image";


export default function PDLocation() {
  return (
    <div className="flex flex-col w-[800px] gap-y-4 py-[50px] border-b-[1px] border-[#E0E0E0] mt-6">
      <h2 className="font-medium text-2xl leading-8 text-ptxt">Location</h2>
     
     
      <Image className=" rounded-md"src="/mapLocation.png"  alt="lmapLocationife1"  width={784}   height={444}/>


    </div>
  );
}
