import React from "react";
import Image from "next/image";
import Badge from "./UIElements/BadgeAL";

import BadgeAL from "./UIElements/BadgeAL";
import BadgeSO from "./UIElements/BadgeSO";
import BadgeFF from "./UIElements/BadgeFF";
import BadgeNA from "./UIElements/BadgeNA";
import { useRouter } from "next/navigation";

export default function HHPropertyBanner({ badge: Badge }) {
  const router = useRouter();

  function routeProperty() {
    router.push("/holidayhomes/HHpropertiesDetails");
  }

  return (
    <div
      onClick={routeProperty}
      className=" cursor-pointer border-[1px] shadow-2xl border-[#DBDBDB] bg-wtxt flex md:flwo rounded-[10px] md:p-5 "
    >
      <div className="gap-x-8 w-full flex flex-col md:flex-row">
        <div className="relative flex md:w-2/5 w-full  object-cover">
          <div className="w-[300px] h-[200px] md:w-[300px] md:h-[200px]">
            <Image
              className=" rounded-md"
              src="/HH1.png"
              alt="rightArrow"
              fill={true}
            />
          </div>
          <div className="absolute top-0 -left-[15px] ">
          <Badge />
          </div>
        </div>

        <div className=" flex px-5 md:px-0 justify-center  md:w-3/5 w-full flex-col ">
          <div className="flex  justify-between">
            <div className="flex mt-4 md:mt-0 md:space-y-2 items-start flex-col ">
              <h2 className=" text-[#333]  md:text-2xl text-[28px] font-semibold">
                Truliv DRA Olympus
              </h2>
              <div className="flex  justify-start">
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
              <Image
                className="mr-2 hidden md:flex"
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

          <div className="flex md:flex-row flex-col items-start md:items-center my-5 md:my-0 md:mt-6 justify-between">
            <div className="flex flex-col gap-y-2">
              <p className="text-ptxt justify-center font-semibold flex items-center text-[28px] leading-[24px]">
                ₹1999{" "}
                <span className="text-[#8F90A6] ml-2 font-medium text-base">
                  {" "}
                  per room per night
                </span>
              </p>
            </div>

            <button className="flex text-base font-medium text-ptxt mt-5 md:mt-0 py-[10px] px-6  cursor-pointer border-[1px] border-ptxt  justify-center rounded-xl  items-center ">
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
