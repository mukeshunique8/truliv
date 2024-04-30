import React from 'react'
import Image from "next/image";



export default function AreaCards(props) {
  return (

    // pb-2

    <div className=' w-[118px] h-[179px] md:w-[180px]  md:h-[250px] hover:scale-105 hover:shadow-ptxt hover:shadow-md transition-all duration-700  cursor-pointer pb-2 rounded-xl bg-wbg hover:border-ptxt border hover:border-[1px] flex flex-col justify-between items-center '>

        <div className='flex flex-col mt-5  justify-center items-center'>
        <p className='text-[12px] cursor-pointer text-center md:mx-[34px] leading-[18px] text-btxt'>{props.desc}</p>
        <p className='text-ptxt cursor-pointer text-[13px] md:text-xl leading-[30px] font-semibold'>{props.area}</p>
        </div>

        <div>
        <Image
        className='hidden md:flex'
          src={props.areaUrl}
          alt={props.areaAlt}
          width={props.imgw}
          height={props.imgh}
        />
        <Image
        className='md:hidden flex'
          src={props.areaUrl}
          alt={props.areaAlt}
          width={props.simgw}
          height={props.simgh}
        />
        </div>
    

    </div>
  )
}
