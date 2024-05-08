import React from 'react'

import Image from "next/image";

export default function AboutTruliv() {
  return (
    <div id='Details' className='flex flex-col  w-full md:w-[800px] gap-y-2 py-[50px] border-b-[1px] border-[#E0E0E0] md:mt-6'>
       <h2 className='font-semibold md:text-2xl text-[20px] leading-8 text-ptxt'>About Truliv Olympus</h2>
       <p className='text-[#232323]  text-[14px] md:text-base leading-[28px]'>        Truliv Olympus-Porur is located in the southwestern part of Chennai & it is well connected to other parts of the city such as Guindy, Vadapalani, and Poonamallee through various modes of transportation.  <span className='flex text-ptxt cursor-pointer'> Read More
        <Image className="cursor-pointer" src='/rightarrow2.svg' alt="dishwasher" width={16} height={16} />

 </span>
        </p>

    </div>
  )
}
