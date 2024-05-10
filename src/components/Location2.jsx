
"use client"
import React, { useContext } from "react";
import AreaCards from "./AreaCards";
import AreaPhotos from "./AreaPhotos";
import FeatureCard from "./FeatureCard";
import Navbar2 from "../app/colivingHomeComponents/Navbar2";

import { HouseContext } from "../providers/HouseContext";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";

const areasData = [
  {
   
    area: "OMR",
    desc: "As historic as",
    areaUrl: "/OMR.svg",
    areaAlt: "OMR",
  },
  {
   
    area: "Shenoy Nagar",
    desc: "As traditional as",
    areaUrl: "/Shenoy Nagar.svg",
    areaAlt: "Shenoy Nagar",
  },
  {
    
    area: "Anna Nagar",
    desc: "As cultural as",
    areaUrl: "/Anna Nagar.svg",
    areaAlt: "Anna Nagar",
  },
  {
   
    area: "Porur",
    desc: "As historic as",
    areaUrl: "/Porur.svg",
    areaAlt: "Porur",
  },
  {
   
    area: "Nungambakkam",
    desc: "As traditional as",
    areaUrl: "/Nungambakkam.svg",
    areaAlt: "Nungambakkam",
  },
  {
   
    area: "Adayar",
    desc: "As cultural as",
    areaUrl: "/Adayar.svg",
    areaAlt: "Adayar",
  },
  {
   
    area: "T. Nagar",
    desc: "As traditional as",
    areaUrl: "/T. Nagar.svg",
    areaAlt: "T. Nagar",
  },
  {
  
    area: "Anna Nagar",
    desc: "As cultural as",
    areaUrl: "/Anna Nagar.svg",
    areaAlt: "Anna Nagar",
  },
  {
    
    area: "Porur",
    desc: "As historic as",
    areaUrl: "/Porur.svg",
    areaAlt: "Porur",
  },
  {
    
    area: "Nungambakkam",
    desc: "As traditional as",
    areaUrl: "/Nungambakkam.svg",
    areaAlt: "Nungambakkam",
  },
];
const coLivingSpacesData = [
  {
  
    area: "OMR",
    desc: "As historic as",
    areaUrl: "/OMR.svg",
    areaAlt: "OMR",
  },
  {
   
    area: "Shenoy Nagar",
    desc: "As traditional as",
    areaUrl: "/Shenoy Nagar.svg",
    areaAlt: "Shenoy Nagar",
  },
  {
 
    area: "Anna Nagar",
    desc: "As cultural as",
    areaUrl: "/Anna Nagar.svg",
    areaAlt: "Anna Nagar",
  },
  {
   
    area: "Porur",
    desc: "As historic as",
    areaUrl: "/Porur.svg",
    areaAlt: "Porur",
  },
  {
  
    area: "Nungambakkam",
    desc: "As traditional as",
    areaUrl: "/Nungambakkam.svg",
    areaAlt: "Nungambakkam",
  },
  {
  
    area: "Adayar",
    desc: "As cultural as",
    areaUrl: "/Adayar.svg",
    areaAlt: "Adayar",
  },
  {
    
    area: "T. Nagar",
    desc: "As traditional as",
    areaUrl: "/T. Nagar.svg",
    areaAlt: "T. Nagar",
  },
];
const holidayHomesData = [
  { areaUrl: "/location1.png", areaAlt: "location1"},
  { areaUrl: "/location2.png", areaAlt: "location2" },
  { areaUrl: "/location3.png", areaAlt: "location3" },
  { areaUrl: "/location4.png", areaAlt: "location4" },
  { areaUrl: "/location5.png", areaAlt: "location5" },
  { areaUrl: "/location6.png", areaAlt: "location6" },
];

const coLivingFeaturesData = [
  {
    featalt: "featBookings",
    featUrl: "/featBookings.svg",
    feathead: "No Booking Fees",
    featDesc:
      "At Truliv, enjoy a fee-free, transparent, and affordable experience",
  },
  {
    featalt: "feat100",
    featUrl: "/feat100.svg",
    feathead: "100% online process",
    featDesc: "Experience a 100% online process for seamless convenience",
  },
  {
    featalt: "featShort",
    featUrl: "/featShort.svg",
    feathead: "Short Notice Period",
    featDesc: "Simply raise your notice, 30 days in advance",
  },
  {
    featalt: "feat7",
    featUrl: "/feat7.svg",
    feathead: "7-Day refund policy",
    featDesc:
      "We ensure your refund is processed within 7 working days from your last day of notice",
  },
];
const holidayHomesFeaturesData = [
  {
    featalt: "cleanRooms",
    featUrl: "/cleanRooms.svg",
    feathead: "Clean rooms",
  },
  {
    featalt: "affordablePrice",
    featUrl: "/affordablePrice.svg",
    feathead: "Affordable prices",
  },
  {
    featalt: "culturalExperiences",
    featUrl: "/culturalExperiences.svg",
    feathead: "Cultural experiences",
  },
  {
    featalt: "petFriendly",
    featUrl: "/petFriendly.svg",
    feathead: "Pet friendly",
  },
];
const defaultFeaturesData = [
  {
    featalt: "featBookings",
    featUrl: "/featBookings.svg",
    feathead: "No Booking Fees",
    featDesc:
      "At Truliv, enjoy a fee-free, transparent, and affordable experience",
  },
  {
    featalt: "feat100",
    featUrl: "/feat100.svg",
    feathead: "100% online process",
    featDesc: "Experience a 100% online process for seamless convenience",
  },
  {
    featalt: "featShort",
    featUrl: "/featShort.svg",
    feathead: "Short Notice Period",
    featDesc: "Simply raise your notice, 30 days in advance",
  },
  {
    featalt: "feat7",
    featUrl: "/feat7.svg",
    feathead: "7-Day refund policy",
    featDesc:
      "We ensure your refund is processed within 7 working days from your last day of notice",
  },
];

