import React from 'react'
import Image from "next/image";


export default function Quotes() {
  return (
    <div className=" w-full max-w-[1440px]   flex flex-col justify-center items-center  ">
    <div className=" bg-[#FFF3EE] mt-[60px] flex flex-col items-center justify-center  max-w-[1440px] ">

        <div className='relative bg-wbg rounded-md flex flex-col text-center mx-[275px] mt-[121px] mb-[75px]'>
            <p className='text-ptxt text-[22px] pt-[50px] font-semibold'>Pradhip Biswas</p>
            <p className='text-[#747474]  text-[18px] font-normal'>Stayed at Truliv Artemis</p>
            <p className='text-btxt text-center text-[24px] px-[45px] py-[50px] font-normal'>The team was always available to answer and resolve any <br /> questions I had. I highly recommend you turn to them for all <br />housing needs.</p>
            <Image
            className="absolute -top-[75px] -left-[33px]"
            src="/quoteUp.svg"
            alt="quoteUp"
            width={127}
            height={127}
          />
           <Image
            className="absolute -bottom-[70px] -right-[18px]"
            src="/quoteDown.svg"
            alt="quoteUp"
            width={127}
            height={127}
          />


        </div>
        <Image
            className="pb-[30px]"
            src="/dots.svg"
            alt="dots"
            width={55}
            height={15}
          />

       

    </div>
    </div>
  )
}
