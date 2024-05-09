import React from "react";
import Image from "next/image";

export default function AvailableOccupancies() {
  
  const occupancies = [
    {
      type: "Single Occupancy",
      price: "₹25,599/mo*",
    },
    {
      type: "Double Occupancy",
      price: "₹25,599/mo*",
    },
    {
      type: "Triple Occupancy",
      price: "₹12,599/mo*",
    },
  ];

  const details = [
    {
      label: "Deposit",
      value: "1 month",
    },
    {
      label: "Minimum Lock-in",
      value: "1 month",
    },
    {
      label: "Notice Period",
      value: "1 month",
    },
  ];

  return (
    <div id='Availability' className="flex flex-col w-full md:w-[800px] gap-y-2 py-[50px] border-b-[1px] border-[#E0E0E0] md:mt-6">
      <h2 className="font-semibold text-2xl leading-8 text-ptxt">
        Available Occupancies
      </h2>

      <div className="flex mt-4 flex-col">
        <div className="flex md:w-[580px] gap-y-3  flex-col ">
          <div className="flex flex-wrap gap-y-3 justify-between">
            {occupancies.map((occupancy, index) => (
              <div key={index} className="bg-[#FFFBF7] gap-y-1 rounded-xl px-5 py-2 flex flex-col justify-center items-center">
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
                  {occupancy.type}
                </p>
                <p className="leading-[23px] font-bold text-[#000000] text-[16px] ">
                  {occupancy.price}
                </p>
              </div>
            ))}
          </div>
          <p className="italic leading-[18px] text-black text-[12px] ">
            *Price exclusive of GST. Prices may vary with room occupancy and
            attributes.
          </p>
        </div>

        <div className="flex border-[1px] border-ptxt mt-6 px-[18px] py-4  md:px-[24px] md:py-[21px] md:w-[520px] justify-between rounded-[8px] ">
          {details.map((detail, index) => (
            <div key={index} className={`flex flex-col items-center justify-center  ${index === details.length - 2 ? '  border-l-[1px]   border-r-[1px] border-[#BFBFBF] px-2 md:px-6' : ''} `}>
              <p className="text-[#686A79] text-center leading-[26px] text-[14px] ">
                {detail.label}
              </p>
              <p className="text-[#191A23] text-center font-bold leading-[20px] text-[16px] ">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