const locationTitle = {
  default: (
    <>
      We are available in many <br /> places in{" "}
      <span className=" underline-offset-[8px] underline decoration-ptxt   ">
        Chennai
      </span>{" "}
    </>
  ),
  coliving: (
    <>
      We are available in many <br /> places in{" "}
      <span className=" underline-offset-[8px] underline decoration-ptxt   ">
        Chennai
      </span>{" "}
    </>
  ),
  holidayhomes: (
    <>
      With 6 locations in{" "}
      <span className=" underline-offset-[8px] underline decoration-ptxt   ">
        India,
      </span>
      <br />
      we’re always set to host you.
    </>
  ),
};

const FeatureTitle = {
  default: <>Your Perfect Co - living Partner</>,
  coliving: <>Your Perfect Co - living Partner</>,
  holidayhomes: <>Here’s why you should pick Truliv!</>,
};

export default function Locations() {
  const { houseType } = useContext(HouseContext);
  const renderAreaData = houseType === "Holiday Homes"?holidayHomesData:coLivingSpacesData;
  const [sliderRef] = useKeenSlider({

    loop:true,
    breakpoints: {
      "(min-width: 300px)": {
        slides: { perView: 2, spacing:  houseType === "Holiday Homes" ? 15 : 0 },
      },
      "(min-width: 500px)": {
        slides: { perView: 3, spacing:  houseType === "Holiday Homes" ? 15 : 0},
      },
      "(min-width: 700px)": {
        slides: { perView: 4, spacing:  houseType === "Holiday Homes" ? 15 : 0 },
      },
      "(min-width: 1000px)": {
        slides: { perView: houseType === "Holiday Homes" ? 3 : 6, spacing:  houseType === "Holiday Homes" ? 5 : 10 },
      },
    },
  });

  return (
    <div className="relative  w-full flex justify-center items-center flex-col">
      {/* Conditional rendering Location Title */}
      <div className="w-full bg-sbg   flex flex-col justify-center items-center ">
        <h2
          className={`${
            houseType === "Co-Living Spaces"
              ? "sm:pt-[700px] pt-[500px] "
              : houseType === "Holiday Homes"
              ? "sm:pt-[750px] pt-[600px] "
              : ""
          } text-[#000000] w-full md:pt-[360px] pt-[130px] sm:pt-[300px]  text-center md:font-medium font-semibold text-[22px] sm:text-2xl md:text-5xl leading-[35px] bgpt md:leading-[72px]`}
        >
          {houseType === "Co-Living Spaces"
            ? locationTitle.coliving
            : houseType === "Holiday Homes"
            ? locationTitle.holidayhomes
            : locationTitle.default}
        </h2>
      </div>

      {/*//////////// Location Cards////////////////////////// */}

      <div className="w-full bg-sbg  flex flex-col items-center justify-center  ">
      
      <div
            ref={sliderRef}
            className="keen-slider  relative w-full max-w-[1440px] px-4 md:max-w-[1440px]
         pt-[60px] pb-7 md:pb-0   md:pt-[54px]   flex justify-start md:justify-evenly"
          >
            {renderAreaData.map((area, index) => (
              <div
                key={index}
                className={`keen-slider__slide number-slide${index + 1}`}
              >
                <AreaCards
                 
                  area={area.area}
                  desc={area.desc}
                  areaUrl={area.areaUrl}
                  areaAlt={area.areaAlt}
                />
              </div>
            ))}
          </div>

      

        <div className="w-full  ">
          <picture className="w-full bg-sbg">
            <source media="(max-width:640px )" srcset="./bgorange.svg" />
            <source media="(min-width:641px )" srcset="./organeKey.svg" />
            <Image
              className="w-full "
              src="./organeKey.svg"
              alt=""
              width={0}
              height={0}
            />
          </picture>

          {/* FeatureCard rendering based on houseType */}

          <div className="flex flex-col items-center justify-center -mt-[70px] md:-mt-[170px] lg:-mt-[280px] lg:-mb-[150px]">

            <h2 className=" font-normal  md:font-semibold w-fit text-center z-50 text-white md:leading-[72px] text-[22px] md:text-[48px]">
              {houseType === "Co-Living Spaces"
                ? FeatureTitle.coliving
                : houseType === "Holiday Homes"
                ? FeatureTitle.holidayhomes
                : FeatureTitle.default}
            </h2>
            {houseType !== "Holiday Homes" && (
              <div className="w-full bg-ptxt md:bg-transparent  place-items-center  py-[38px] md:gap-x-8 gap-x-2 gap-y-2 justify-center px-3 md:flex md:flex-wrap  md:flow-row grid grid-cols-2">
                {coLivingFeaturesData.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    featalt={feature.featalt}
                    featUrl={feature.featUrl}
                    feathead={feature.feathead}
                    featDesc={feature.featDesc}
                  />
                ))}
              </div>
            )}

            {houseType === "Holiday Homes" && (
              <div className="w-full bg-ptxt md:bg-transparent place-items-center  py-[38px] md:gap-x-8 gap-x-2 gap-y-2 justify-center px-3 md:flex md:flex-wrap md:flow-row grid grid-cols-2">
                {holidayHomesFeaturesData.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    featalt={feature.featalt}
                    featUrl={feature.featUrl}
                    feathead={feature.feathead}
                  />
                ))}
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}
