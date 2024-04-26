import React from "react";
import Image from "next/image";
import Badge from "../colivingHomeComponents/UIElements/Badge";
import { useRouter } from 'next/navigation'


export default function PropertyBanner() {

    const router = useRouter()

    function routeProperty(){
      router.push('/coliving/propertiesDetails')
    }
  
  return (
    <div 
    onClick={routeProperty} className="w-full cursor-pointer border-[1px] shadow-2xl border-[#DBDBDB] bg-wtxt flex  rounded-[10px] p-5   ">
      <div className="gap-x-8 w-full flex">
        <div className="relative flex w-1/3 object-cover">
          <Image
            className=" rounded-md"
            src="/Nearby2.png"
            alt="rightArrow"
            width={300}
            height={200}
          />
          <div className="absolute top-0 -left-[15px] ">
          <Badge/>
          </div>
        </div>

        <div className=" flex  w-2/3 flex-col ">
          <div className="flex  pb-6 border-b border-[#E6E7E9] justify-between">
            <div className="flex  flex-col ">
              <h2 className=" text-[#333] text-2xl font-semibold">
                Truliv DRA Olympus
              </h2>
              <div className="flex justify-start">
                <Image
                  className="mr-2"
                  src="/locationOn.svg"
                  alt="location"
                  width={16}
                  height={16}
                />
                <p className=" text-[14px] text-[#1D1D1D]">
                  Moorthy Nagar, Porur
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-start items-center">
              <div className="flex ">
                <p className="pr-2">4.0</p>
                <Image
                  className="mr-2"
                  src="/starRating.svg"
                  alt="starRating"
                  width={85}
                  height={17}
                />
              </div>
              <p className="">(7 Reviews)</p>
            </div>
          </div>

          <div className="flex flex-col border-b border-[#E6E7E9]">
            <div className="flex flex-wrap gap-y-2 gap-x-[30px] mb-5 mt-[23px] ">
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
                    src="/wifi2.svg"
                    alt="wifi2"
                    width={20}
                    height={20}
                  />
                </span>
                Wi-fi
              </li>
            </div>

            <div className="flex flex-col mb-5">
              <h2>Featured Amenities</h2>

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

          <div className="flex items-center mt-6 justify-between">
            <div className="flex flex-col gap-y-2">
              <p className="text-btxt text-base">Starts from</p>
              <p className="text-btxt justify-center font-bold flex items-center text-[26px] leading-[24px]">
                ₹3,000<span className="text-btxt text-base">/month</span>
              </p>
            </div>
            
              <button className="flex text-base font-medium text-ptxt py-[10px] px-6 w-[155px] cursor-pointer border-[1px] border-ptxt  justify-center rounded-xl  items-center ">
                Reserve Now
              </button>
          
          </div>
        </div>
      </div>
    </div>
  );
}
