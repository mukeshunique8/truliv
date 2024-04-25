import React from 'react'
import Image from 'next/image';

export default function NearbyPropertiesCard() {
  return (
    <div className='flex flex-col'>
      <Image className=" rounded-md"src="/Nearby1.png"  alt="rightArrow"  width={426}   height={298}/>

      <div className='flex mt-[15px]'>
        <p className='text-base text-[#333333] font-medium'>4.0</p>
      <Image className=" rounded-md"src="/starRating.svg"  alt="starRating"  width={85}   height={17}/>
      </div>
      <h2 className="mt-1">Truliv DRA Olympus</h2>
      
      <div className="flex items-center mt-1">
                <Image
                  className="mr-2"
                  src="/locationOn.svg"
                  alt="location"
                  width={16}
                  height={16}
                />
                <p className=" text-[14px] text-[#1D1D1D]">
                Moorthy Nagar, Porur
                </p>
                
              </div>
    </div>
  )
}
