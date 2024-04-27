import React from "react";
import LocationView from "./LocationView";
import VisitForm from "./VisitForm";
import Image from "next/image";
import ShowAllPhotos from "../../../colivingHomeComponents/UIElements/ShowAllPhotos";

export default function PDHero() {
  return (
    <div className="flex relative flex-col px-10 pt-10 pb-5 bg-[#232323]  w-[1440px]  text-wtxt  ">
      <LocationView />
      <div className=" flex gap-x-5 ">
        <div className="w-full relative flex flex-col justify-between items-center ">
          <div className=" flex w-full justify-between ">
            <div className=" flex flex-col ">
              <h2 className="text-ptxt text-[40px] font-bold leading-[60px] ">
                Truliv DRA Olympus
              </h2>

              <div className="flex items-center">
                <Image
                  className="mr-2"
                  src="/locationwhite.svg"
                  alt="location"
                  width={16}
                  height={16}
                />
                <p className="  ">
                  1st St, Chettiyar Agaram, Moorthy Nagar, Porur
                </p>
                <a className="underline ml-2">View on Map</a>
              </div>

              <div className="flex justify-start items-center">
                <p className="pr-2">4.0</p>
                <Image
                  className="mr-2"
                  src="/starRating.svg"
                  alt="starRating"
                  width={85}
                  height={17}
                />
                <p className="">(7 Reviews)</p>
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <p className="text-wtxt justify-center pt-4  flex items-center text-[26px] leading-[24px]">
                ₹1,999
                <span className="text-wtxt text-base pl-2"> /room/month </span>
              </p>
              <button className="py-[5px] px-[12px] rounded-md w-fit h-fit border-[1px] border-ptxt text-ptxt text-[13px] leading-[17px] ">
                Almost Full
              </button>
            </div>
          </div>

          <div className="flex gap-x-4 w-full">
            <div className="w-1/2">
              <Image
                className="mr-2 rounded-lg mt-[50px] "
                src="/nearbysize.svg"
                alt="pdhero"
                width={784}
                height={510}
              />
            </div>

            <div className="w-1/2 mt-[50px]  grid grid-cols-2">
              <Image
                className=" rounded-lg  "
                src="/nearbysize.svg"
                alt="pdhero"
                width={310}
                height={250}
              />
              <Image
                className=" rounded-lg  "
                src="/nearbysize.svg"
                alt="pdhero"
                width={310}
                height={250}
              />
              <Image
                className=" rounded-lg  "
                src="/nearbysize.svg"
                alt="pdhero"
                width={310}
                height={250}
              />
              <Image
                className=" rounded-lg  "
                src="/nearbysize.svg"
                alt="pdhero"
                width={310}
                height={250}
              />
            </div>
          </div>
          <div className="absolute bottom-8 right-10">
            <ShowAllPhotos />
          </div>
        </div>

        {/* <div className=" w-2/5 h-full rounded-lg flex flex-col ">
          <VisitForm />
        </div> */}
      </div>

     
    </div>
  );
}
