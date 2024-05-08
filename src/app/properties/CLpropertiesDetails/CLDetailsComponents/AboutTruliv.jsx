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

export default function AboutTruliv() {
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
          <h2 className="text-[#000000] text-[15px] leading-6">
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
          <p className="text-[#000000] text-base leading-6">
            I have read and agreed to the terms and conditions and privacy
            policy and hereby confirm to proceed.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      id="Details"
      className="flex flex-col w-full md:w-[800px] gap-y-2 py-[50px] border-b-[1px] border-[#E0E0E0] md:mt-6"
    >
      <h2 className="font-semibold md:text-2xl text-[20px] leading-8 text-ptxt">
        About Truliv Olympus
      </h2>
      <p className="text-[#232323]  text-[14px] md:text-base leading-[28px]">
        Truliv Olympus-Porur is located in the southwestern part of Chennai & it
        is well connected to other parts of the city such as Guindy, Vadapalani,
        and Poonamallee through various modes of transportation.{" "}
        <span className="flex text-ptxt cursor-pointer">
          {" "}
          Read More
          <Image
            className="cursor-pointer"
            src="/rightarrow2.svg"
            alt="dishwasher"
            width={16}
            height={16}
          />
        </span>
      </p>

      {/* Schedule A Visit */}
      {/* <div className="flex gap-x-[10px] md:hidden justify-between rounded-[10px] bg-[#e95f291a] w-full p-[10px] ">
        <div
          onClick={() => SetshowSchedule(true)}
          className="w-1/2 flex bg-white px-[10px] py-[10px] rounded-[10px] gap-x-2"
        >
          <Image
            className="cursor-pointer"
            src="/schedule.svg"
            alt="schedule"
            width={28}
            height={28}
          />

          <button className=" w-full text-ptxt rounded-[10px] text-[14px] font-medium ">
            Schedule a Visit
          </button>
        </div>

        <div onClick={() => setShowBooking(true)} className="w-1/2">
          <button className="bg-ptxt w-full text-white rounded-[10px] text-[14px] font-medium px-[30px] py-[18px]">
            Book Now
          </button>
        </div>
      </div> */}

      {/* Modal Forms */}

      {/* {showSchedule && (
        // NavBar

        <div className="fixed top-0 left-0 w-full h-full flex flex-col  items-center justify-start px-5 gap-y-7 overflow-y-auto bg-white z-50">
          <div className=" flex flex-col w-full justify-center items-center">
            <h3 className="bg-black w-full text-white p-4">Navbar</h3>
            <div
              onClick={() => SetshowSchedule(false)}
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
                Schedule A Visit
              </button>
            </div>
          </div>

          <div className="flex flex-col w-full justify-between gap-4">
            <Input sx={{ color: "b.100" }} placeholder="First Name" />
            <Input sx={{ color: "b.100" }} placeholder="Last Name" />
          </div>

          <div className="w-full ">
            <InputGroup>
              <InputLeftAddon sx={{ color: "b.100" }}>+91</InputLeftAddon>
              <Input
                sx={{ color: "b.100" }}
                type="tel"
                placeholder="Mobile number"
              />
            </InputGroup>
          </div>

          <div className=" w-full font-bold flex flex-col">
            <label className="text-[#1D273B] font-bold pb-3" htmlFor="">
              I am a
            </label>
            <RadioGroup
              sx={{ color: "b.100" }}
              onChange={setValue}
              value={value}
            >
              <Stack spacing="5" direction="row">
                <Radio colorScheme="orange" value="Working Professional">
                  Working Professional
                </Radio>
                <Radio colorScheme="orange" value="Student">
                  Student
                </Radio>
              </Stack>
            </RadioGroup>
          </div>

          <div className="flex w-full ">
            <Select
              width={"full"}
              sx={{ color: "b.100" }}
              placeholder="Duration of your stay"
            >
              <option value="Single Occupancy">1 </option>
              <option value="Double Occupancy"> 2</option>
              <option value="Triple Occupancy">3 </option>
              <option value="Quadruple Occupancy">4</option>
              <option value="Quintuple Occupancy ">6</option>
            </Select>
          </div>

          <div className="flex font-bold w-full gap-x-4 text-[#1D273B]">
            <div className="flex w-1/2 font-bold  ">
              <DatePicker weight="font-bold" label="Visit Date" />
            </div>
            <div className="flex w-1/2  justify-center">
              <TimePicker weight="font-bold" label="Time Slot" />
            </div>
          </div>

          {jsxVariable}

          <div className="w-full">
            <button className="text-base w-full rounded-md bg-ptxt text-wtxt font-medium py-4">
              Schedule a Visit
            </button>
          </div>
        </div>
      )}

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

          <div className="flex flex-col w-full justify-between gap-4">
            <Input sx={{ color: "b.100" }} placeholder="First Name" />
            <Input sx={{ color: "b.100" }} placeholder="Last Name" />
          </div>

          <div className="w-full ">
            <InputGroup>
              <InputLeftAddon sx={{ color: "b.100" }}>+91</InputLeftAddon>
              <Input
                sx={{ color: "b.100" }}
                type="tel"
                placeholder="Mobile number"
              />
            </InputGroup>
          </div>

          <div className="w-full ">
            <Input
              sx={{ color: "b.100" }}
              type="email"
              placeholder="E-mail Address"
            />
          </div>
          
          <div className=" flex w-full flex-col">
            <label className="text-[#1D273B] font-bold pb-3" htmlFor="">
              I am a
            </label>
            <RadioGroup
              sx={{ color: "b.100" }}
              onChange={setValue}
              value={value}
            >
              <Stack spacing="5" direction="row">
                <Radio colorScheme="orange" value="Working Professional">
                  Working Professional
                </Radio>
                <Radio colorScheme="orange" value="Student">
                  Student
                </Radio>
              </Stack>
            </RadioGroup>
          </div>

          

          

          <div className="flex w-full gap-x-4 ">
            <div className="flex w-1/2 ">
              <Select
                width={"full"}
                sx={{ color: "b.100" }}
                placeholder="Occupancy"
              >
                <option value="Single Occupancy">Single Occupancy</option>
                <option value="Double Occupancy">Double Occupancy</option>
                <option value="Triple Occupancy">Triple Occupancy</option>
                <option value="Quadruple Occupancy">Quadruple Occupancy</option>
                <option value="Quintuple Occupancy ">
                  Quintuple Occupancy
                </option>
              </Select>
            </div>
            <div className="flex w-1/2">
              <Select
                width={"full"}
                sx={{ color: "b.100" }}
                placeholder="Gender"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unisex">Unisex</option>
              </Select>
            </div>
          </div>

         


         

          <div className="w-full">
            <label className="font-bold" htmlFor="">Expected Move-in Date</label>
            <Input
              sx={{ color: "b.100" }}
              className="mt-2"
              placeholder="dd/mm/yyyy"
              size="md"
              type="date"
            />
          </div>

          {jsxVariable}

          <div className="w-full">
          <button className="text-base w-full rounded-md bg-wtxt text-ptxt font-medium py-4">
              Reserve Now @ 3000/-
            </button>
          </div>

          <div className="w-full">
            <button className="text-base w-full rounded-md bg-ptxt text-wtxt font-medium py-4">
              Schedule a Visit
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}
