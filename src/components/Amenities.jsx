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

  // Array of amenities objects containing text and image URLs
  const amenitiesList = [
    { text: "Wifi", imageUrl: "/wifi.svg" },
    { text: "Parking Facility", imageUrl: "/wifi.svg" },
    { text: "House Keeping", imageUrl: "/wifi.svg" },
    { text: "24x7 CCTV", imageUrl: "/wifi.svg" },
    { text: "Fully Furnished", imageUrl: "/wifi.svg" },
    { text: "Biometric Identification", imageUrl: "/wifi.svg" },
    { text: "Power Backup", imageUrl: "/wifi.svg" },
    { text: "Air conditioned", imageUrl: "/wifi.svg" },
    { text: "DTH", imageUrl: "/wifi.svg" },
    { text: "Recreation room", imageUrl: "/wifi.svg" },
  ];

  return (
    <div className="w-full max-w-[1440px]  flex flex-col justify-center items-center">
      <div className={`${houseType === 'Holiday Homes'?" pt-[100px]  flex flex-col justify-center items-center":"bg-wbg md:px-[87px] max-w-[1440px]  pt-[70px] md:pt-[111px] flex flex-col justify-center items-center"}`}>
        <h2 className="w-full text-center text-[22px] md:text-5xl font-semibold text-btxt">
          Elevating Amenities
        </h2>

        <div className="flex w-full gap-x-7  mt-5 md:mt-[49px]">
          <Image
            className="cursor-pointer md:flex hidden"
            src={getImageSrc()} // Set the image source dynamically based on houseType
            alt="amenitiesImage"
            width={486}
            height={450}
          />

          <div className="bg-pbg w-full mx-4 md:mx-0 justify-center flex items-center text-center rounded-[21px]">
            <ul className="md:gap-y-[45px] px-5 py-8 md:px-[55px] md:py-[53px] text-[13px] md:text-[20px] grid grid-rows-5 grid-cols-2  md:gap-x-[60px] gap-x-[10px] gap-y-[10px] font-normal text-wtxt">
              {amenitiesList.map((amenity, index) => (
                <li key={index} className="flex items-center text-center gap-x-1 md:gap-x-[20px]">
                  <span>
                    <Image className="" src={amenity.imageUrl} alt={amenity.text} width={35} height={35} />
                  </span>{" "}
                  {amenity.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-ptxt text-[16px] md:text-[25px] font-medium uppercase mt-10 md:mt-[115px]">Voices of Truliv:</p>
        <p className="text-btxt text-[22px] md:text-[48px] font-semibold ">What Our Clients Say</p>
      </div>
    </div>
  );
}
