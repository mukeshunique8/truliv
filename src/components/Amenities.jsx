import React, { useContext } from "react";
import Image from "next/image";
import { HouseContext } from "../Contexts/HouseContext";

export default function Amenities() {
  // Consume the HouseContext
  const { houseType } = useContext(HouseContext);

  // Function to get the image source based on houseType
  function getImageSrc() {
    switch (houseType) {
      case "Co-Living Spaces":
        return "/coLivingAmenities.svg";
      case "Holiday Homes":
        return "/coLivingAmenities.svg";
      default:
        return "/amentitesGrp.svg";
    }
  }



  
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="bg-wbg px-[87px] w-[1440px] pt-[111px] flex flex-col justify-center items-center">
        <h2 className="w-full text-center text-5xl font-semibold text-btxt">
          Elevating Amenities
        </h2>

        <div className="flex w-full gap-x-7 mt-[49px]">
          <Image
            className="cursor-pointer"
            src={getImageSrc()} // Set the image source dynamically based on houseType
            alt="amenitiesImage"
            width={486}
            height={450}
          />

          <div className="bg-pbg w-full h-[450px] justify-center flex items-center text-center rounded-[21px]">
            <ul className=" gap-y-[45px] px-[55px] py-[53px] text-[20px] grid grid-rows-5 grid-cols-2  gap-x-[60px] font-normal text-wtxt">
              <li className="flex items-center text-center gap-x-[20px]">
                <span>
                  <Image
                    className=""
                    src="/wifi.svg"
                    alt="wifi"
                    width={35}
                    height={35}
                  />
                </span>{" "}
                Wifi
              </li>
              <li className="flex items-center text-center gap-x-[20px]">
                <span>
                  <Image
                    className=""
                    src="/wifi.svg"
                    alt="wifi"
                    width={35}
                    height={35}
                  />
                </span>{" "}
                Parking Facility
              </li>
              <li className="flex items-center text-center gap-x-[20px]">
                <span>
                  <Image
                    className=""
                    src="/wifi.svg"
                    alt="wifi"
                    width={35}
                    height={35}
                  />
                </span>{" "}
                House Keeping
              </li>
              <li className="flex items-center text-center gap-x-[20px]">
                <span>
                  <Image
                    className=""
                    src="/wifi.svg"
                    alt="wifi"
                    width={35}
                    height={35}
                  />
                </span>{" "}
                24x7 CCTV
              </li>
              <li className="flex items-center text-center gap-x-[20px]">
                <span>
                  <Image
                    className=""
                    src="/wifi.svg"
                    alt="wifi"
                    width={35}
                    height={35}
                  />
                </span>{" "}
                Fully Furnished
              </li>
              <li className="flex items-center text-center gap-x-[20px]">
                <span>
                  <Image
                    className=""
                    src="/wifi.svg"
                    alt="wifi"
                    width={35}
                    height={35}
                  />
                </span>{" "}
                Biometric Identification
              </li>
              <li className="flex items-center text-center gap-x-[20px]">
                <span>
                  <Image
                    className=""
                    src="/wifi.svg"
                    alt="wifi"
                    width={35}
                    height={35}
                  />
                </span>{" "}
                Power Backup
              </li>
              <li className="flex items-center text-center gap-x-[20px]">
                <span>
                  <Image
                    className=""
                    src="/wifi.svg"
                    alt="wifi"
                    width={35}
                    height={35}
                  />
                </span>{" "}
                Air conditioned
              </li>
              <li className="flex items-center text-center gap-x-[20px]">
                <span>
                  <Image
                    className=""
                    src="/wifi.svg"
                    alt="wifi"
                    width={35}
                    height={35}
                  />
                </span>{" "}
                DTH
              </li>
              <li className="flex items-center text-center gap-x-[20px]">
                <span>
                  <Image
                    className=""
                    src="/wifi.svg"
                    alt="wifi"
                    width={35}
                    height={35}
                  />
                </span>{" "}
                Recreation room
              </li>
            </ul>
          </div>
        </div>

        <p className="text-ptxt text-[25px] font-medium uppercase mt-[115px]">Voices of Truliv:</p>
        <p className="text-btxt text-[48px] font-semibold ">What Our Clients Say</p>
      </div>
    </div>
  );
}
