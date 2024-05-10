import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NearbyPropertiesCard(props) {
  const router = useRouter();

  function routeProperty() {
    router.push("/properties/HHpropertiesDetails");
  }

  const amenities = [
    { icon: "/wifi2.svg", text: "Wi-fi" },
    { icon: "/parking.svg", text: "Parking" },
  ];

  return (
    <div
      onClick={routeProperty}
      className="flex flex-col border-2 rounded-md shadow-lg md:shadow-none md:border-none border-[#FBFBFB] 
      max-w-[175px]  md:max-w-[400px] max-h-[305px] md:max-h-[390px] relative cursor-pointer"
    >
      <div className="relative  w-[170px] h-[170px] md:w-[400px] md:h-[300px]">
        <Image
          className="object-cover rounded-b-none  rounded-md md:rounded-md"
          src="/nearbysize.svg"
          alt="rightArrow"
          fill
          sizes="100%"
        />
        <div className="absolute hidden md:flex z-50 md:top-3 md:left-2 top-0 left-2">
          <button
            className={`md:px-3 px-[3px] md:py-[5px] font-medium border-[1px] md:text-[14px] text-[10px]  rounded-[3px]${props.badgestyle}`}
          >
           {props.badge}
          </button>
        </div>
      </div>

      <div className="md:flex px-2 hidden mt-[15px]">
        <p className="text-base text-[#333333] font-medium">{props.rating}</p>
        <Image
          className="pl-2 rounded-md"
          src="/starRating.svg"
          alt="starRating"
          width={85}
          height={17}
        />
      </div>
      <h2 className="mt-1 px-2 text-[#333] text-[16px]  md:text-2xl font-semibold">
      {props.name}
      </h2>

      <div className="flex px-2 justify-start items-center mt-1">
        <Image
          className="md:mr-2"
          src="/locationOn.svg"
          alt="location"
          width={16}
          height={16}
        />
        <p className="md:text-[14px] text-[11px] text-[#1D1D1D]">{props.location}</p>
      </div>

      <div className="flex md:hidden px-2 justify-start items-center my-3">
        <button
          className={`md:px-3 px-[3px] md:py-[5px] font-medium border-[1px]  text-[10px]  rounded-[3px]${props.badgestyle}`}
        >
        {props.badge}
        </button>
      </div>

      <div className="flex flex-col px-2 md:hidden justify-start gap-y-2">
        <p className="text-ptxt md:text-btxt justify-start font-bold flex items-center md:text-[26px] text-[16px] leading-normal md:leading-[24px]">
        {props.price}<span className="text-[#707070] font-normal text-base">/room/night</span>
        </p>
      </div>
      
      {/* Map over amenities data to render dynamic list */}
      <div className="flex md:hidden px-2 flex-col md:border-b md:border-[#E6E7E9]">
        <div className="flex flex-wrap text-[11px] gap-y-2 gap-x-[30px] my-3 md:mb-5  md:mt-[23px] ">
          {amenities.map((item, index) => (
            <li key={index} className="flex justify-center gap-x-2 items-center">
              <span>
                <Image
                  className=""
                  src={item.icon}
                  alt="amenityIcon"
                  width={20}
                  height={20}
                />
              </span>
              {item.text}
            </li>
          ))}
        </div>

        
      </div>
    </div>
  );
}
