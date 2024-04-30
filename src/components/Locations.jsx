import React, { useContext } from "react";
import AreaCards from "../components/AreaCards";
import AreaPhotos from "../components/AreaPhotos";
import FeatureList from "../components/FeatureList";
import Navbar2 from "../app/colivingHomeComponents/Navbar2";
import { HouseContext } from "../Contexts/HouseContext";
import Image from "next/image";

export default function Locations() {
   // Consume the HouseContext
   const { houseType } = useContext(HouseContext);
   
  return (
    <div className={`${houseType?"relative bg-sbg pt-[300px] md:pt-0  mb-[500px]  justify-center items-center  w-full flex flex-col":"relative bg-sbg   mb-[500px]  justify-center items-center  w-full flex flex-col"}`}>
      
      {/* Location Font */}

      <div className="w-full  bg-sbg  flex flex-col justify-center items-center ">
        {/* Conditional rendering based on houseType */}
        {houseType === "Co-Living Spaces" && (
          <h2 className="text-[#000000] bg-[#FFF3EE]  w-full    pt-[77px] md:pt-[377px]   text-center font-medium  text-[16px]  md:text-5xl  leading-[20px] md:leading-[72px]">
            We are available in many <br /> places in{" "}
            <span className="border-b-2  border-[#E95F29]">Chennai</span>{" "}
          </h2>
        )}
        {houseType === "Holiday Homes" && (
         <h2 className="text-[#000000] bg-[#FFF3EE]  w-full    pt-[77px] md:pt-[377px]   text-center font-medium  text-[16px]  md:text-5xl  leading-[20px] md:leading-[72px]">
       With 6 locations in <span className="border-b-2  border-[#E95F29]">India,</span> 
       <br />we’re always set to host you.  
       </h2>
        )}
        {/* Default rendering if houseType is neither "Coliving" nor "Home" */}
        {!(houseType === "Co-Living Spaces" || houseType === "Holiday Homes") && (
        <h2 className="text-[#000000] bg-[#FFF3EE]  w-full    pt-[77px] md:pt-[377px]   text-center font-medium  text-[16px]  md:text-5xl  leading-[20px] md:leading-[72px]">
        We are available in many <br /> places in{" "}
        <span className="border-b-2  border-[#E95F29]">Chennai</span>{" "}
      </h2>
        )}
      </div>

      {/* Location Cards */}
      
      
      {/*Location Cards Conditional rendering based on houseType */}
      {houseType === "Co-Living Spaces" && (
       <div className="relative w-full max-w-[1440px] pb-5 md:pb-[175px] bg-sbg z-40 rounded-b-[75px]  md:rounded-b-[25%] pt-[54px] md:px-[44px] gap-y-4 md:gap-y-[33px]  flex-wrap md:flex-nowrap flex  gap-x-3 justify-center md:justify-evenly   ">

        <AreaCards
        simgw="56"
        simgh="110"
            imgw="79"
            imgh="154"
            area="OMR"
            desc="As historic as"
            areaUrl="/OMR.svg"
            areaAlt="OMR"
          />
          <AreaCards
          simgw="56"
          simgh="110"
            imgw="104"
            imgh="147"
            area="Shenoy Nagar"
            desc="As traditional as"
            areaUrl="/Shenoy Nagar.svg"
            areaAlt="Shenoy Nagar"
          />
          <AreaCards
          simgw="56"
          simgh="110"
            imgw="115"
            imgh="155"
            area="Anna Nagar"
            desc="As cultural as"
            areaUrl="/Anna Nagar.svg"
            areaAlt="Anna Nagar"
          />
          <AreaCards
          simgw="56"
          simgh="110"
            imgw="73"
            imgh="147"
            area="Porur"
            desc="As historic as"
            areaUrl="/Porur.svg"
            areaAlt="Porur"
          />
          <AreaCards
          simgw="56"
          simgh="110"
            imgw="131"
            imgh="117"
            area="Nungambakkam"
            desc="As traditional as"
            areaUrl="/Nungambakkam.svg"
            areaAlt="Nungambakkam"
          />
          <AreaCards
          simgw="56"
          simgh="110"
            imgw="127"
            imgh="155"
            area="Adayar"
            desc="As cultural as"
            areaUrl="/Adayar.svg"
            areaAlt="Adayar"
          />
          <AreaCards
          simgw="56"
          simgh="110"
            imgw="110"
            imgh="147"
            area="T. Nagar"
            desc="As traditional as"
            areaUrl="/T. Nagar.svg"
            areaAlt="T. Nagar"
          />
          
  
        </div>
        
        )}
        {houseType === "Holiday Homes" && (
    <div className="relative w-full max-w-[1440px] pb-5 md:pb-[175px] bg-sbg z-40 rounded-b-[75px]  md:rounded-b-[25%] pt-[54px] md:px-[44px] gap-y-4 md:gap-y-[33px]  flex-wrap md:flex-nowrap flex  gap-x-3 justify-center md:justify-evenly   ">

       <AreaPhotos urlImage='/location1.png' altimg='location1'  />
       <AreaPhotos urlImage='/location2.png' altimg='location2'  />
       <AreaPhotos urlImage='/location3.png' altimg='location3'  />
       <AreaPhotos urlImage='/location4.png' altimg='location4'  />
       <AreaPhotos urlImage='/location5.png' altimg='location5'  />
       <AreaPhotos urlImage='/location6.png' altimg='location6'  />
         
 
       </div>
       

        )}
        {/* Default rendering if houseType is neither "Coliving" nor "Home" */}
        {!(houseType === "Co-Living Spaces" || houseType === "Holiday Homes") && (

<div className="relative w-full max-w-[1440px] pb-5 md:pb-[175px] bg-sbg z-40 rounded-b-[75px]  md:rounded-b-[25%] pt-[54px] md:px-[44px] gap-y-4 md:gap-y-[33px]  flex-wrap md:flex-nowrap flex  gap-x-3 justify-center md:justify-evenly   ">

<AreaCards
simgw="56"
simgh="110"
    imgw="79"
    imgh="154"
    area="OMR"
    desc="As historic as"
    areaUrl="/OMR.svg"
    areaAlt="OMR"
  />
  <AreaCards
  simgw="56"
  simgh="110"
    imgw="104"
    imgh="147"
    area="Shenoy Nagar"
    desc="As traditional as"
    areaUrl="/Shenoy Nagar.svg"
    areaAlt="Shenoy Nagar"
  />
  <AreaCards
  simgw="56"
  simgh="110"
    imgw="115"
    imgh="155"
    area="Anna Nagar"
    desc="As cultural as"
    areaUrl="/Anna Nagar.svg"
    areaAlt="Anna Nagar"
  />
  <AreaCards
  simgw="56"
  simgh="110"
    imgw="73"
    imgh="147"
    area="Porur"
    desc="As historic as"
    areaUrl="/Porur.svg"
    areaAlt="Porur"
  />
  <AreaCards
  simgw="56"
  simgh="110"
    imgw="131"
    imgh="117"
    area="Nungambakkam"
    desc="As traditional as"
    areaUrl="/Nungambakkam.svg"
    areaAlt="Nungambakkam"
  />
  <AreaCards
  simgw="56"
  simgh="110"
    imgw="127"
    imgh="155"
    area="Adayar"
    desc="As cultural as"
    areaUrl="/Adayar.svg"
    areaAlt="Adayar"
  />
  <AreaCards
  simgw="56"
  simgh="110"
    imgw="110"
    imgh="147"
    area="T. Nagar"
    desc="As traditional as"
    areaUrl="/T. Nagar.svg"
    areaAlt="T. Nagar"
  />
  

</div>

       
        )}
      
       
    

     {/* <div className="absolute top-[880px]"> */}

     <div className={`${houseType === "Holiday Homes" ?"absolute w-full md:top-[1080px]" :"absolute  w-full top-[880px]"}`}>

      <FeatureList/>
     </div>
      
    </div>
  );
}
