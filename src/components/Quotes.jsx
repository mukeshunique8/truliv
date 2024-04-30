import React from 'react'
import Image from "next/image";


export default function Quotes() {
  return (
    <div className=" w-full    flex flex-col justify-center items-center  ">
    <div className=" bg-[#FFF3EE] w-full mt-7  md:mt-[60px] flex flex-col items-center justify-center   ">

        <div className='relative max-w-[1440px] bg-[#FFFF] rounded-md flex flex-col text-center mx-[30px] md:mx-[275px] mt-[60px] md:mt-[121px] mb-[60px] md:mb-[75px]'>
            <p className='text-ptxt text-[16px] md:text-[22px] pt-[50px] font-semibold'>Pradhip Biswas</p>
            <p className='text-[#747474]  text-[12px] md:text-[18px] font-normal'>Stayed at Truliv Artemis</p>
            <p className='text-btxt text-center text-[16px]  md:text-[24px] px-5 md:px-[45px] py-6 md:py-[50px] font-normal'>The team was always available to answer and resolve any <br /> questions I had. I highly recommend you turn to them for all <br />housing needs.</p>
            <Image
            className="hidden md:absolute -top-[75px] -left-[33px]"
            src="/quoteUp.svg"
            alt="quoteUp"
            width={127}
            height={127}
          />
           <Image
            className=" hidden md:absolute -bottom-[70px] -right-[18px]"
            src="/quoteDown.svg"
            alt="quoteUp"
            width={127}
            height={127}
          />

<Image
            className="absolute -top-[55px] -left-[23px]"
            src="/quoteUp.svg"
            alt="quoteUp"
            width={89}
            height={89}
          />
           <Image
            className="absolute -bottom-[40px] -right-[18px]"
            src="/quoteDown.svg"
            alt="quoteUp"
            width={89}
            height={89}
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
