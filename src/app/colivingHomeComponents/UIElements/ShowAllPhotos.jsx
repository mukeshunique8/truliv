import React from 'react'
import Image from "next/image";

export default function ShowAllPhotos() {
  return (
    <div className='justify-center flex items-center '>

<button className="justify-center gap-x-1 flex items-center py-[13px] rounded-md px-[16px] border-[1px] border-[#E7E8E3] w-fit h-fit bg-white  text-black  leading-[16px] text-[16px] font-medium ">
 <span>  <Image className="cursor-pointer  " src='/showframe.svg' alt="Meditation classes" width={20} height={20} /></span> Show All Photos
              </button>
            

    </div>
  )
}
