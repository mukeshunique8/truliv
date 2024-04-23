import React from 'react'
import Image from "next/image";
export default function HotelBanner() {
  return (


    <div className='drop-shadow-hhds bg-wtxt flex rounded-[30px]  p-4 gap-x-5'>

        <div className=' '>

        <Image className="rounded-xl" src="/TrulivIpsum.png" alt="hh1"  width={391}   height={216}   />
        </div>

        <div className='drop-shadow-hhds flex flex-col justify-center gap-y-[5px] '> 
            <h1 className='text-dbtxt text-2xl font-semibold '>Truliv Ipsum, Kovalam</h1>
            <p className='text-gtxt text-[19px] font-normal'>ECR, Chennai</p>
          <Image className="" src="/starRating.svg" alt="hh1"  width={114}   height={24}   />
          <div className='flex gap-x-[30px] mt-[15px] '>
            <li className='flex justify-center gap-x-2 items-center'> 
            <span>  <Image className="" src="/wifi2.svg" alt="wifi2"  width={20}   height={20}   /></span>
            Wi-fi</li>

            <li className='flex justify-center gap-x-2 items-center'> 
            <span>  <Image className="" src="/parking.svg" alt="wifi2"  width={20}   height={20}   /></span>
            Parking</li>

            <li className='flex justify-center gap-x-2 items-center'> 
            <span>  <Image className="" src="/security.svg" alt="wifi2"  width={20}   height={20}   /></span>
            24 x 7 Security</li>

            <li className='flex justify-center gap-x-2 items-center'> 
            <span>  <Image className="" src="/wifi2.svg" alt="wifi2"  width={20}   height={20}   /></span>
            Wi-fi</li>
          </div>

          <a href='' className='flex w-[155px] cursor-pointer  justify-start mt-[42px] items-center gap-x-[10px]'>
            

            <h2 className='text-ptxt cursor-pointer text-[18px] font-medium '>Reserve Now</h2>
            <Image className="" src="/rightArrow2.svg" alt="rightArrow2"  width={18}   height={18}   />

          </a>
        </div>

    </div>


  )
}
