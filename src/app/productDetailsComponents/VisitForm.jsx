import { React, useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Stack,
  Select
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

import Image from "next/image";

import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { IoIosCheckbox, IoIosCheckboxOutline } from "react-icons/io";
import { color } from "framer-motion";
export default function VisitForm() {
  const [value, setValue] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [checked, setChecked] = useState(true);
  const [checkInDate, setCheckInDate] = useState(new Date());


  const toggleIcon = () => {
    setIsActive(!isActive);
  };
  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className="w-full rounded-lg bg-[#FAFAFA]">
      <div className="flex w-full text-base">
        <button className="w-1/3 p-[10px] bg-ptxt text-wtxt     ">
          Schedule a Visit
        </button>
        <button className="w-1/3 p-[10px]  text-[#7A7A7A]     ">
          Reserve Now
        </button>
        <button className="w-1/3 p-[10px]  text-[#7A7A7A]     ">
          Book Now
        </button>
      </div>

      <div className="mt-[27px] gap-y-5 flex flex-col px-5 ">
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
              placeholder="phone number"
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
            <Select width={'full'} sx={{ color: "b.100" }} placeholder="Occupancy">
              <option value="Single Occupancy">Single Occupancy</option>
              <option value="Double Occupancy">Double Occupancy</option>
              <option value="Triple Occupancy">Triple Occupancy</option>
              <option value="Quadruple Occupancy">Quadruple Occupancy</option>
              <option value="Quintuple Occupancy ">Quintuple Occupancy</option>
            </Select>
          </div>
          <div className="flex w-1/2">
            <Select width={'full'} sx={{ color: "b.100" }} placeholder="Gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unisex">Unisex</option>
            </Select>
          </div>
        </div>

        <div className="w-full flex flex-col">
        <label className="text-[#1D273B] pb-3" htmlFor="">
        Expected Move-in Date
                  </label>
        <SingleDatepicker
            id="check-in-input"
            name="check-in-input"
            date={checkInDate}
            placeholder="dd/mm/yy"
            onDateChange={setCheckInDate}
            sx={{color:"b.100"}}
          />

        </div>

        <div className=" flex justify-between items-center">
          <div className=" flex items-center">
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
              <FaToggleOff
                className="cursor-pointer"
                size={35}
                style={{
                  color: "#FFFFFF",
                  border: "1px",
                  borderColor: "#E95F29",
                }}
                onClick={toggleIcon}
              />
            )}
          </div>
        </div>

        <div className="flex pr-8">
          <div className="mr-2">
            {checked ? (
              <IoIosCheckbox
                className="cursor-pointer"
                size={35}
                style={{ color: "#E95F29" }}
                onClick={toggleCheckbox}
              />
            ) : (
              <IoIosCheckboxOutline
                className="cursor-pointer"
                size={35}
                style={{ color: "#FFFFFF" }}
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

        <div className="pb-6">
          <button className="text-base w-full rounded-md bg-ptxt text-wtxt font-medium py-4">
            Schedule a Visit
          </button>
        </div>
      </div>
    </div>
  );
}
