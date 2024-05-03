import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NearbyPropertiesCard(props) {
  const router = useRouter();

  function routeProperty() {
    router.push("/coliving/CLpropertiesDetails");
    // console.log("fkbsab");
  }

  return (
    <div
      onClick={routeProperty}
      className="flex flex-col border-2 rounded-md shadow-lg md:shadow-none md:border-none border-[#FBFBFB] md:min-w-[300px] relative cursor-pointer"
    >
      <div className="absolute md:top-3 md:left-2 top-0 left-2">
        <button
          className={`md:px-3 px-[3px] md:py-[5px] font-medium border-[1px] md:text-[14px] text-[10px]  rounded-[3px]${props.style}`}
        >
          Almost Full
        </button>
      </div>

      <Image
        className=" object-center rounded-md"
        src="/nearbysize.svg"
        alt="rightArrow"
        width={426}
        height={300}
      />

      <div className="md:flex  px-2 hidden mt-[15px]">
        <p className="text-base text-[#333333] font-medium">4.0</p>
        <Image
          className=" rounded-md"
          src="/starRating.svg"
          alt="starRating"
          width={85}
          height={17}
        />
      </div>
      <h2 className=" mt-1 px-2 text-[#333] text-[16px]  md:text-2xl font-semibold">
        Truliv DRA Olympus
      </h2>

      <div className="flex px-2 justify-start items-center mt-1">
        <Image
          className="md:mr-2"
          src="/locationOn.svg"
          alt="location"
          width={16}
          height={16}
        />
        <p className=" md:text-[14px] text-[11px] text-[#1D1D1D]">
          Moorthy Nagar, Porur
        </p>
      </div>

      <div className="flex  flex-col px-2 md:hidden justify-start gap-y-2">
        <p className="text-ptxt md:text-btxt justify-start font-bold flex items-center md:text-[26px] text-[16px] leading-normal md:leading-[24px]">
          ₹3,000<span className="  text-[#707070] font-normal text-base">/ month</span>
        </p>
      </div>
       <div className="flex md:hidden px-2 flex-col md:border-b md:border-[#E6E7E9]">
            <div className="flex flex-wrap text-[11px] gap-y-2 gap-x-[30px] my-3 md:mb-5  md:mt-[23px] ">
              <li className="flex justify-center gap-x-2 items-center">
                <span>
                  {" "}
                  <Image
                    className=""
                    src="/furniture3.svg"
                    alt="wifi2"
                    width={20}
                    height={20}
                  />
                </span>
                Single, Double & Triple
              </li>
              <li className="flex justify-center gap-x-2 items-center">
                <span>
                  {" "}
                  <Image
                    className=""
                    src="/unisex.svg"
                    alt="Unisex"
                    width={20}
                    height={20}
                  />
                </span>
                Wi-fi
              </li>
            </div>

            <div className="md:flex hidden flex-col mb-5">
              <h2 className="font-semibold">Featured Amenities</h2>

              <div className="flex flex-wrap gap-y-2 gap-x-[30px] mt-[13px] ">
                <li className="flex justify-center gap-x-2 items-center">
                  <span>
                    {" "}
                    <Image
                      className=""
                      src="/wifi2.svg"
                      alt="wifi2"
                      width={20}
                      height={20}
                    />
                  </span>
                  Wi-fi
                </li>

                <li className="flex justify-center gap-x-2 items-center">
                  <span>
                    {" "}
                    <Image
                      className=""
                      src="/parking.svg"
                      alt="wifi2"
                      width={20}
                      height={20}
                    />
                  </span>
                  Parking
                </li>

                <li className="flex justify-center gap-x-2 items-center">
                  <span>
                    {" "}
                    <Image
                      className=""
                      src="/security.svg"
                      alt="wifi2"
                      width={20}
                      height={20}
                    />
                  </span>
                  24 x 7 Security
                </li>

                <li className="flex justify-center gap-x-2 items-center">
                  <span>
                    {" "}
                    <Image
                      className=""
                      src="/wifi2.svg"
                      alt="wifi2"
                      width={20}
                      height={20}
                    />
                  </span>
                  Wi-fi
                </li>
              </div>
            </div>
          </div>

    </div>
  );
}
