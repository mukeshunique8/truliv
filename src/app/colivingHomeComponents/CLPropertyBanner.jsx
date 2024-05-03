import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Badge from "./UIElements/BadgeAL";

import BadgeAL from "./UIElements/BadgeAL";
import BadgeSO from "./UIElements/BadgeSO";
import BadgeFF from "./UIElements/BadgeFF";
import BadgeNA from "./UIElements/BadgeNA";

export default function CLPropertyBanner({ badge: Badge }) {
  const router = useRouter();

  function routeProperty() {
    router.push("/coliving/CLpropertiesDetails");
  }

  return (
    <div
      onClick={routeProperty}
      className="w-[330px] h-auto md:w-[920px] md:h-[356px] cursor-pointer border-[1px] shadow-2xl border-[#DBDBDB] bg-wtxt flex md:flwo rounded-[10px] md:p-5 "
    >
      <div className="gap-x-8 w-full flex flex-col md:flex-row">
        <div className="relative flex md:w-1/3 w-full  object-cover">
          <div className="w-[330px] h-[250px] md:w-[300px] md:h-[200px]">
            <Image
              className=" rounded-md"
              src="/Nearby2.png"
              alt="rightArrow"
              fill={true}
            />
          </div>
          <div className="absolute top-0 -left-[15px] ">
          <Badge />
          </div>
        </div>

        <div className=" flex px-5 md:px-0   md:w-2/3 w-full flex-col ">
          <div className="flex flex-col md:flex-row  md:pb-6 md:border-b md:border-[#E6E7E9] justify-between">
            <div className="flex mt-4 md:mt-0  flex-col ">
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
            </div>

            <div className=" flex-col hidden md:flex justify-start items-center">
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

          <div className="flex flex-col md:border-b md:border-[#E6E7E9]">
            <div className="flex flex-wrap gap-y-2 gap-x-[30px] my-3 md:mb-5  md:mt-[23px] ">
              <li className="flex justify-center gap-x-2 items-center">
                <span>
                  {" "}
                  <Image
                    className=""
                    src="/furniture3.svg"
                    alt="wifi2"
                    width={20}
                    height={20}
                  />
                </span>
                Single, Double & Triple
              </li>
              <li className="flex justify-center gap-x-2 items-center">
                <span>
                  {" "}
                  <Image
                    className=""
                    src="/unisex.svg"
                    alt="Unisex"
                    width={20}
                    height={20}
                  />
                </span>
                Wi-fi
              </li>
            </div>

            <div className="md:flex hidden flex-col mb-5">
              <h2 className="font-semibold">Featured Amenities</h2>

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

          <div className="flex md:flex-row flex-col items-start md:items-center mb-5 md:mb-0 md:mt-6 justify-between">
            <div className="flex flex-col gap-y-2">
              <p className="text-btxt hidden md:flex text-base">Starts from</p>
              <p className="text-ptxt md:text-btxt justify-center font-bold flex items-center text-[26px] leading-[24px]">
                ₹3,000<span className=" ml-2 text-btxt text-base">/ month</span>
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
