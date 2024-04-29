import React from "react";
import Image from "next/image";
import BadgeAL from "./UIElements/BadgeAL";
import BadgeSO from "./UIElements/BadgeSO";
import BadgeFF from "./UIElements/BadgeFF";
import BadgeNA from "./UIElements/BadgeNA";
import { useRouter } from 'next/navigation'


export default function HHPropertyBanner() {

    const router = useRouter()

    function routeProperty(){
      router.push('/holidayhomes/HHpropertiesDetails')
    }
  
 

  return (
    <div 
    onClick={routeProperty} className="max-w-[920px] max-h-[250px] cursor-pointer border-[1px] shadow-xl border-[#DBDBDB] bg-wtxt flex  rounded-[10px] p-5   ">
      <div className="gap-x-8 w-full flex">
        <div className="relative flex w-2/5 object-cover">
          <Image
            className=" rounded-md"
            src="/HH1.png"
            alt="HH1"
            width={350}
            height={215}
          />
          <div className="absolute top-0 -left-[15px] ">
          <BadgeFF/>
          </div>
        </div>

        <div className=" flex  w-3/5 flex-col">
          <div className="flex  justify-between">
            <div className="flex  flex-col   gap-y-1">
              <h2 className=" text-[#333] text-2xl font-semibold">
                Truliv DRA Olympus
              </h2>
              
               
                <p className=" font-medium text-[19px] text-[#8F90A6]">
                  Moorthy Nagar, Porur
                </p>
                <Image
                  className="mr-2"
                  src="/starRating.svg"
                  alt="starRating"
                  width={85}
                  height={17}
                />
                 <div className="flex flex-wrap gap-y-2 gap-x-[30px] mt-[13px] ">
                <li className="flex justify-center gap-x-2 items-center">
                  <span>
                    {" "}
                    <Image
                      className=""
                      src="/wifi2.svg"
                      alt="wifi2"
                      width={20}
                      height={20}
                    />
                  </span>
                  Wi-fi
                </li>

                <li className="flex justify-center gap-x-2 items-center">
                  <span>
                    {" "}
                    <Image
                      className=""
                      src="/parking.svg"
                      alt="wifi2"
                      width={20}
                      height={20}
                    />
                  </span>
                  Parking
                </li>

                <li className="flex justify-center gap-x-2 items-center">
                  <span>
                    {" "}
                    <Image
                      className=""
                      src="/security.svg"
                      alt="wifi2"
                      width={20}
                      height={20}
                    />
                  </span>
                  24 x 7 Security
                </li>

                <li className="flex justify-center gap-x-2 items-center">
                  <span>
                    {" "}
                    <Image
                      className=""
                      src="/wifi2.svg"
                      alt="wifi2"
                      width={20}
                      height={20}
                    />
                  </span>
                  Wi-fi
                </li>
              </div>
                
                
             
            </div>

            
          </div>

          {/* <div className="flex flex-col border-b border-[#E6E7E9]">
           

            <div className="flex flex-col mb-5">
              <h2>Featured Amenities</h2>

             
            </div>
          </div> */}

          <div className="flex items-center mt-6 justify-between">
            <div className="flex  gap-y-2">
              <p className="text-ptxt justify-center font-semibold flex items-center text-[28px] leading-[24px]">
              ₹1999 <span className="text-[#8F90A6] ml-2 font-medium text-base"> per room per night</span>
              </p>
            </div>
            
              <button className="flex text-base font-medium text-ptxt py-[6px] px-[22px] w-[155px] cursor-pointer border-[1px] border-ptxt  justify-center rounded-md  items-center ">
                Reserve Now
              </button>
          
          </div>
        </div>
      </div>
    </div>
  );
}
