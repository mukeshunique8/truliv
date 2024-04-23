import React from 'react'

import Image from "next/image";



export default function LifeAtTruliv() {
  return (
    <div className=' w-full flex  justify-center items-center'>
    <div className=' w-[1440px] lifeAT flex justify-center items-center'>
        


    <div className='w-1/2 z-10 pt-[170px] relative flex justify-center  '>
    <Image  className="" src="/lifeAtTruliv.svg" alt="lifeAtTruliv" width={396} height={665}/>
    <Image  className="absolute -z-10 bottom-0 left-0" src="/vectorMountain.svg" alt="vectorMountain" width={817} height={401}/>
    {/* <Image  className="absolute -z-10 top-[92px] right-0" src="/vectorStriped.svg" alt="vectorStriped" width={594} height={40}/> */}
   
    </div>

    <div className='w-1/2  relative flex justify-start pr-[181px] gap-y-[30px] flex-col   '>
        <h2 className='font-semibold text-[48px] text-btxt'>Life at Truliv</h2>
        <p className='font-medium text-[20px] text-btxt'>Lorem ipsum dolor sit amet consectetur. Ac pellentesque adipiscing cras nisl morbi pellentesque vulputate amet. Nibh tincidunt ipsum sem egestas ut. Eu urna consectetur vel hendrerit turpis nullam. Id hac volutpat mauris aliquam. In dis volutpat dolor egestas. At id mi est tellus vitae vestibulum adipiscing. Consequat aliquam odio mi pellentesque quam.</p>
        <Image  className="absolute -z-10 -top-[162px] right-0" src="/vectorStriped.svg" alt="vectorStriped" width={594} height={40}/>
    </div>

    </div>
    </div>
  )
}
