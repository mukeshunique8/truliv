import React from 'react'
import Image from "next/image";



export default function HowDoes() {
  return (
    <div className=" w-full   flex flex-col justify-center items-center">
      <div className="  w-[1440px] mt-[97px] flex flex-col justify-center items-center ">

        <p className='text-[48px] pb-[100px] leading-[72px] font-semibold'>How does it work?</p>


        {/* Step 1 */}

        <div className=' bg-sbg rounded-t-[25%] flex  px-[170px] '>
            <div className='relative w-1/2 flex flex-col pt-[280px] items-start '>
            <Image
                      className="absolute  top-[190px] -left-3"
                      src="/1.svg"
                      alt="1"
                      width={59}
                      height={225}
                    />

                  {/* <Image
                      className="absolute stroke-3  top-[330px] left-[140px]"
                      src="/vectorCurve.svg"
                      alt="vectorCurve" 
                      width={659}
                      height={565}
               
                    /> */}
                <h2 className='text-[48px] z-10 leading-[72px] font-semibold text-ptxt'>Schedule A Visit</h2>
                <p className='text-[16px] z-10 pl-[30px] leading-[24px] font-semibold'>Our executives will call to assist in understanding your requirements, identifying properties near your workplace or preferred location.</p>
            </div>
            <div className='w-1/2  pt-[120px] flex justify-center items-center '>

            <Image
            className=""
            src="/HDSchedule.svg"
            alt="HDSchedule"
            width={468}
            height={359}
          />

        

            </div>
        </div>



      {/* Step 2 */}

      <div className='bg-sbg flex gap-x-[176px] flex-row-reverse pt-[250px] px-[170px] '>
            <div className='w-1/2 relative justify-center flex flex-col items-start '>
            <Image
                      className="absolute  top-[55px] left-0"
                      src="/2.svg"
                      alt="2"
                      width={59}
                      height={225}
                    />
                     {/* <Image
                      className="absolute stroke-3  top-[330px] -left-[140px]"
                      src="/vectorCurve1.svg"
                      alt="vectorCurve" 
                      width={659}
                      height={565}
               
                    /> */}
                <h2 className='text-[48px] leading-[72px] z-10 font-semibold text-ptxt'>Visit The Property</h2>
                <p className='text-[16px] pl-[30px]  z-10 leading-[24px] font-semibold'>After speaking with our executives, they will schedule a visit to show you the complete property inside and out.</p>
            </div>
            <div className='w-1/2 relative  flex justify-center items-center '>

            <Image
            className="pr-8"
            src="/HDVisit.svg"
            alt="HDVisit"
            width={766}
            height={344}
          />
          
          {/* <Image
          className="absolute stroke-3  top-[330px] -left-[140px]"
          src="/vectorCurve1.svg"
          alt="vectorCurve" 
          width={659}
          height={565}
   
        /> */}

            </div>
        </div>
        

        {/* Step 3 */}

        <div className='bg-sbg rounded-b-[25%] flex gap-x-[176px]   pb-[260px] px-[170px] '>
            <div className='w-1/2 relative flex flex-col pt-[280px] items-start '>
            <Image
                      className="absolute  top-[235px] left-1"
                      src="/3.svg"
                      alt="3"
                      width={59}
                      height={225}
                    />
                <h2 className='text-[48px] z-10 leading-[72px] font-semibold text-ptxt'>Move In To Your New Home</h2>
                <p className='text-[16px] pl-[30px] leading-[24px] font-semibold'>After visiting and booking your desired property, you can seamlessly transition to the Truliv community.</p>
            </div>
            <div className='w-1/2  pt-[120px] flex justify-center items-center '>

            <Image
            className=""
            src="/HDMove.svg"
            alt="HDMove"
            width={468}
            height={295}
          />

            </div>
        </div>







    </div>
    </div>
  )
}









