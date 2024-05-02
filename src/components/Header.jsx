"use client"


import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import HouseCard from "./HouseCard";
import Navbar from "./Navbar";
import BookingCoLiving from "./BookingCoLiving";
import BookingHolidayHomes from "./BookingHolidayHomes";
import { HouseContext } from "../Contexts/HouseContext"; // Import the HouseContext

export default function Header() {

  // Consume the HouseContext
  const { houseType, setHouseType, showDescription, setShowDescription } = useContext(HouseContext);

  // Function to handle house card click
  function handleHouse(type) {
    setHouseType(type); // Set the houseType state in the context
    setShowDescription(true); // Set the showDescription state to true

  
  }
  return (
    <div className="w-full  flex flex-col ">


      <div className="relative h-[333px] md:h-[461px] flex justify-center items-start"
        style={{
          background:
            "linear-gradient(180deg, #000 -4.84%, rgba(33, 33, 33, 0.00) 136.18%)",
            backgroundImage: "url('NavImage.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
           
        }}
      >

         {/* Gradient overlay */}
         <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #000 -4.84%, rgba(33, 33, 33, 0.00) 136.18%)",
          }}
        ></div>
        {/* <Image
          className="absolute cursor-pointer -z-10 top-0 left-0"
          src="/NavImage.svg"
          alt="Nav Image"
          width={1440}
          height={461}
        /> */}

       <Navbar/>

        {/* Conditional rendering based on houseType */}
        {houseType === "Co-Living Spaces" && (
          <h1 className="centerElement z-30 w-full justify-center flex absolute font-medium text-[#FFF] px-3 text-center text-[28px] md:text-[68px] leading-normal md:leading-[102px]">
            Live the Life at Trul<span className="ptxt">i</span> v
          </h1>
        )}

        {houseType === "Holiday Homes" && (
          <h1 className="centerElement z-30 w-full justify-center flex absolute font-medium text-[#FFF] px-3 text-center text-[28px] md:text-[68px] leading-normal md:leading-[102px]">
            Best Holiday Homes in India
          </h1>
        )}

        {houseType !== "Co-Living Spaces" && houseType !== "Holiday Homes" && (
          <h1 className="centerElement z-30 w-full justify-center flex absolute font-medium text-[#FFF] px-3 text-center text-[28px] md:text-[68px] leading-normal md:leading-[102px]">
            Think Home, Think Trul <span className="ptxt">i</span> v
          </h1>
        )}

        
        {/* Card Position */}
        <div className="absolute z-10 w-[90%] md:w-[80%]  md:h-[380px] max-w-[1240px] flex-col rounded-xl md:rounded-[40px] housecardbg top-[265px] md:top-[343px] left-1/2 -translate-x-1/2 flex justify-center items-center ">
          <div className={`${houseType?'flex justify-around md:gap-x-3 gap-x-3 w-full p-3 md:px-5 md:py-5':"flex   justify-evenly gap-x-3  md:gap-x-3 w-full p-3   md:px-5 md:py-5"}`}>
            <HouseCard
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim molestiae sequi consectetur illo earum quis consequuntur tenetur, ratione laboriosam architecto quas beatae eaque at!"
              houseType="Co-Living Spaces"
              urlImage={houseType?"/coLivingSpaceSmall.svg":"/coLivingSpaces.svg"}
              urlImage2={"/MobilecoLivingSpaceSmall.svg"}
              alt="coLivingSpaces"
              handleHouse={handleHouse} // Pass down the handleHouse function
            />
            <HouseCard
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim molestiae sequi consectetur illo earum quis consequuntur tenetur, ratione laboriosam architecto quas beatae eaque at!"
              houseType="Holiday Homes"
              urlImage={houseType?"/holidayHomeSmall.svg":"/holidayHomes.svg"}
              urlImage2={"/MobileholidayHomeSmall.svg"}

              alt="holidayHomes"
              handleHouse={handleHouse} // Pass down the handleHouse function
            />
          </div>

          {/* Conditional rendering of booking component */}
          <div  className="md:px-5 w-full flex flex-col justify-center items-center"   >
            {showDescription && (
              <>
                {houseType === 'Co-Living Spaces' && <BookingCoLiving />}
                {houseType === 'Holiday Homes' && <BookingHolidayHomes />}
              </>
            )}
          </div>
        </div>

        
      </div>

      
    </div>
  );
}