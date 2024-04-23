import React from 'react'

import Image from "next/image";
import ConnectionCards from "../components/ConnectionCards";




export default function Connections() {
  return (
    <div className=' w-full flex justify-center items-center'>

        <div className='w-[1440px]  flex flex-col justify-center items-center'>

       

    <div className='   flex flex-col justify-center items-center'>
        <p className='text-[25px] font-medium uppercase pt-[78px] text-ptxt'>Empowering Lives</p>
        <h2 className='text-[48px] font-normal  text-btxt'>Inspiring Connections.</h2>
    </div>

    <div className='mapbox mt-10 rounded-[26px] bg-white  px-[33px] py-[35px] gap-y-[35px]   flex flex-col justify-center items-center'>

      <div>

    <Image  className="rounded-[26px]" src="/mapRectangle.svg" alt="mapRectangle" width={1266} height={430}/>
      </div>

    
    <div className="bg-pbg flex justify-center text-center items-center rounded-[26px] px-[50px] py-[35px]">

               <ConnectionCards borderstyle='border-r bottom-2 border-[#ffffff59]' p1= '2500+' p2= 'Beds' />
               <ConnectionCards borderstyle='border-r bottom-2 border-[#ffffff59]' p1= '90%' p2= 'Happy customers' />
               <ConnectionCards borderstyle='border-r bottom-2 border-[#ffffff59]' p1= '< 48 Hrs' p2= 'Ticket resolution time' />
               <ConnectionCards p1= '21' p2= 'Number of Properties' />

                

    </div>

    </div>
    </div>

    </div>
  )
}
