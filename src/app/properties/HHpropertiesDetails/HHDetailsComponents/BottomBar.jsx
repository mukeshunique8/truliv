import { React, useState } from "react";

import ScheduleVisit from "./Schedulevisit";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Stack,
  Select,
  Button,
} from "@chakra-ui/react";
import { BsToggleOff } from "react-icons/bs";
import Image from "next/image";
import TimePicker from "../../../colivingHomeComponents/UIElements/TimePicker";
import DatePicker from "../../../colivingHomeComponents/UIElements/DatePicker";
import ExpectedMoveDate from "../../../colivingHomeComponents/UIElements/ExpectedMoveDate";

import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { IoIosCheckbox, IoIosCheckboxOutline } from "react-icons/io";
import { color } from "framer-motion";

export default function BottomBar() {
  const [showSchedule, SetshowSchedule] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const [value, setValue] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [checked, setChecked] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [activeButton, setActiveButton] = useState("visit");

  const toggleIcon = () => {
    setIsActive(!isActive);
  };

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const toggleCheckbox2 = () => {
    setChecked2(!checked);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const jsxVariable = (
    <div className="space-y-2">
      <div className="flex justify-between items-center ">
        <div className="flex items-center">
          <Image
            className="mr-2"
            src="/whatsapp.svg"
            alt="whatsapp"
            width={30}
            height={30}
          />
          <h2 className="text-[#000000] text-[14px] leading-6">
            Get updates over WhatsApp
          </h2>
        </div>
        <div>
          {isActive ? (
            <FaToggleOn
              className="cursor-pointer"
              size={35}
              style={{ color: "#E95F29" }}
              onClick={toggleIcon}
            />
          ) : (
            <BsToggleOff
              className="cursor-pointer"
              size={35}
              style={{
                color: "black",
                border: "1px",
                borderColor: "#E95F29",
              }}
              onClick={toggleIcon}
            />
          )}
        </div>
      </div>

      <div className="flex pr-8 gap-y-5">
        <div className="mr-2">
          {checked ? (
            <IoIosCheckbox
              className="cursor-pointer"
              size={30}
              style={{ color: "#E95F29" }}
              onClick={toggleCheckbox}
            />
          ) : (
            <IoIosCheckboxOutline
              className="cursor-pointer"
              size={30}
              style={{ color: "black" }}
              onClick={toggleCheckbox}
            />
          )}
        </div>
        <div>
          <p className="text-[#000000] text-[14px] leading-6">
            I have read and agreed to the terms and conditions and privacy
            policy and hereby confirm to proceed.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full md:w-[800px] gap-y-2  border-b-[1px] border-[#E0E0E0] ">
    

        <div onClick={() => setShowBooking(true)} className="w-full p-2">
          <button className="bg-ptxt w-full text-white rounded-[10px] text-[16px] font-medium px-[30px] py-[18px]">
            Book Now
          </button>
        </div>
     

      {/* Modal Forms */}

      

      {showBooking && (
        // NavBar

        <div className="fixed top-0 left-0 w-full h-full flex flex-col  items-center justify-start px-5 gap-y-7 overflow-y-auto bg-white z-50">
          <div className=" flex flex-col w-full justify-center items-center">
            <h3 className="bg-black w-full text-white p-4">Navbar</h3>
            <div
              onClick={() => setShowBooking(false)}
              className=" flex  w-full"
            >
              <Image
                className="cursor-pointer"
                src="/backbtn.svg"
                alt="back"
                width={14}
                height={18}
              />
              <button className="text-ptxt ml-4 text-[24px] font-bold">
                Book Now
              </button>
            </div>
          </div>

          <h3 className="text-black w-full  text-[24px] font-bold">Booking Details</h3>

          <div className=" rounded  w-full flex flex-col gap-y-4 ">
        <p className="text-ptxt font-bold leading-6 text-[26px] ">
          ₹1,999
          <span className="text-base font-normal pl-2 ">/room /night</span>
        </p>

        <p className="font-medium text-[#9B9B9B] text-[14px] leading-[20px] ">
          + taxes & fees: ₹420{" "}
        </p>

        <div className="border-[1px] rounded-[3px]  leading-[17px] px-3 py-3 border-[#e95f29a6] ">
          <div className="flex text-[14px] w-full justify-between text-[#676767] ">
            <div className="flex justify-start">
              <p className="">Mon, 11 Dec - Fri, 15 Dec</p>
            </div>
            <div className="border-l-[1px] border-[#e95f29a6]"></div>
            <div className="flex justify-end">
              <p className="">2 guests, 1 room</p>
            </div>
          </div>
        </div>

        <div className="border-t-ptxt pt-6 flex justify-between border-t-[1.5px] ">
          <div className="flex flex-col">
            <p className="text-[18px] font-medium text-black"> Total Price</p>
            <p className="font-medium text-[#9B9B9B] text-[14px] leading-[20px] ">
              Including taxes and fees{" "}
            </p>
          </div>

          <div className="text-black text-[20px] font-semibold">
            <p>₹1,999</p>
          </div>
        </div>

        <p className="text-ptxt mt-6 font-medium leading-5 text-[14px] underline">
          Cancellation Policy
        </p>
      </div>
         

          {jsxVariable}

          

          <div className="w-full">
            <button className="text-base w-full rounded-md bg-ptxt text-wtxt font-medium py-4">
             Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
