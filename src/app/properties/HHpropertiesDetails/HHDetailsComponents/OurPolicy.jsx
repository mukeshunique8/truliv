import React from 'react'

import Image from "next/image";

export default function OurPolicy() {
  return (
    <div id='Our Policy' className='flex flex-col w-full  md:w-[800px] gap-y-2 py-[50px] border-b-[1px] border-[#E0E0E0] md:mt-6'>
        <h2 className='font-semibold  text-2xl leading-8 text-ptxt'>Our Policy</h2>

        <div className='mt-[20px] flex gap-x-[50px]'>

        <div className='flex flex-col'>
                <p  className='text-[#232323]  text-[16px] '>Check-in</p>
                <p className='text-[#232323]  text-[24px] font-semibold'>12:00 PM</p>

            </div>

            
            <div className='flex flex-col'>
                <p  className='text-[#232323]  text-[16px] '>Check-Out</p>
                <p className='text-[#232323]  text-[24px] font-semibold'>11:00 AM</p>

            </div>


        </div>

        <div className='flex flex-col jce text-[#262626] mt-[30px]  text-[14px] '>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit ametng elit.</li>
            <li>Lorem ng elit.</li>
            <li>Lorem dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur it.</li>
        </div>
        
        <div className='mt-5 flex font-bold text-ptxt gap-x-2'   >
        <p className='cursor-pointer'> View Guest Policy</p><Image className="cursor-pointer" src='/rightarrow2.svg' alt="dishwasher" width={16} height={16} />
        </div>
        

    </div>
  )
}
