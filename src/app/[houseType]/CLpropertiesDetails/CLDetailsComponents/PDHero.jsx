import React from "react";
import LocationView from "./LocationView";
import VisitForm from "./VisitForm";
import Image from "next/image";
import ShowAllPhotos from "../../../colivingHomeComponents/UIElements/ShowAllPhotos";

export default function PDHero() {
  return (
    <div className="flex flex-col px-10 pt-10 pb-5 bg-[#232323]  w-[1440px]  text-wtxt  ">
      <LocationView />
      <div className=" flex gap-x-5 ">
        <div className="w-3/5 relative flex flex-col justify-between items-center ">
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
                <p className="underline">(7 Reviews)</p>
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <p className="text-wtxt text-base">Starts from</p>
              <p className="text-wtxt justify-center flex items-center text-[26px] leading-[24px]">
                ₹3,000<span className="text-wtxt text-base">/month</span>
              </p>
              <button className="py-[5px] px-[12px] rounded-md w-fit h-fit border-[1px] border-ptxt text-ptxt text-[13px] leading-[17px] ">
                Almost Full
              </button>
            </div>
          </div>

          <Image
            className="mr-2 rounded-lg mt-[30px] "
            src="/nearbysize.svg"
            alt="pdhero"
            width={750}
            height={410}
          />

          <div className="absolute bottom-4 right-8">
            <ShowAllPhotos/>

          </div>
        </div>

        <div className=" w-2/5 h-full rounded-lg flex  ">
          <VisitForm />
        </div>
      </div>
    </div>
  );
}
