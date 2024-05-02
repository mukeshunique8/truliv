import React, { useContext } from "react";
import AreaCards from "./AreaCards";
import AreaPhotos from "./AreaPhotos";
import FeatureCard from "./FeatureCard";
import FeatureCard2 from "./FeatureCard2";
import Navbar2 from "../app/colivingHomeComponents/Navbar2";


import { HouseContext } from "../Contexts/HouseContext";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";

const areasData = [
  {
    simgw: "56",
    simgh: "110",
    imgw: "79",
    imgh: "154",
    area: "OMR",
    desc: "As historic as",
    areaUrl: "/OMR.svg",
    areaAlt: "OMR",
  },
  {
    simgw: "56",
    simgh: "110",
    imgw: "104",
    imgh: "147",
    area: "Shenoy Nagar",
    desc: "As traditional as",
    areaUrl: "/Shenoy Nagar.svg",
    areaAlt: "Shenoy Nagar",
  },
  {
    simgw: "56",
    simgh: "110",
    imgw: "115",
    imgh: "155",
    area: "Anna Nagar",
    desc: "As cultural as",
    areaUrl: "/Anna Nagar.svg",
    areaAlt: "Anna Nagar",
  },
  {
    simgw: "56",
    simgh: "110",
    imgw: "73",
    imgh: "147",
    area: "Porur",
    desc: "As historic as",
    areaUrl: "/Porur.svg",
    areaAlt: "Porur",
  },
  {
    simgw: "56",
    simgh: "110",
    imgw: "131",
    imgh: "117",
    area: "Nungambakkam",
    desc: "As traditional as",
    areaUrl: "/Nungambakkam.svg",
    areaAlt: "Nungambakkam",
  },
  {
    simgw: "56",
    simgh: "110",
    imgw: "127",
    imgh: "155",
    area: "Adayar",
    desc: "As cultural as",
    areaUrl: "/Adayar.svg",
    areaAlt: "Adayar",
  },
  {
    simgw: "56",
    simgh: "110",
    imgw: "110",
    imgh: "147",
    area: "T. Nagar",
    desc: "As traditional as",
    areaUrl: "/T. Nagar.svg",
    areaAlt: "T. Nagar",
  },
  {
    simgw: "56",
    simgh: "110",
    imgw: "115",
    imgh: "155",
    area: "Anna Nagar",
    desc: "As cultural as",
    areaUrl: "/Anna Nagar.svg",
    areaAlt: "Anna Nagar",
  },
  {
    simgw: "56",
    simgh: "110",
    imgw: "73",
    imgh: "147",
    area: "Porur",
    desc: "As historic as",
    areaUrl: "/Porur.svg",
    areaAlt: "Porur",
  },
  {
    simgw: "56",
    simgh: "110",
    imgw: "131",
    imgh: "117",
    area: "Nungambakkam",
    desc: "As traditional as",
    areaUrl: "/Nungambakkam.svg",
    areaAlt: "Nungambakkam",
  },
];
const coLivingSpacesData = [
  {
    simgw: "56",
    simgh: "110",
    imgw: "79",
    imgh: "154",
    area: "OMR",
    desc: "As historic as",
    areaUrl: "/OMR.svg",
    areaAlt: "OMR",
  },
  {
    simgw: "56",
    simgh: "110",
    imgw: "104",
    imgh: "147",
    area: "Shenoy Nagar",
    desc: "As traditional as",
    areaUrl: "/Shenoy Nagar.svg",
    areaAlt: "Shenoy Nagar",
  },
  {
    simgw: "56",
    simgh: "110",
    imgw: "115",
    imgh: "155",
    area: "Anna Nagar",
    desc: "As cultural as",
    areaUrl: "/Anna Nagar.svg",
    areaAlt: "Anna Nagar",
  },
  {
    simgw: "56",
    simgh: "110",
    imgw: "73",
    imgh: "147",
    area: "Porur",
    desc: "As historic as",
    areaUrl: "/Porur.svg",
    areaAlt: "Porur",
  },
  {
    simgw: "56",
    simgh: "110",
    imgw: "131",
    imgh: "117",
    area: "Nungambakkam",
    desc: "As traditional as",
    areaUrl: "/Nungambakkam.svg",
    areaAlt: "Nungambakkam",
  },
  {
    simgw: "56",
    simgh: "110",
    imgw: "127",
    imgh: "155",
    area: "Adayar",
    desc: "As cultural as",
    areaUrl: "/Adayar.svg",
    areaAlt: "Adayar",
  },
  {
    simgw: "56",
    simgh: "110",
    imgw: "110",
    imgh: "147",
    area: "T. Nagar",
    desc: "As traditional as",
    areaUrl: "/T. Nagar.svg",
    areaAlt: "T. Nagar",
  },
];
const holidayHomesData = [
  { urlImage: "/location1.png", altimg: "location1" },
  { urlImage: "/location2.png", altimg: "location2" },
  { urlImage: "/location3.png", altimg: "location3" },
  { urlImage: "/location4.png", altimg: "location4" },
  { urlImage: "/location5.png", altimg: "location5" },
  { urlImage: "/location6.png", altimg: "location6" },
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
    featDesc: "Clean rooms",
  },
  {
    featalt: "affordablePrice",
    featUrl: "/affordablePrice.svg",
    featDesc: "Affordable prices",
  },
  {
    featalt: "culturalExperiences",
    featUrl: "/culturalExperiences.svg",
    featDesc: "Cultural experiences",
  },
  {
    featalt: "petFriendly",
    featUrl: "/petFriendly.svg",
    featDesc: "Pet friendly",
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

export default function Locations() {
  const { houseType } = useContext(HouseContext);
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 300px)": {
        slides: { perView: 2, spacing: 2 },
      },
      "(min-width: 1000px)": {
        slides: { perView: houseType === "Holiday Homes" ? 4 : 6, spacing: 10 },
      },
    },
  });

  return (
    <div className="relative w-full flex justify-center items-center flex-col">
      <Image
        className=" hidden md:flex absolute top-0 -z-40"
        src="./BottomArch.svg"
        alt=""
        width={1440}
        height={1045}
      />
      <Image
        className={`${houseType==='Co-Living Spaces'?"flex md:hidden w-full absolute top-[200px] -z-20": houseType === "Holiday Homes"
        ? "flex md:hidden w-full absolute top-[250px] -z-20":"flex md:hidden w-full absolute -top-[200px] -z-20"}`}
        src="./bottomArchSmall.svg"
        alt=""
        width={390}
        height={788}
      />

      <div className="w-full  hidden md:flex absolute bg-pbg top-0 -z-50 h-[1365px]"></div>
      <div className="w-full hidden md:flex   absolute bg-sbg top-0 -z-40 h-[950px]"></div>

      {/*\\\\\\\\\ Location Font ///////////////////////////*/}

      <div className="max-w-[1440px] w-full  flex flex-col justify-center items-center ">
        {/* Conditional rendering based on houseType */}
        {houseType === "Co-Living Spaces" && (
          <h2 className="text-[#000000] bg-[#FFF3EE]  w-full mt-[400px] md:mt-0   pt-[120px] md:pt-[360px]   text-center md:font-medium font-semibold  text-[22px]  md:text-5xl  leading-[35px] md:leading-[72px]">
            We are available in many <br /> places in{" "}
            <span className="border-b-2  border-[#E95F29]">Chennai</span>{" "}
          </h2>
        )}
        {houseType === "Holiday Homes" && (
          <h2 className="text-[#000000] bg-[#FFF3EE]  w-full   mt-[470px] md:mt-0   pt-[120px] md:pt-[360px]   text-center md:font-medium font-semibold  text-[22px]  md:text-5xl  leading-[30px] md:leading-[72px]">
            With 6 locations in{" "}
            <span className="border-b-2  border-[#E95F29]">India,</span>
            <br />
            we’re always set to host you.
          </h2>
        )}
        {/* Default rendering if houseType is neither "Coliving" nor "Home" */}
        {!(
          houseType === "Co-Living Spaces" || houseType === "Holiday Homes"
        ) && (
          <h2 className="text-[#000000] bg-[#FFF3EE]  w-full    pt-[130px] md:pt-[360px]   text-center font-semibold md:font-medium  text-[22px]  md:text-5xl  leading-[30px] md:leading-[72px]">
            We are available in many <br /> places in{" "}
            <span className="border-b-2  border-[#E95F29]">Chennai</span>{" "}
          </h2>
        )}
      </div>

      {/*//////////// Location Cards////////////////////////// */}

      <div className="w-full md:max-w-[1440px] mt-[60px] ">
        {/* Default rendering if houseType is neither "Coliving" nor "Home" */}
        {!(
          houseType === "Co-Living Spaces" || houseType === "Holiday Homes"
        ) && (
          <div
            ref={sliderRef}
            className="keen-slider relative w-full max-w-[1440px] pb-5 md:pb-[175px] px-10 z-40  md:pt-[54px] md:px-[44px] gap-y-4 md:gap-y-[33px]  flex justify-start md:justify-evenly"
          >
            {areasData.map((area, index) => (
              <div
                key={index}
                className={`keen-slider__slide number-slide${index + 1}`}
              >
                <AreaCards
                  simgw={area.simgw}
                  simgh={area.simgh}
                  imgw={area.imgw}
                  imgh={area.imgh}
                  area={area.area}
                  desc={area.desc}
                  areaUrl={area.areaUrl}
                  areaAlt={area.areaAlt}
                />
              </div>
            ))}
          </div>
        )}

        {/* houseType ------------> "Coliving" */}

        {houseType === "Co-Living Spaces" && (
          <div
            ref={sliderRef}
            className="keen-slider  relative w-full max-w-[1440px] pb-5 md:pb-[175px] px-10 z-40 md:pt-[54px] md:px-[44px] gap-y-4 md:gap-y-[33px]  flex justify-start md:justify-evenly"
          >
            {coLivingSpacesData.map((area, index) => (
              <div
                key={index}
                className={`keen-slider__slide number-slide${index + 1}`}
              >
                <AreaCards
                  simgw={area.simgw}
                  simgh={area.simgh}
                  imgw={area.imgw}
                  imgh={area.imgh}
                  area={area.area}
                  desc={area.desc}
                  areaUrl={area.areaUrl}
                  areaAlt={area.areaAlt}
                />
              </div>
            ))}
          </div>
        )}

        {houseType === "Holiday Homes" && (
          <div className="relative w-full max-w-[1440px] pb-[125px] md:pb-[175px]  z-40  pt-[54px] md:px-[44px] gap-y-4 md:gap-y-[33px] md:flex-wrap flex gap-x-3 justify-center md:justify-evenly h-fit overflow-y-hidden flex-row">
            <div ref={sliderRef} className="keen-slider">
              {holidayHomesData.map((area, index) => (
                <div key={index} className="keen-slider__slide">
                  <AreaPhotos urlImage={area.urlImage} altimg={area.altimg} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-full -z-30  bg-pbg mt-7 md:mt-[60px] ">
        {/* Conditional rendering based on houseType */}
        {houseType === "Co-Living Spaces" && (
          <h2 className=" font-normal md:font-semibold text-center  pt-[60px]    text-wtxt md:leading-[72px] text-[22px] md:text-[48px]">
            Your Perfect Co - living Partner
          </h2>
        )}
        {houseType === "Holiday Homes" && (
          <h2 className=" font-normal md:font-semibold text-center  pt-[60px]  text-wtxt md:leading-[72px] text-[22px] md:text-[48px]">
            Here’s why you should pick Truliv!{" "}
          </h2>
        )}
        {/* Default rendering if houseType is neither "Coliving" nor "Home" */}
        {!(
          houseType === "Co-Living Spaces" || houseType === "Holiday Homes"
        ) && (
          <h2 className=" font-normal md:font-semibold  text-center pt-[60px]    text-wtxt leading-[72px] text-[22px] md:text-[48px]">
            Your Perfect Co - living Partner
          </h2>
        )}
      </div>

      {/* FeatureCard rendering based on houseType */}

      <div className="w-full relative  ">
        {houseType === "Co-Living Spaces" && (
          <div className="w-full md:bg-transparent bg-ptxt  py-[38px] md:gap-x-8 gap-x-2 gap-y-2 justify-center px-3 md:flex md:flex-wrap md:flow-row grid grid-cols-2">
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
          <div className="w-full md:bg-transparent bg-ptxt py-[38px] md:gap-x-8 gap-x-2 gap-y-2 justify-center px-3 md:flex md:flex-wrap md:flow-row grid grid-cols-2">
            {holidayHomesFeaturesData.map((feature, index) => (
              <FeatureCard2
                key={index}
                featalt={feature.featalt}
                featUrl={feature.featUrl}
                featDesc={feature.featDesc}
              />
            ))}
          </div>
        )}
        {!(
          houseType === "Co-Living Spaces" || houseType === "Holiday Homes"
        ) && (
          <div className="w-full md:bg-transparent bg-ptxt  py-[38px] md:gap-x-8 gap-x-2 gap-y-2 justify-center px-3 md:flex md:flex-wrap md:flow-row grid grid-cols-2 ">
            {defaultFeaturesData.map((feature, index) => (
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
      </div>
    </div>
  );
}
