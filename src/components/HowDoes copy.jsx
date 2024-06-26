import React from "react";
import Image from "next/image";

export default function HowDoes() {
  return (
    <>
      {/* Larger screens */}
      <div className=" w-full  hidden md:flex flex-col justify-center items-center">
        <div className="  mt-[97px] flex flex-col justify-center items-center ">
          <p className="text-[48px] max-w-[1440px]  pb-[100px] leading-[72px]  font-semibold ">
            How does it work?
          </p>

          <div className="flex flex-col ">
            {/* Step 1 */}

            <div className=" bg-sbg max-w-[1440px]  relative rounded-t-[25%] flex  px-[170px] ">
              <Image
                className="absolute z-10 stroke-3  top-[230px] left-[180px]"
                src="/vectorCurve.svg"
                alt="vectorCurve"
                width={659}
                height={565}
              />
              <div className="relative w-1/2 flex flex-col pt-[280px] items-start ">
                <Image
                  className="absolute z-40 top-[190px] -left-3"
                  src="/1.svg"
                  alt="1"
                  width={59}
                  height={225}
                />

                <h2 className="text-[48px] z-50 leading-[72px]  font-normal md:font-semibold  text-ptxt">
                  Schedule A Visit
                </h2>
                <p className="text-[16px] z-10 pl-[40px] leading-[24px]  font-normal md:font-semibold ">
                  Our executives will call to assist in understanding your
                  requirements, identifying properties near your workplace or
                  preferred location.
                </p>
              </div>
              <div className="w-1/2  pt-[120px] flex justify-center items-center ">
                <Image
                  className=""
                  src="/HDSchedule.svg"
                  alt="HDSchedule"
                  width={468}
                  height={359}
                />
              </div>
            </div>

            {/* Step 2 */}

            <div className="bg-sbg relative flex gap-x-[170px] flex-row-reverse pt-[250px] px-[170px] ">
              <Image
                className="absolute stroke-3 z-40 top-[380px] left-[155px]"
                src="/vectorCurve1.svg"
                alt="vectorCurve"
                width={659}
                height={565}
              />
              <div className="w-1/2 relative justify-center flex flex-col items-start ">
                <Image
                  className="absolute  top-[55px] left-0"
                  src="/2.svg"
                  alt="2"
                  width={59}
                  height={225}
                />

                <h2 className="text-[48px] leading-[72px] z-50  font-normal md:font-semibold  text-ptxt">
                  Visit The Property
                </h2>
                <p className="text-[16px] pl-[30px]  z-10 leading-[24px]  font-normal md:font-semibold ">
                  After speaking with our executives, they will schedule a visit
                  to show you the complete property inside and out.
                </p>
              </div>
              <div className="w-1/2 relative  flex justify-center items-center ">
                <Image
                  className="pr-8"
                  src="/HDVisit.svg"
                  alt="HDVisit"
                  width={766}
                  height={344}
                />

               
              </div>
            </div>

            {/* Step 3 */}

            <div className="bg-sbg rounded-b-[25%] flex gap-x-[90px]   pb-[260px] px-[170px] ">
              <div className="w-1/2 relative flex flex-col pt-[220px] items-start ">
                <Image
                  className="absolute z-40 top-[185px] left-4"
                  src="/3.svg"
                  alt="3"
                  width={59}
                  height={225}
                />
                <h2 className="text-[48px] z-50 leading-[72px]  font-normal md:font-semibold  text-ptxt">
                  Move In To Your New Home
                </h2>
                <p className="text-[16px] pl-[30px] leading-[24px]  font-normal md:font-semibold ">
                  After visiting and booking your desired property, you can
                  seamlessly transition to the Truliv community.
                </p>
              </div>
              <div className="w-1/2  pt-[120px] flex justify-center items-center ">
                <Image
                  className=""
                  src="/HDMove.svg"
                  alt="HDMove"
                  width={468}
                  height={295}
                />
              </div>
            </div>
          </div>
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
