import React from 'react'
import Image from "next/image";
export default function LocationView() {
  return (
    <div className='flex justify-start items-center text-wtxt text-[14px] space-x-2'>
        <p>Home </p>
        <Image className="cursor-pointer" src='/whitearrow.svg' alt="whitearrow" width={10} height={10} />
        <p>Chennai</p>
        <Image className="cursor-pointer" src='/whitearrow.svg' alt="whitearrow" width={10} height={10} />
        <p className='font-semibold'>T.Nagar</p>


    </div>
  )
}
