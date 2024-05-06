import React, { useContext } from "react";
import AreaCards from "./AreaCards";
import AreaPhotos from "./AreaPhotos";
import FeatureCard from "./FeatureCard";
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
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 300px)": {
        slides: { perView: 2, spacing: 2 },
      },
      "(min-width: 500px)": {
        slides: { perView: 3, spacing: 2 },
      },
      "(min-width: 700px)": {
        slides: { perView: 4, spacing: 2 },
      },
      "(min-width: 1000px)": {
        slides: { perView: houseType === "Holiday Homes" ? 4 : 6, spacing: 10 },
      },
    },
  });

  return (
    <div className="relative  w-full flex justify-center items-center flex-col">
      {/* <Image
        className=" hidden md:flex absolute top-0 -z-40"
        src="./BottomArch.svg"
        alt=""
        width={1440}
        height={1045}
      />
      <Image
        className={`${
          houseType === "Co-Living Spaces"
            ? "flex md:hidden w-full absolute top-[200px] -z-20"
            : houseType === "Holiday Homes"
            ? "flex md:hidden w-full absolute top-[250px] -z-20"
            : "flex md:hidden w-full absolute -top-[200px] -z-20"
        }`}
        src="./bottomArchSmall.svg"
        alt=""
        width={390}
        height={788}
      /> */}

      {/* <div className="w-full  hidden md:flex absolute bg-pbg top-0 -z-50 h-[1365px]"></div>
      <div className="w-full hidden md:flex   absolute bg-sbg top-0 -z-40 h-[950px]"></div> */}

      {/*\\\\\\\\\ Location Font ///////////////////////////*/}

      <div className="w-full bg-sbg   flex flex-col justify-center items-center ">
        {/* Conditional rendering based on houseType */}

        <h2
          className={`${
            houseType === "Co-Living Spaces"
              ? "mt-[420px] md:mt-0"
              : houseType === "Holiday Homes"
              ? "mt-[500px] md:mt-0"
              : ""
          } text-[#000000] w-full mt-[40px] md:mt-0 pt-[120px] md:pt-[360px] text-center md:font-medium font-semibold text-[22px] md:text-5xl leading-[35px] md:leading-[72px]`}
        >
          {houseType === "Co-Living Spaces"
            ? locationTitle.coliving
            : houseType === "Holiday Homes"
            ? locationTitle.holidayhomes
            : locationTitle.default}
        </h2>
      </div>

      {/*//////////// Location Cards////////////////////////// */}

      <div className="w-full bg-sbg flex justify-center pt-10 md:pt-[60px] ">
        {/* Default rendering if houseType is neither "Coliving" nor "Home" */}
        {!(
          houseType === "Co-Living Spaces" || houseType === "Holiday Homes"
        ) && (
          <div
            ref={sliderRef}
            className="keen-slider  relative w-full max-w-[1440px] px-8 md:max-w-[1440px]   md:pt-[54px] md:px-[44px] gap-y-4 md:gap-y-[33px]  flex justify-start md:justify-evenly"
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
            className="keen-slider  relative w-full max-w-[1440px] px-8  md:pt-[54px] md:px-[44px] gap-y-4 md:gap-y-[33px]  flex justify-start md:justify-evenly"
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
          <div className="relative w-full max-w-[1440px] pb-[55px] md:pb-[175px] px-8    pt-[54px] md:px-[44px] gap-y-4 md:gap-y-[33px] md:flex-wrap flex gap-x-3 justify-center md:justify-evenly h-fit overflow-y-hidden flex-row">
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

      {/* Conditional rendering based on houseType */}
      <div className="w-full flex flex-col relative items-center bg-sbg justify-center   ">
        <div className="flex justify-center items-center">
          <Image
            className="hidden md:flex absolute top-0 w-full "
            src="./organeKey.svg"
            alt=""
            width={0}
            height={445}
          />

          <Image
            className="flex md:hidden absolute top-0 "
            src="./bgorange.svg"
            alt=""
            width={1440}
            height={445}
          />

          {/* <picture>
            <source media="(max-width:640px )" srcset="./bgorange.svg" />
            <source media="(min-width:641px )" srcset="./organeKey.svg" />
            <Image
              className="w-full "
              src="./organeKey.svg"
              alt=""
              width={0}
              height={445}
            />
          </picture> */}
        </div>

        <h2 className=" font-normal md:font-semibold pt-[43px]  md:pt-[200px]  text-center z-50 text-white md:leading-[72px] text-[22px] md:text-[48px]">
          {houseType === "Co-Living Spaces"
            ? FeatureTitle.coliving
            : houseType === "Holiday Homes"
            ? FeatureTitle.holidayhomes
            : FeatureTitle.default}
        </h2>
      </div>

      {/* FeatureCard rendering based on houseType */}

      <div className="w-full relative bg-pbg lg:bg-transparent  ">
        {houseType === "Co-Living Spaces" && (
          <div className="w-full  place-items-center  py-[38px] md:gap-x-8 gap-x-2 gap-y-2 justify-center px-3 md:flex md:flex-wrap  md:flow-row grid grid-cols-2">
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
          <div className="w-full md:bg-transparent place-items-center  py-[38px] md:gap-x-8 gap-x-2 gap-y-2 justify-center px-3 md:flex md:flex-wrap md:flow-row grid grid-cols-2">
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
        {!(
          houseType === "Co-Living Spaces" || houseType === "Holiday Homes"
        ) && (
          <div className="w-full  place-items-center py-[38px] md:gap-x-8 gap-x-2 gap-y-2 justify-center px-3 md:flex md:flex-wrap md:flow-row grid grid-cols-2 ">
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
