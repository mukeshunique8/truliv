import { useRouter } from "next/navigation";
import React, { useState, useContext } from "react";
import Image from "next/image";
import { Select, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { HOUSETYPE_DETAIL_ROUTE} from "../routes/url"

import { HouseContext } from "../Contexts/HouseContext";


export default function BookingHolidayHomes() {
  
  
  const { houseType, setHouseType } = useContext(HouseContext);


  const router = useRouter()

  function handleColiving(){
     // Navigate to the respective page based on house type
     
    // setHouseType(houseType);
    // localStorage.setItem("houseType", houseType);

      router.push(  HOUSETYPE_DETAIL_ROUTE('holidayhomes') ); 
    
  }

  
    // if (type === "Holiday Homes") {
    //   router.push("/holidayhome"); // Navigate to holidayhome page
    // }


  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  return (
    <div className=" w-[1100px] py-5 bg-white rounded-2xl  flex justify-around items-center">
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

        <div className="flex flex-col gap-y-[9.5px] justify-center items-center">
          <label htmlFor="check-in-input" className="flex text-[18px] font-medium items-center justify-center text-center text-btxt">
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
          </label>
          <SingleDatepicker
            id="check-in-input"
            name="check-in-input"
            date={checkInDate}
            onDateChange={setCheckInDate}
          />
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

        <div className="flex flex-col gap-y-[9.5px] justify-center items-center">
          <label htmlFor="check-out-input" className="flex text-[18px] font-medium items-center justify-center text-center text-btxt">
            Check Out{" "}
            <span>
              <Image
                className="fle"
                src="/bookKeyDown.svg"
                alt=""
                width={25}
                height={25}
              />{" "}
            </span>{" "}
          </label>
          
          <SingleDatepicker
         
            
            id="check-out-input"
            name="check-out-input"
            date={checkOutDate}
            onDateChange={setCheckOutDate}
          />
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
          <Select className="border-ptxt text-center" variant='unstyled' placeholder='Pick Number of Guests'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </Select>
        </div>
      </div>

      <div className="w-1/4 flex justify-center items-center">
        <button
          onClick={handleColiving}
        className="justify-center rounded-[9px] text-white text-[20px] font-medium items-center  flex text-center py-[15px] px-[30px] bg-pbg">
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
