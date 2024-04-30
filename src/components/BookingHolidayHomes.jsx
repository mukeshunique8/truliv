import { useRouter } from "next/navigation";
import React, { useState, useContext } from "react";
import Image from "next/image";
import { Select, ChakraProvider, extendTheme } from "@chakra-ui/react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

import DatePicker from "../app/colivingHomeComponents/UIElements/DatePicker";
import GuestSelect from "../app/colivingHomeComponents/UIElements/GuestSelect";
import { HOUSETYPE_DETAIL_ROUTE } from "../routes/url";

import { HouseContext } from "../Contexts/HouseContext";

export default function BookingHolidayHomes() {
  const { houseType, setHouseType } = useContext(HouseContext);

  const router = useRouter();
  function handleColiving() {
    // Navigate to the respective page based on house type

    // setHouseType(houseType);
    // localStorage.setItem("houseType", houseType);

    router.push(HOUSETYPE_DETAIL_ROUTE("holidayhomes"));
  }

  // if (type === "Holiday Homes") {
  //   router.push("/holidayhome"); // Navigate to holidayhome page
  // }

  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  return (
    <div className="  w-[1100px]  py-5  flex md:flex-row flex-col gap-y-6 md:gap-y-0 justify-between items-center">
     <div className="w-1/4 py-2  rounded-md  border-ptxt border-[1px] md:border-l-transparent md:border-r-transparent md:border-b-transparent md:border-t-transparent   border-r md:py-4 md:border-[#83838352] gap-x-3 flex justify-center items-center">
        <div className="flex  justify-center items-center">
          <Image
            className=""
            src="/bookCheckIn.svg"
            alt="bookCheckIn"
            width={30}
            height={30}
          />
        </div>

        <div className="flex flex-col font-medium gap-y-[9.5px] justify-center items-center">
          {/* CheckIN */}
          <DatePicker weight='font-semibold' text="black" label="Check In" />
        </div>
      </div>

      <div className="w-1/4   py-2  rounded-md  border-ptxt border-[1px] md:border-l-transparent md:border-r-transparent md:border-b-transparent md:border-t-transparent  border-r  md:border-[#83838352] gap-x-3 flex justify-center items-center">
        <div className="flex  justify-center items-center">
          <Image
            className=""
            src="/bookCheckOut.svg"
            alt="bookCheckOut"
            width={30}
            height={30}
          />
        </div>

        <div className="flex flex-col font-medium gap-y-[9.5px] justify-center items-center">
          {/* CheckOUT */}
          <DatePicker   weight='font-semibold' text="black" label="Check Out" />
        </div>
      </div>

      <div className="w-1/4  py-2  rounded-md   border-ptxt border-[1px]  md:border-l-transparent md:border-r-transparent md:border-b-transparent md:border-t-transparent  border-r  md:border-[#83838352] gap-x-3 flex justify-center items-center">
        <div className="flex  justify-center items-center">
          <Image
            className=""
            src="/bookGroup.svg"
            alt="bookGroup"
            width={30}
            height={30}
          />
        </div>
        <div className="flex flex-col font-medium gap-y-[9.5px] ">
          {/* CheckOUT */}
          <GuestSelect />
        </div>
      </div>

      <div className="w-1/4  py-2  rounded-md md:border-l-transparent md:border-r-transparent md:border-b-transparent md:border-t-transparent  md:border-none  flex justify-center items-center">
      <button
          onClick={handleColiving}
          className="justify-center rounded-[9px] w-full text-white text-[20px] font-medium items-center  flex text-center py-[15px] px-[30px] bg-pbg"
        >
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
