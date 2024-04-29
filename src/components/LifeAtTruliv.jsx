import React from 'react'

import Image from "next/image";



export default function LifeAtTruliv() {
  return (
    // <div className=' w-full bg-green-800 mx-0  flex  justify-center items-center'>
    // <div className=' lifeAT flex justify-center items-center'>
        


    // <div className='w-1/2 z-10 mb-[100px] pt-[170px] relative flex justify-start pl-[90px]  '>
    // <Image  className="" src="/lifeAtTruliv.svg" alt="lifeAtTruliv" width={396} height={665}/>
    // <Image  className="absolute -z-10 bottom-0 left-0" src="/vectorMountain.svg" alt="vectorMountain" width={817} height={401}/>
    // {/* <Image  className="absolute -z-10 top-[92px] right-0" src="/vectorStriped.svg" alt="vectorStriped" width={594} height={40}/> */}
   
    // </div>

    // <div className='w-1/2  relative flex justify-start pr-[181px] gap-y-[30px] flex-col   '>
    //     <h2 className='font-semibold text-[48px] text-btxt'>Life at Truliv</h2>
    //     <p className='font-medium text-[20px] text-btxt'>Lorem ipsum dolor sit amet consectetur. Ac pellentesque adipiscing cras nisl morbi pellentesque vulputate amet. Nibh tincidunt ipsum sem egestas ut. Eu urna consectetur vel hendrerit turpis nullam. Id hac volutpat mauris aliquam. In dis volutpat dolor egestas. At id mi est tellus vitae vestibulum adipiscing. Consequat aliquam odio mi pellentesque quam.</p>
    //     <Image  className="absolute -z-10 -top-[162px] right-0" src="/vectorStriped.svg" alt="vectorStriped" width={594} height={40}/>
    // </div>

    // </div>
    // </div>

    <div className='w-full flex relative  h-[850px] '>


      <div className='w-1/2'>
        
<Image  className="absolute z-20 bottom-0 left-[136px]" src="/lifeAtTruliv.svg" alt="lifeAtTruliv" width={396} height={665}/>

      </div>
<Image  className="absolute  top-[92px] right-0" src="/vectorStriped.svg" alt="vectorStriped" width={594} height={40}/>
<Image  className="absolute z-10 bottom-0 left-0" src="/vectorMountain.svg" alt="vectorMountain" width={817} height={401}/>

    
    <div className='pt-[265px] z-30  w-1/2'>
       <h2 className='font-semibold text-[48px] text-btxt'>Life at Truliv</h2>
   <p className='font-medium w-[500px] text-[20px] mt-6 text-btxt'>Lorem ipsum dolor sit amet consectetur. Ac pellentesque adipiscing cras nisl morbi pellentesque vulputate amet. Nibh tincidunt ipsum sem egestas ut. Eu urna consectetur vel hendrerit turpis nullam. Id hac volutpat mauris aliquam. In dis volutpat dolor egestas. At id mi est tellus vitae vestibulum adipiscing. Consequat aliquam odio mi pellentesque quam.</p>
    </div>

    </div>
  )
}
