import React from "react";
import Image from "next/image";
import HotelBanner from "../components/HotelBanner";
import BookingHolidayHomes from "./BookingHolidayHomes";

export default function HolidayHomes() {
  return (
    <div className="w-full flex-col flex justify-center items-center ">
      <div className="max-w-[1440px]  flex flex-col justify-center md:px-[80px] px-[40px] items-center pt-[90px] bg-wbg  ">
        <h2 className="text-[#110229] font-semibold text-[22px] text-center  md:text-[48px]  ">
          {" "}
          <span className="text-ptxt">Holiday homes </span> for every occasion
        </h2>
        <p className="text-[#191A23] font-normal text-[16px] md:text-[24px] pt-4 md:px-[225px] text-center  ">
          Your new vacation destination is a gorgeous villa by the exciting
          beaches of ECR, Chennai, or the queen of hills, Ooty in the midst of
          whispering winds. Our property locations are dotted architectural
          masterpieces and state-of-the-art bungalows. They are private, with
          comforts to rival the best 5-star hotels. Luxurious spaces spill into
          emerald-green gardens and views, to feed your memories.
        </p>

        {/* Holiday Homes Images */}

        <div className=" flex md:flex-row flex-wrap flex-col mt-[80px] md:mt-[116px] gap-x-[100px] justify-center items-center">

          {/* Larger Screen */}
          <div className="relative hidden md:flex">
            <Image
              className=""
              src="/hh1.svg"
              alt="hh1"
              width={642}
              height={462}
            />
            <Image
              className="absolute top-0 left-0"
              src="/hh1bg.png"
              alt="hh1bg"
              width={642}
              height={462}
            />
            

            <div className="absolute -top-[50px] left-[30px]">
              <Image
                className="hover:hhShadow"
                src="/hh2.svg"
                alt="hh1"
                width={254}
                height={181}
              />
              <Image
                className="hover:hhShadow"
                src="/hh3.svg"
                alt="hh1"
                width={254}
                height={181}
              />
              <Image
                className="hover:hhShadow"
                src="/hh4.svg"
                alt="hh1"
                width={254}
                height={181}
              />
            </div>
          </div>
          {/* Mobile Screen */}
          <div className="relative flex md:hidden">
            <Image
              className=""
              src="/hh1.svg"
              alt="hh1"
              width={360}
              height={260}
            />
            <Image
              className="absolute top-0 left-0"
              src="/hh1bg.png"
              alt="hh1bg"
              width={360}
              height={260}
            />
            

            <div className="absolute -top-[30px] left-[20px]">
              <Image
                className="hover:hhShadow"
                src="/hh2.svg"
                alt="hh1"
                width={143}
                height={103}
              />
              <Image
                className="hover:hhShadow"
                src="/hh3.svg"
                alt="hh1"
                width={143}
                height={103}
              />
              <Image
                className="hover:hhShadow"
                src="/hh4.svg"
                alt="hh1"
                width={143}
                height={103}
              />
            </div>
          </div>


          <div className="md:mt-0 mt-[90px]">
            <ul className="flex flex-col justify-start text-[#191A23] leading-7 gap-y-[30px] text-base font-normal items-start">
              <li className="flex justify-center items-center gap-x-4">
                <span>
                  <Image
                    className=""
                    src="/hhStar.svg"
                    alt="hh1"
                    width={23}
                    height={23}
                  />{" "}
                </span>
                Services of a hotel in the comfort of your home
              </li>
              <li className="flex justify-center items-center gap-x-4">
                <span>
                  <Image
                    className=""
                    src="/hhStar.svg"
                    alt="hh1"
                    width={23}
                    height={23}
                  />{" "}
                </span>
                Signature of excellence
              </li>
              <li className="flex justify-center items-center gap-x-4">
                <span>
                  <Image
                    className=""
                    src="/hhStar.svg"
                    alt="hh1"
                    width={23}
                    height={23}
                  />{" "}
                </span>
                Experience the uncommon element{" "}
              </li>
              <li className="flex justify-center items-center gap-x-4">
                <span>
                  <Image
                    className=""
                    src="/hhStar.svg"
                    alt="hh1"
                    width={23}
                    height={23}
                  />{" "}
                </span>
                Lorem ipsum dolor sit amet{" "}
              </li>
              <li className="flex justify-center items-center gap-x-4">
                <span>
                  <Image
                    className=""
                    src="/hhStar.svg"
                    alt="hh1"
                    width={23}
                    height={23}
                  />{" "}
                </span>
                Experience TRU Hospitality{" "}
              </li>
              <li className="flex justify-center items-center gap-x-4">
                <span>
                  <Image
                    className=""
                    src="/hhStar.svg"
                    alt="hh1"
                    width={23}
                    height={23}
                  />{" "}
                </span>
                Lorem ipsum dolor sit amet{" "}
              </li>
            </ul>
          </div>
          


        </div>

       

       
      </div>

       {/* Explore Holiday Homes */}
       <div className="mt-[60px] md:mt-[145px] pb-[90px] w-full px-5 md:px-[120px] ">
          <div className="w-full flex justify-between">
            <h2 className=" text-[#110229] text-center font-semibold  text-lg md:text-3xl">
              Explore Holiday Homes
            </h2>
            <button className="hidden md:flex text-ptxt text-center font-normal text-2xl">
              See all
            </button>
          </div>

          <div className="md:flex md:flex-row md:flex-wrap grid grid-cols-2   gap-x-5 md:gap-x-0 mt-[30px] gap-y-5">
            <HotelBanner
              location="ECR,Chennai"
              hotel="Truliv Ipsum, Kovalam"
              altimg="TrulivIpsum"
              urlimg="/TrulivIpsum.png"
            />
            <HotelBanner
              location="ECR,Chennai"
              hotel="Truliv Ipsum, Kovalam"
              altimg="TrulivIpsum"
              urlimg="/TrulivIpsum2.png"
            />
            <HotelBanner
              location="ECR,Chennai"
              hotel="Truliv Ipsum, Kovalam"
              altimg="TrulivIpsum"
              urlimg="/TrulivIpsum3.png"
            />
            <HotelBanner
              location="ECR,Chennai"
              hotel="Truliv Ipsum, Kovalam"
              altimg="TrulivIpsum"
              urlimg="/TrulivIpsum.png"
            />
          </div>
        </div>

        {/* Best Holiday Homes in India */}

        <div className="bg-sbg  px-[24px] md:px-[175px] py-[30px] md:py-[56px] w-full flex flex-col justify-center md:rounded-3xl items-center text-center">
                <h2 className="text-ptxt   text-center font-bold text-[24px] md:text-[68px]">Best Holiday Homes in India</h2>
                <p className="hidden md:flex text-dbtxt pb-[30px] text-center font-medium text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                
                <BookingHolidayHomes/>

            </div>

     
    </div>
  );
}
