import { React, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Badge from "./UIElements/BadgeAL";
import BadgeAL from "./UIElements/BadgeAL";
import BadgeSO from "./UIElements/BadgeSO";
import BadgeFF from "./UIElements/BadgeFF";
import BadgeNA from "./UIElements/BadgeNA";
import { HouseContext } from "../../Contexts/HouseContext";

export default function PropertyBanner({ badge: Badge }) {
  const { houseType } = useContext(HouseContext);
  const router = useRouter();
  const routePath = `/properties/${houseType === 'Co-Living Spaces' ? 'CLpropertiesDetails' : 'HHpropertiesDetails'}`;

  function routeProperty() {
    router.push(routePath);

  }

  return (
    <div
    onClick={routeProperty}
      className={`"  gap-x-[20px] items-center justify-center md:p-[28px] p-0 rounded-[10px] shadow-lg flex flex-col md:flex-row md:border-none border-[1px] border-[#DBDBDB]"
    ${
      houseType === "Holiday Homes"
        ? "md:max-w-[920px] md:max-h-[250px]  max-w-[350px] max-h-[545px] w-full "
        : "md:max-w-[920px] md:max-h-[360px]  max-w-[350px] max-h-[545px] w-full"
    }
    `}
    >
      {/* Property Image */}
      <div
        className={`"  "
      ${
        houseType === "Holiday Homes"
          ? "w-full relative md:w-2/5 md:max-w-[300px] h-[215px]"
          : "w-full relative md:w-2/5 md:max-w-[300px] h-[300px]"
      }
      `}
      >
        <Image
          className="cursor-pointer  object-cover md:rounded-[10px] rounded-tl-[10px]  rounded-tr-[10px]  "
          src="/Nearby2.png"
          alt="Nearby2"
          fill
          sizes="100%"
        />
        <div className="absolute top-0 -left-[15px] ">
          <Badge />
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col px-5 md:px-0 w-full md:w-3/5 ">
        <div className={` md:pb-6 md:border-b md:border-[#E6E7E9] justify-between
        ${houseType === 'Holiday Homes'? 'flex flex-col md:flex-col space-y-4 ': 'flex flex-col md:flex-row '}
        `}>
          <div className="flex mt-4 md:mt-0  flex-col ">
            <h2 className=" text-[#333]  md:text-2xl text-[28px] font-semibold">
              Truliv Lorem, ECR
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

          <div
            className={`" flex-col hidden md:flex justify-start items-center"
            ${houseType === "Holiday Homes" ? "" : ""}
            `}
          >
            <div className="flex ">
              <p
                className={`
            ${houseType === "Holiday Homes" ? "hidden" : "pr-2"}
            `}
              >
                4.0
              </p>
              <Image
                className="mr-2"
                src="/starRating.svg"
                alt="starRating"
                width={85}
                height={17}
              />
            </div>
            <p
              className={`
            ${houseType === "Holiday Homes" ? "hidden" : ""}
            `}
            >
              (7 Reviews)
            </p>
          </div>
        </div>
        <div
          className={`"flex flex-col md:border-b md:border-t md:border-[#E6E7E9]" ${
            houseType === "Holiday Homes" ? "border-none" : ""
          }`}
        >
          {houseType === "Co-Living Spaces" && (
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
          )}

          <div className="md:flex hidden flex-col mb-5">
            {houseType === "Co-Living Spaces" && (
              <h2 className="font-semibold">Featured Amenities</h2>
            )}

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
          {houseType === "Co-Living Spaces" && (
            <div className="flex flex-col gap-y-2">
              <p className="text-btxt hidden md:flex text-base">Starts from</p>
              <p className="text-ptxt md:text-btxt justify-center font-bold flex items-center text-[26px] leading-[24px]">
                ₹3,000<span className=" ml-2 text-btxt text-base">/ month</span>
              </p>
            </div>
          )}
          {houseType === "Holiday Homes" && (
            <div className="flex flex-col pt-5 md:pt-0 gap-y-2">
              <p className="text-ptxt justify-center font-semibold flex items-center text-[28px] leading-[24px]">
                ₹1999{" "}
                <span className="text-[#8F90A6] ml-2 font-medium text-base">
                  {" "}
                  per room per night
                </span>
              </p>
            </div>
          )}

          <button className="flex text-base font-medium text-ptxt mt-5 md:mt-0 py-[10px] px-6  cursor-pointer border-[1px] border-ptxt  justify-center rounded-[10px]  items-center ">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
}
