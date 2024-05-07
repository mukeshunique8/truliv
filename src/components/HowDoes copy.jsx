import React from "react";
import Image from "next/image";

export default function HowDoes() {

  const data = {
   "one": {
      title:" Schedule A Visit",
      para:"Our executives will call to assist in understanding yourrequirements, identifying properties near your workplace or preferred location."
    },
    "two": {
      title:"  Visit The Property",
      para:" After speaking with our executives, they will schedule a visit  to show you the complete property inside and out."
    },
    "three": {
      title:" Move In To Your New Home",
      para:"After visiting and booking your desired property, you can seamlessly transition to the Truliv community."
    }

  }

  return (
    <>
      {/* Larger screens */}
      <div className=" w-full  hidden md:flex flex-col justify-center items-center">

        <div className="">

        </div>
       


      </div>

      {/* Mobile screens */}

      <div className=" w-full   md:hidden flex flex-col  items-center">
        <p className="text-[22px] pb-[40px] leading-normal font-semibold ">
          How does it work?
        </p>

        <div className="bg-sbg px-[35px]  rounded-br-[75px]  rounded-bl-[75px]  rounded-tr-[75px]  rounded-tl-[75px]   w-full">
          <div className="relative flex flex-col items-center  ">
            <Image
              className="mt-[50px]"
              src="/HDSchedule.svg"
              alt="HDSchedule"
              width={229}
              height={176}
            />
              <Image
                  className="absolute  bottom-[125px] left-7 md:left-1"
                  src="/1.svg"
                  alt="1"
                  width={38}
                  height={144}
                />


            <h2 className="text-[30px] mt-[32px] z-40 leading-normal font-extrabold text-ptxt">
              Schedule A Visit
            </h2>
            <p className="text-[16px] text-center text-[#3B3B3B] pt-4 leading-[24px]  font-normal md:font-semibold ">
              Our executives will call to assist in understanding your
              requirements, identifying properties near your workplace or
              preferred location.
            </p>
          </div>
          <div className="relative mt-[75px] flex flex-col items-center  ">
            <Image
              className="mt-[50px]"
              src="/HDVisit.svg"
              alt="HDSchedule"
              width={229}
              height={168}
            />
              <Image
                  className="absolute  bottom-[125px] left-6 md:left-1"
                  src="/2.svg"
                  alt="1"
                  width={38}
                  height={144}
                />


            <h2 className="text-[30px] mt-[32px] z-40 leading-normal font-extrabold text-ptxt">
            Visit The Property            </h2>
            <p className="text-[16px] text-center text-[#3B3B3B] pt-4 leading-[24px]  font-normal md:font-semibold ">
            Our executives will call to assist in understanding your requirements, identifying properties near your workplace or preferred location.

            </p>
          </div>
          <div className="relative pb-[75px]  mt-[75px] flex flex-col items-center  ">
            <Image
              className="mt-[50px]"
              src="/HDMove.svg"
              alt="HDSchedule"
              width={229}
              height={168}
            />
              <Image
                  className="absolute  bottom-[250px] left-1"
                  src="/3.svg"
                  alt="1"
                  width={38}
                  height={144}
                />


            <h2 className="text-[30px] mt-[52px] z-40 leading-normal font-extrabold text-ptxt">
            Move In To Your New Home   </h2>
            <p className="text-[16px] text-center text-[#3B3B3B] pt-4 leading-[24px]  font-normal md:font-semibold ">
            Our executives will call to assist in understanding your requirements, identifying properties near your workplace or preferred location.

            </p>
          </div>

        </div>
      </div>

    </>
  );
}
