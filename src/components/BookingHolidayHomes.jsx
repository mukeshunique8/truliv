import React from "react";
import Image from "next/image";

export default function BookingHolidayHomes() {
  return (
    <div className=" w-full bg-white rounded-2xl py-6 flex justify-around items-center">
      <div className="w-1/4  border-r  border-[#83838352] gap-x-3 flex justify-center items-center">
        <div className="flex  justify-center items-center">
          <Image
            className=""
            src="/bookCheckIn.svg"
            alt="bookCheckIn"
            width={30}
            height={30}
          />
        </div>

        <div className="flex flex-col gap-y-[9.5px] justify-center items-start">
          <p className="flex text-[18px] font-medium items-center justify-center text-center text-btxt">
          Check In{" "}
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
          28/02/2024
          </p>
        </div>
      </div>

      <div className="w-1/4  border-r  border-[#83838352] gap-x-3 flex justify-center items-center">
        <div className="flex  justify-center items-center">
          <Image
            className=""
            src="/bookCheckOut.svg"
            alt="bookCheckOut"
            width={30}
            height={30}
          />
        </div>

        <div className="flex flex-col gap-y-[9.5px] justify-center items-start">
          <p className="flex text-[18px] font-medium items-center justify-center text-center text-btxt">
          Check Out
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
          28/02/2024
          </p>
        </div>
      </div>

      <div className="w-1/4 border-r  border-[#83838352] gap-x-3 flex justify-center items-center">
        <div className="flex  justify-center items-center">
          <Image
            className=""
            src="/bookGroup.svg"
            alt="bookGroup"
            width={30}
            height={30}
          />
        </div>

        <div className="flex flex-col gap-y-[9.5px] justify-center items-start">
          <p className="flex text-[18px] font-medium items-center justify-center text-center text-btxt">
          Guests
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
          Pick Number of Guests
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
