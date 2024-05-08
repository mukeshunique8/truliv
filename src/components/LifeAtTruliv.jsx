"use client";

import React from "react";

import Image from "next/image";

export default function LifeAtTruliv() {
  return (
    <>
      <div className="max-w-[1440px] flex md:flex-row flex-col w-full  relative   ">
        

        <div className="pt-[170px] w-full relative flex md:flex-row flex-col">
          <div className="relative md:-mr-[70px] md:w-[800px] w-[350px] h-[288px] md:h-[665px]">
            <Image
              className=""
              src="/mobileimg.svg"
              alt="mobilebg"
              fill
              sizes="100%"
             
            />
          </div>

          <div className="md:pt-[95px] pt-[40px] pb-[42px] px-[40px] md:px-0 flex flex-col items-center md:items-start ">
            <h2 className="font-semibold md:text-[48px] text-[22px] text-btxt">
              Life at Truliv
            </h2>
            <p className="font-medium md:w-[500px] text-center md:text-start text-[16px] md:text-[20px] mt-6 text-black">
              Lorem ipsum dolor sit amet consectetur. Ac pellentesque adipiscing
              cras nisl morbi pellentesque vulputate amet. Nibh tincidunt ipsum
              sem egestas ut. Eu urna consectetur vel hendrerit turpis nullam.
              Id hac volutpat mauris aliquam. In dis volutpat dolor egestas. At
              id mi est tellus vitae vestibulum adipiscing. Consequat aliquam
              odio mi pellentesque quam.
            </p>
          </div>

          <div className="absolute w-[250px] h-[17px] md:w-[594px] md:h-[40px] md:top-[92px] right-2 top-[460px] md:right-0">

          <Image
            className=""
            src="/vectorStriped.svg"
            alt="vectorStriped"
            fill
            sizes="100%"
          />

          </div>

        


        </div>
      </div>

     
    </>
  );
}
