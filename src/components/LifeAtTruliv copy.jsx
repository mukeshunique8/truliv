
"use client"

import React from "react";

import Image from "next/image";

export default function LifeAtTruliv() {
  return (
   

    <>
      <div className="max-w-[1440px] hidden md:flex w-full  relative  h-[850px] ">
        <div className="w-1/2">
          <Image
            className="absolute z-20 bottom-0 left-[136px]"
            src="/lifeAtTruliv.svg"
            alt="lifeAtTruliv"
            width={396}
            height={665}
          />
        </div>
        <Image
          className="absolute  top-[92px] right-0"
          src="/vectorStriped.svg"
          alt="vectorStriped"
          width={594}
          height={40}
        />
        <Image
          className="absolute z-10 bottom-0 left-0"
          src="/vectorMountain.svg"
          alt="vectorMountain"
          width={817}
          height={401}
        />

        <div className="pt-[265px] z-30  w-1/2">
          <h2 className="font-semibold text-[48px] text-btxt">
            Life at Truliv
          </h2>
          <p className="font-medium w-[500px] text-[20px] mt-6 text-btxt">
            Lorem ipsum dolor sit amet consectetur. Ac pellentesque adipiscing
            cras nisl morbi pellentesque vulputate amet. Nibh tincidunt ipsum
            sem egestas ut. Eu urna consectetur vel hendrerit turpis nullam. Id
            hac volutpat mauris aliquam. In dis volutpat dolor egestas. At id mi
            est tellus vitae vestibulum adipiscing. Consequat aliquam odio mi
            pellentesque quam.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] md:hidden flex flex-col w-full px-5  justify-center    ">
        <div className="relative h-[385px] ">
          <div className="absolute bottom-[20px] left-[58px] z-10 ">
            <Image
              className=" "
              src="/lifeAtTruliv.svg"
              alt="lifeAtTruliv"
              width={170}
              height={280}
            />
          </div>
          <div className="absolute  bottom-[20px] left-[0px] ">
            <Image
              className=" "
              src="/vectorMountain.svg"
              alt="vectorMountain"
              width={350}
              height={170}
            />
          </div>
                    
          <div>
          <Image
                      className="absolute  bottom-0 right-0  "
                      src="/vectorStriped.svg"
                      alt="vectorStriped"
                      width={250}
                      height={17}
                    />

          </div>
                  
        </div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="font-semibold text-[22px] pt-5 text-btxt">
            Life at Truliv
          </h2>
          <p className="text-[16px] px-[20px] pb-8 text-center mt-6 text-btxt">
            Lorem ipsum dolor sit amet consectetur. Ac pellentesque adipiscing
            cras nisl morbi pellentesque vulputate amet. Nibh tincidunt ipsum
            sem egestas ut. Eu urna consectetur vel hendrerit turpis nullam. Id
            hac volutpat mauris aliquam. In dis volutpat dolor egestas. At id mi
            est tellus vitae vestibulum adipiscing. Consequat aliquam odio mi
            pellentesque quam.
          </p>
        </div>
      </div>
    </>
  );
}
