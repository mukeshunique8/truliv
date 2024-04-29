import React, { useState, useRef } from "react";
import LocationView from "./LocationView";
import VisitForm from "./VisitForm";
import Image from "next/image";
import ShowAllPhotos from "../../../colivingHomeComponents/UIElements/ShowAllPhotos";
import Slider from "react-slick";

export default function PDHero() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Facade");
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    
  };

  return (
    <div className="flex relative flex-col px-10 pt-10 pb-5 bg-[#232323]  w-[1440px]  text-wtxt  ">
      <LocationView />
      <div className=" flex gap-x-5 ">
        <div className="w-full relative flex flex-col justify-between items-center ">
          <div className=" flex w-full  justify-between ">
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
                {/* <p className="  ">
                  1st St, Chettiyar Agaram, Moorthy Nagar, Porur
                </p> */}
                <p className="  ">
                   Porur
                </p>
                <a className="underline ml-2">View on Map</a>
              </div>

              {/* <div className="flex justify-start items-center">
                <p className="pr-2">4.0</p>
                <Image
                  className="mr-2"
                  src="/starRating.svg"
                  alt="starRating"
                  width={85}
                  height={17}
                />
                <p className="">(7 Reviews)</p>
              </div> */}
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

          <div className="flex mt-6 gap-x-4 w-full">
            <div className="w-1/2">
              <Image
                className="mr-2 rounded-lg  "
                src="/nearbysize.svg"
                alt="pdhero"
                width={784}
                height={510}
              />
            </div>

            <div className="w-1/2 items-center grid grid-cols-2">
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
                className=" rounded-lg   "
                src="/nearbysize.svg"
                alt="pdhero"
                width={310}
                height={250}
              />
            </div>
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="absolute bottom-8 right-10"
          >
            <ShowAllPhotos />
          </div>
        </div>
        {/* Modal for showing all photos */}
        {/* Modal for showing all photos */}
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
            <div className="bg-b1txt w-full h-[800px] p-8 rounded-lg px-5 py-3 overflow-x-auto">
              <div className="flex justify-between border-b-2 py-2 items-center">
                <div className="flex items-start justify-start text-ptxt">
                  <ul className="flex cursor-pointer gap-x-5">
                    {["Facade", "Living Room", "Bed Room", "Rest Room"].map(
                      (tab) => (
                        <li
                          key={tab}
                          className={
                            activeTab === tab ? "text-ptxt" : "text-white"
                          }
                          onClick={() => setActiveTab(tab)}
                        >
                          {tab}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <button
                    className="text-ptxt cursor-pointer bg-white px-2 py-2 rounded-lg"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
              {/* Carousel for displaying images */}
              <div >
                {/* Render images based on activeTab */}
                {activeTab === "Facade" && (
                  <div className="flex items-center justify-center">
                  
                    <div className="flex justify-center items-center py-4 gap-4 flex-wrap">
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    </div>
                   
                  </div>
                )}

{activeTab === "Living Room" && (
                  <div className="flex items-center justify-center">
                  
                    <div className="flex justify-center items-center py-4 gap-4 flex-wrap">
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    </div>
                   
                  </div>
                )}
               
               {activeTab === "Bed Room" && (
                  <div className="flex items-center justify-center">
                  
                    <div className="flex justify-center items-center py-4 gap-4 flex-wrap">
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    </div>
                   
                  </div>
                )}

{activeTab === "Rest Room" && (
                  <div className="flex items-center justify-center">
                  
                    <div className="flex justify-center items-center py-4 gap-4 flex-wrap">
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location2.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location2.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location2.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location2.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    < Image className="cursor-pointer hover:scale-105 transition-all 1s duration-300"
                      src="/location1.png"
                      alt="Facade"
                      width={500}
                      height={500}
                    />
                    </div>
                   
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {/* <div className=" w-2/5 h-full rounded-lg flex flex-col ">
          <VisitForm />
        </div> */}
      </div>
    </div>
  );
}
