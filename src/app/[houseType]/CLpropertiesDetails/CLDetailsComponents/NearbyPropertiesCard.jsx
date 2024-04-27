import React from 'react'
import Image from 'next/image';

export default function NearbyPropertiesCard(props) {
  return (
    <div className='flex flex-col  relative cursor-pointer'>
      <div className='absolute top-3 left-2'>

        <button className={`px-3 py-[5px] font-medium border-[1px] text-[14px]  rounded-[3px]${props.style}`}>Almost Full</button>

      </div>

      <Image className=" object-center rounded-md"src="/nearbysize.svg"  alt="rightArrow"  width={426}   height={300}/>

      <div className='flex mt-[15px]'>
        <p className='text-base text-[#333333] font-medium'>4.0</p>
      <Image className=" rounded-md"src="/starRating.svg"  alt="starRating"  width={85}   height={17}/>
      </div>
      <h2 className=" mt-1 text-[#333] text-2xl font-semibold">
                Truliv DRA Olympus
              </h2>
      
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
