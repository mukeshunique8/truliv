import React from 'react'
import Image from "next/image";



export default function AreaCards(props) {
  return (

    // pb-2

    <div className='w-[165px] hover:scale-105 transition-all duration-700 h-[250px] cursor-pointer pb-2 rounded-xl bg-wbg hover:border-ptxt border flex flex-col justify-between items-center '>

        <div className='flex flex-col mt-5  justify-center items-center'>
        <p className='text-[12px] cursor-pointer text-center mx-[34px] leading-[18px] text-btxt'>{props.desc}</p>
        <p className='text-ptxt cursor-pointer text-xl leading-[30px] font-semibold'>{props.area}</p>
        </div>

        <div>
        <Image
          src={props.areaUrl}
          alt={props.areaAlt}
          width={props.imgw}
          height={props.imgh}
        />
        </div>
    

    </div>
  )
}
