


import React from "react";
import Image from "next/image";

export default function HowDoes() {
  const data = {
    one: {
      title: " Schedule A Visit",
      para: "Our executives will call to assist in understanding yourrequirements, identifying properties near your workplace or preferred location.",
      image: "/HDSchedule.svg",
      imagealt: "HDSchedule",
      no: "/1.svg",
      noalt: "No 1",
      nowidth: "59",
      curve: "/vectorCurve.svg",
    },
    two: {
      title: "  Visit The Property",
      para: " After speaking with our executives, they will schedule a visit  to show you the complete property inside and out.",
      image: "/HDVisit.svg",
      imagealt: "HDVisit",
      no: "/2.svg",
      noalt: "No 2",
      nowidth: "86",
      curve: "/vectorCurve1.svg",
    },
    three: {
      title: " Move In To Your New Home",
      para: "After visiting and booking your desired property, you can seamlessly transition to the Truliv community.",
      image: "/HDMove.svg",
      imagealt: "HDMove",
      no: "/3.svg",
      noalt: "No 3",
      nowidth: "92",
    },
  };

  return (
    <div className="w-full justify-center items-center flex flex-col ">
      <p className="md:text-[48px] text-[22px] max-w-[1440px]  md:py-[100px]   leading-[72px]  font-semibold ">
        How does it work?
      </p>

      <div className=" bg-howBg  bg-cover  bg-no-repeat py-[70px]">

        
     
        {Object.keys(data).map((key) => (
          <div
            key={key}
            className={`flex flex-col-reverse md:flex-row  relative  gap-x-[175px] py-[50px] md:py-[120px] px-[40px] md:px-[170px] ${
              key === "two" ? "md:flex-row-reverse" : ""
            }`}
          >
            <Image
              className={` absolute z-10 stroke-3 
            ${
              key === "one"
                ? "  top-[300px] left-[190px]"
                : " top-[360px] left-[180px]"
            }
            ${key === "three" ? "hidden" : "hidden lg:flex"}`}
              src={data[key].curve}
              alt="vectorCurve"
              width={659}
              height={565}
            />

            <div
              className={`${
                key === "three"
                  ? "flex relative flex-col md:pl-[30px] pt-[32px] md:pt-[120px]"
                  : "flex relative flex-col pt-[32px] md:pt-[160px] justify-center items-center w-full md:w-1/2"
              }`}
            >
              <h2 className="text-[30px] md:text-[48px] z-50 md:leading-[72px] font-normal md:font-semibold text-ptxt">
                {data[key].title}
              </h2>
              <p className="text-[16px] z-40 md:pl-[40px] leading-[24px] font-normal md:font-semibold">
                {data[key].para}
              </p>

              <div
                className={`absolute z-30 -top-[5px] left-0 md:top-[55px]  md:left-[0px] w-[38px] md:w-[60px] h-[70px] md:h-[225px]
              ${
                key === "three"
                  ? "w-[59px] absolute md:w-[92px] z-30 md:-top-[28px] md:left-[10px]"
                  : key === "two"
                  ? "w-[55px] absolute z-30 md:w-[86px] md:top-[60px] md:left-[0px]"
                  : ""
              }
              `}
              >
                <Image
                  src={data[key].no}
                  alt={data[key].noalt}
                  // width={data[key].nowidth}
                  // height={225}
                  fill
                  sizes="100%"
                />
              </div>
             
            </div>
            <div className="relative  w-1/2 md:min-w-[468px] md:h-[360px] min-w-[230px] h-[176px] ">
              <Image
                className=""
                src={data[key].image}
                alt={data[key].imagealt}
                fill
                sizes="100%"
              />
            </div>
          </div>
        ))}

        
      </div>
    </div>
  );
}
