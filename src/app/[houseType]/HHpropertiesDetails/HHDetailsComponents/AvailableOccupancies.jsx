import React from "react";
import Image from "next/image";

export default function AvailableOccupancies() {
  return (
    <div  id='Availability'  className="flex flex-col w-[800px] gap-y-2 py-[50px] border-b-[1px] border-[#E0E0E0] mt-6">
      <h2 className="font-medium text-2xl leading-8 text-ptxt">
        Available Occupancies
      </h2>

      <div className="flex mt-4 flex-col">
        <div className="flex w-[580px] gap-y-3  flex-col ">

          <div className="flex justify-between">
            <div className="bg-[#FFFBF7] gap-y-1 rounded-xl px-5 py-2 flex flex-col justify-center items-center">
              <div className="flex items-center gap-x-2 justify-center">
                <Image
                  className="mr-2"
                  src="/furniture.svg"
                  alt="furniture"
                  width={30}
                  height={30}
                />
                <p>x</p>
                <p className="text-ptxt leading-5">1</p>
              </div>

              <p className="leading-[18px]  text-[#292D32] text-[13px] ">
                Single Occupancy
              </p>
              <p className="leading-[23px] font-bold text-[#000000] text-[16px] ">
                ₹25,599/mo*
              </p>
            </div>
            <div className="bg-[#FFFBF7]  gap-y-1 rounded-xl px-5 py-2 flex flex-col justify-center items-center">
              <div className="flex items-center gap-x-2 justify-center">
                <Image
                  className="mr-2"
                  src="/furniture.svg"
                  alt="furniture"
                  width={30}
                  height={30}
                />
                <p>x</p>
                <p className="text-ptxt leading-5">1</p>
              </div>
              <p className="leading-[18px]   text-[#292D32] text-[13px] ">
                Double Occupancy
              </p>
              <p className="leading-[23px] font-bold text-[#000000] text-[16px] ">
                ₹25,599/mo*
              </p>
            </div>
            <div className="bg-[#FFFBF7] gap-y-1 rounded-xl px-5 py-2 flex flex-col justify-center items-center">
              <div className="flex items-center gap-x-2 justify-center">
                <Image
                  className="mr-2"
                  src="/furniture.svg"
                  alt="furniture"
                  width={30}
                  height={30}
                />
                <p>x</p>
                <p className="text-ptxt leading-5">1</p>
              </div>
              <p className="leading-[18px] text-[#292D32] text-[13px] ">
                Triple Occupancy
              </p>
              <p className="leading-[23px] font-bold text-[#000000] text-[16px] ">
                ₹12,599/mo*
              </p>
            </div>
          </div>

          <p className="italic leading-[18px] text-black text-[12px] ">
            *Price exclusive of GST. Prices may vary with room occupancy and
            attributes.
          </p>
        </div>

        <div className="flex border-[1px] mt-6 px-[24px] py-[21px] w-[520px] justify-around rounded-[8px] ">
          <div className="flex flex-col border-r-[1px] pr-[45px] border-[#BFBFBF]">
            <p className="text-[#686A79] leading-[26px] text-[14px] ">
              Deposit
            </p>
            <p className="text-[#191A23] font-bold leading-[20px] text-[16px] ">
              1 month
            </p>
          </div>

          <div className="flex flex-col border-r-[1px] pr-[45px] border-[#BFBFBF]">
            <p className="text-[#686A79] leading-[26px] text-[14px] ">
              Minimum Lock-in
            </p>
            <p className="text-[#191A23]  font-bold leading-[20px] text-[16px] ">
              1 month
            </p>
          </div>

          <div className="flex flex-col ">
            <p className="text-[#686A79] leading-[26px] text-[14px] ">
              Notice Period
            </p>
            <p className="text-[#191A23] font-bold leading-[20px] text-[16px] ">
              1 month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
