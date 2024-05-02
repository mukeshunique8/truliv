import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Select } from "@chakra-ui/react";
import { HouseContext } from "../Contexts/HouseContext";
import { HOUSETYPE_DETAIL_ROUTE } from "../routes/url";

export default function BookingCoLiving() {
  const [showDescription, setShowDescription] = useState(false);
  const { houseType, setHouseType } = useContext(HouseContext);

  const router = useRouter();

  function handleColiving() {
    // setHouseType(houseType);
    // localStorage.setItem("houseType", houseType);

    router.push(HOUSETYPE_DETAIL_ROUTE("coliving")); // Navigate to coliving page
  }

  return (
    <div className=" w-full px-3 md:px-0 md:w-[1100px]  py-5  flex md:flex-row flex-col gap-y-6 md:gap-y-0 justify-between items-center">

      <div className=" w-full  md:w-1/4  py-2  rounded-md  border-ptxt border-[1px] md:border-l-transparent md:border-r-transparent md:border-b-transparent md:border-t-transparent   border-r md:py-4 md:border-[#83838352] gap-x-3 flex justify-center items-center">
        <div className="flex  justify-center items-center">
          <Image
            className=""
            src="/bookLocation.svg"
            alt="bookLocation"
            width={30}
            height={30}
          />
        </div>

        <div className="flex flex-col  justify-center items-start">
          <Select
           
            className="text-center "
            variant="unstyled"
            placeholder="Select your Area"
         
             fontSize={{ base: "xs", md: "md" }}
            >
            <option value="OMR">OMR</option>
            <option value="Shenoy Nagar">Shenoy Nagar</option>
            <option value="Anna Nagar">Anna Nagar</option>
            <option value="Porur">Porur</option>
            <option value="Porur">Porur</option>
            <option value="Nungambakkam">Nungambakkam</option>
            <option value="Adayar">Adayar</option>
            <option value="T. Nagar">T. Nagar</option>
          </Select>

          {/* <p className="flex text-[18px] font-medium items-center justify-center text-center text-btxt">
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
          </p> */}
        </div>
      </div>

      <div className=" w-full  md:w-1/4    py-2  rounded-md  border-ptxt border-[1px] md:border-l-transparent md:border-r-transparent md:border-b-transparent md:border-t-transparent  border-r  md:border-[#83838352] gap-x-3 flex justify-center items-center">
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
          <Select
            className="border-ptxt text-center"
            variant="unstyled"
            placeholder="Choose Occupancy"
            fontSize={{ base: "xs", md: "md" }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Select>

          {/* <p className="flex text-[18px] font-medium items-center justify-center text-center text-btxt">
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
          </p> */}
        </div>
      </div>

      <div className=" w-full  md:w-1/4   py-2  rounded-md   border-ptxt border-[1px]  md:border-l-transparent md:border-r-transparent md:border-b-transparent md:border-t-transparent  border-r  md:border-[#83838352] gap-x-3 flex justify-center items-center">
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
          <Select
            className="border-ptxt text-center"
            variant="unstyled"
            placeholder="Choose Price Range"
            fontSize={{ base: "xs", md: "md" }}
          >
            <option value=" less than ₹1000 "> less than ₹1000 </option>
            <option value="₹1000 - ₹2000">₹1000 - ₹2000</option>
            <option value="₹2000 - ₹3000">₹2000 - ₹3000</option>
            <option value="₹3000 - ₹4000">₹3000 - ₹4000</option>
            <option value="₹4000 - ₹5000">₹4000 - ₹5000</option>
            <option value="₹5000 - ₹6000">₹5000 - ₹6000</option>
            <option value="₹6000 - ₹7000">₹6000 - ₹7000</option>
            <option value="₹7000 - ₹8000">₹7000 - ₹8000</option>
            <option value="₹8000 - ₹9000">₹8000 - ₹9000</option>
            <option value="₹9000 - ₹10000">₹9000 - ₹10000</option>
          </Select>

          {/* <p className="flex text-[18px] font-medium items-center justify-center text-center text-btxt">
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
          </p> */}
        </div>
      </div>

      <div className=" w-full  md:w-1/4   py-2  rounded-md md:border-l-transparent md:border-r-transparent md:border-b-transparent md:border-t-transparent  md:border-none  flex justify-center items-center">
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
