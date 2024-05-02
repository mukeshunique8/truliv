import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HotelBanner(props) {
  // const router = useRouter()

  // function routeProperty(){
  //   router.push('/coliving/propertiesDetails')
  // }

  return (
    <div
      // onClick={routeProperty}
      className="drop-shadow-hhds cursor-pointer md:min-w-[1100px]  p-0 md:p-[17px] bg-wtxt flex md:flex-row flex-col md:rounded-[30px] rounded-[10px]   md:gap-x-5"
    >
      <div className=" flex  justify-center items-center">
        <Image
          className="hidden md:flex rounded-xl"
          src={props.urlimg}
          alt={props.altimg}
          width={391}
          height={216}
        />
        <Image
          className="flex md:hidden rounded-lg"
          src={props.urlimg}
          alt={props.altimg}
          width={170}
          height={141}
        />
      </div>

      <div className="drop-shadow-hhds flex flex-col md:py-0 py-2  justify-center gap-y-[5px] px-2 md:px-0 ">
        <h1 className="text-dbtxt text-[12px] md:text-2xl font-semibold ">{props.hotel}</h1>
        <p className="text-gtxt text-[10px] md:text-[19px] font-normal">{props.location}</p>
        <Image
          className="hidden md:flex"
          src="/starRating.svg"
          alt="hh1"
          width={114}
          height={24}
        />
        <div className="flex md:flex-row md:text-base text-[11px]  flex-col md:justify-center justify-start items-start  md:items-center flex-wrap gap-y-2 gap-x-[30px] md:mt-[15px] ">
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

        <a
          href=""
          className="flex w-[155px] cursor-pointer  justify-start md:mt-[42px] items-center gap-x-1  md:gap-x-[10px]"
        >
          <h2 className="text-ptxt cursor-pointer text-[13px] md:text-[18px] font-medium ">
            Reserve Now
          </h2>
          <Image
            className="hidden md:flex"
            src="/rightArrow2.svg"
            alt="rightArrow2"
            width={18}
            height={18}
          />
          <Image
            className="flex md:hidden"
            src="/rightArrow2.svg"
            alt="rightArrow2"
            width={10}
            height={10}
          />
        </a>
      </div>
    </div>
  );
}
