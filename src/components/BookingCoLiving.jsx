import React from "react";
import Image from "next/image";

export default function BookingCoLiving() {
  return (
    <div className=" w-full my-6 flex justify-around items-center">
      <div className="w-1/4  border-r  border-[#83838352] gap-x-3 flex justify-center items-center">
        <div className="flex  justify-center items-center">
          <Image
            className=""
            src="/bookLocation.svg"
            alt="bookLocation"
            width={30}
            height={30}
          />
        </div>

        <div className="flex flex-col gap-y-[9.5px] justify-center items-start">
          <p className="flex text-[18px] font-medium items-center justify-center text-center text-btxt">
            Location{" "}
            <span>
              <Image
                className="fle"
                src="/bookKeyDown.svg"
                alt=""
                width={25}
                height={25}
              />{" "}
            </span>{" "}
          </p>
          <p className="text-[15px] font-normal text-[#838383]">
            Select your Area
          </p>
        </div>
      </div>

      <div className="w-1/4  border-r  border-[#83838352] gap-x-3 flex justify-center items-center">
        <div className="flex  justify-center items-center">
          <Image
            className=""
            src="/bookHomeWork.svg"
            alt="bookHomeWork"
            width={30}
            height={30}
          />
        </div>

        <div className="flex flex-col gap-y-[9.5px] justify-center items-start">
          <p className="flex text-[18px] font-medium items-center justify-center text-center text-btxt">
            Occupancy
            <span>
              <Image
                className="fle"
                src="/bookKeyDown.svg"
                alt="bookKeyDown"
                width={25}
                height={25}
              />{" "}
            </span>{" "}
          </p>
          <p className="text-[15px] font-normal text-[#838383]">
            Choose Occupancy
          </p>
        </div>
      </div>

      <div className="w-1/4 border-r  border-[#83838352] gap-x-3 flex justify-center items-center">
        <div className="flex  justify-center items-center">
          <Image
            className=""
            src="/bookPayments.svg"
            alt="bookPayments"
            width={30}
            height={30}
          />
        </div>

        <div className="flex flex-col gap-y-[9.5px] justify-center items-start">
          <p className="flex text-[18px] font-medium items-center justify-center text-center text-btxt">
            Price Range
            <span>
              <Image
                className="fle"
                src="/bookKeyDown.svg"
                alt="bookKeyDown"
                width={25}
                height={25}
              />{" "}
            </span>{" "}
          </p>
          <p className="text-[15px] font-normal text-[#838383]">
            Choose Price Range
          </p>
        </div>
      </div>

      <div className="w-1/4 flex justify-center items-center">
        <button className="justify-center rounded-[9px] text-white text-[20px] font-medium items-center  flex text-center py-[15px] px-[30px] bg-pbg">
          <span>
            <Image
              className=""
              src="/bookSearch.svg"
              alt="bookSearch"
              width={28}
              height={28}
            />
          </span>{" "}
          Search
        </button>
      </div>
    </div>
  );
}
