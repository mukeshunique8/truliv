import React from 'react'
import Image from "next/image";



export default function AreaCards(props) {
  return (

    <div className='w-[165px] h-[250px] rounded-xl bg-wbg border-ptxt border flex flex-col justify-between items-center '>

        <div className='flex flex-col mt-5  justify-center items-center'>
        <p className='text-[12px] text-center mx-[34px] leading-[18px] text-btxt'>{props.desc}</p>
        <p className='text-ptxt text-xl leading-[30px] font-semibold'>{props.area}</p>
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
