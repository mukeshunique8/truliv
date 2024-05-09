import { React, useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Stack,
  Select,
} from "@chakra-ui/react";
import { BsToggleOff } from "react-icons/bs";
import Image from "next/image";
import TimePicker from "../../../colivingHomeComponents/UIElements/TimePicker";
import DatePicker from "../../../colivingHomeComponents/UIElements/DatePicker";
import ExpectedMoveDate from "../../../colivingHomeComponents/UIElements/ExpectedMoveDate";

import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { IoIosCheckbox, IoIosCheckboxOutline } from "react-icons/io";
import { color } from "framer-motion";

export default function VisitForm() {
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
    <div className="space-y-4">
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
            I have read and agreed to the{" "}
            <span className="text-ptxt underline">terms and conditions</span>{" "}
            and <span className="text-ptxt underline">privacy policy </span>
            and hereby confirm to proceed.
          </p>
        </div>
      </div>

      <div className="flex pr-8">
        <div className="mr-2">
          {checked2 ? (
            <IoIosCheckbox
              className="cursor-pointer"
              size={30}
              style={{ color: "#E95F29" }}
              onClick={toggleCheckbox2}
            />
          ) : (
            <IoIosCheckboxOutline
              className="cursor-pointer"
              size={30}
              style={{ color: "black" }}
              onClick={toggleCheckbox2}
            />
          )}
        </div>
        <div>
          <p className="text-[#000000] text-base leading-6">
            I have read and agreed to the{" "}
            <span className="text-ptxt underline"> House Rules & Policies</span>
          </p>
        </div>
      </div>
    </div>
  );

  const renderDateAndTimePickers = () => {
    if (activeButton === "visit") {
      return (
        <div className="flex w-full gap-x-4 text-[#1D273B]">
          <div className="flex w-1/2  justify-start">
            <DatePicker weight="font-normal" label="Visit Date" />
          </div>
          <div className="flex w-1/2  justify-start">
            <TimePicker weight="font-normal" label="Time Slot" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="w-full flex text-[#1D273B] flex-col">
          <ExpectedMoveDate />
        </div>
      );
    }
  };

  const renderBottomButton = () => {
    switch (activeButton) {
      case "reserve":
        return (
          <div className="space-y-2">
            {jsxVariable}

            <button className="text-base w-full rounded-md bg-ptxt text-wtxt font-medium py-4">
              Reserve Now @ 3000/-
            </button>
          </div>
        );
      case "book":
        return (
          <div className="space-y-2">
            {jsxVariable}
            {/* Book Now button */}
            <button className="text-base w-full rounded-md bg-ptxt text-wtxt font-medium py-4">
              Book Now
            </button>
          </div>
        );
      default:
        // For the default case, render only the "Schedule a Visit" button
        return (
          <button className="text-base w-full rounded-md bg-ptxt text-wtxt font-medium py-4">
            Schedule a Visit
          </button>
        );
    }
  };

  return (
    <div className="w-full max-w-[505px] h-full flex flex-col justify-center items-center rounded-lg bg-[#FAFAFA] transition duration-1000 ease-in-out">
      <div className="flex w-full  transition duration-1000 ease-in-out text-base">
        <button
          className={`w-1/3 p-[10px] ${
            activeButton === "visit"
              ? "rounded-tl-[8px] bg-ptxt text-wtxt"
              : "text-[#7A7A7A]"
          }`}
          onClick={() => handleButtonClick("visit")}
        >
          Schedule a Visit
        </button>
        <button
          className={`w-1/3 p-[10px] ${
            activeButton === "reserve" ? "bg-ptxt text-wtxt" : "text-[#7A7A7A]"
          }`}
          onClick={() => handleButtonClick("reserve")}
        >
          Reserve Now
        </button>
        <button
          className={`w-1/3 p-[10px] ${
            activeButton === "book"
              ? "rounded-tr-[8px] bg-ptxt text-wtxt"
              : "text-[#7A7A7A]"
          }`}
          onClick={() => handleButtonClick("book")}
        >
          Book Now
        </button>
      </div>
      <div className="mt-[27px] transition duration-1000 ease-in-out gap-y-3 flex flex-col px-5 ">
        <div className="flex justify-between gap-4">
          <Input sx={{ color: "b.100" }} placeholder="First Name" />
          <Input sx={{ color: "b.100" }} placeholder="Last Name" />
        </div>

        <div>
          <InputGroup>
            <InputLeftAddon sx={{ color: "b.100" }}>+91</InputLeftAddon>
            <Input
              sx={{ color: "b.100" }}
              type="tel"
              placeholder="Mobile number"
            />
          </InputGroup>
        </div>

        <div>
          <Input
            sx={{ color: "b.100" }}
            type="email"
            placeholder="E-mail Address"
          />
        </div>

        <div className=" flex flex-col">
          <label className="text-[#1D273B] pb-3" htmlFor="">
            I am a
          </label>
          <RadioGroup sx={{ color: "b.100" }} onChange={setValue} value={value}>
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
              <option value="Quintuple Occupancy ">Quintuple Occupancy</option>
            </Select>
          </div>
          <div className="flex w-1/2">
            <Select width={"full"} sx={{ color: "b.100" }} placeholder="Gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unisex">Unisex</option>
            </Select>
          </div>
        </div>

        {/* Conditional rendering for Date and Time Picker or Expected Move Date */}
        {renderDateAndTimePickers()}

        <div className="pb-6">{renderBottomButton()}</div>
      </div>
    </div>
  );
}
