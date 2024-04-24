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
    <div className="relative  mb-[500px]  w-full flex flex-col justify-center items-center">
      
      {/* Location Font */}

      <div className="w-[1440px]   flex flex-col justify-center items-center ">
        {/* Conditional rendering based on houseType */}
        {houseType === "Co-Living Spaces" && (
          <h2 className="text-[#000000] bg-[#FFF3EE]  w-full pt-[377px] text-center font-medium text-5xl leading-[72px]">
            We are available in many <br /> places in{" "}
            <span className="border-b-2  border-[#E95F29]">Chennai</span>{" "}
          </h2>
        )}
        {houseType === "Holiday Homes" && (
         <h2 className="text-[#000000] bg-[#FFF3EE]  w-full pt-[377px] text-center font-medium text-5xl leading-[72px]">
       With 6 locations in <span className="border-b-2  border-[#E95F29]">India,</span> 
       <br />we’re always set to host you.  
       </h2>
        )}
        {/* Default rendering if houseType is neither "Coliving" nor "Home" */}
        {!(houseType === "Co-Living Spaces" || houseType === "Holiday Homes") && (
        <h2 className="text-[#000000] bg-[#FFF3EE]  w-full pt-[377px] text-center font-medium text-5xl leading-[72px]">
        We are available in many <br /> places in{" "}
        <span className="border-b-2  border-[#E95F29]">Chennai</span>{" "}
      </h2>
        )}
      </div>

      {/* Location Cards */}
      <Navbar2></Navbar2>
      
      {/*Location Cards Conditional rendering based on houseType */}
      {houseType === "Co-Living Spaces" && (
        <div className="relative w-[1440px] pb-[175px] bg-sbg z-40 rounded-b-[25%]  pt-[54px] px-[44px] gap-y-[33px]  flex-wrap flex  justify-evenly   ">

        <AreaCards
            imgw="79"
            imgh="154"
            area="OMR"
            desc="As historic as"
            areaUrl="/OMR.svg"
            areaAlt="OMR"
          />
          <AreaCards
            imgw="104"
            imgh="147"
            area="Shenoy Nagar"
            desc="As traditional as"
            areaUrl="/Shenoy Nagar.svg"
            areaAlt="Shenoy Nagar"
          />
          <AreaCards
            imgw="115"
            imgh="155"
            area="Anna Nagar"
            desc="As cultural as"
            areaUrl="/Anna Nagar.svg"
            areaAlt="Anna Nagar"
          />
          <AreaCards
            imgw="73"
            imgh="147"
            area="Porur"
            desc="As historic as"
            areaUrl="/Porur.svg"
            areaAlt="Porur"
          />
          <AreaCards
            imgw="131"
            imgh="117"
            area="Nungambakkam"
            desc="As traditional as"
            areaUrl="/Nungambakkam.svg"
            areaAlt="Nungambakkam"
          />
          <AreaCards
            imgw="127"
            imgh="155"
            area="Adayar"
            desc="As cultural as"
            areaUrl="/Adayar.svg"
            areaAlt="Adayar"
          />
          <AreaCards
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
       <div className="relative w-[1440px] bg-sbg  pb-[175px] z-40 rounded-b-[25%]  pt-[54px] px-[44px] gap-y-[20px]   flex-wrap flex  justify-evenly  bg-yellow-300-400  ">

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

<div className="relative w-[1440px] pb-[175px] bg-sbg z-40 rounded-b-[25%]  pt-[54px] px-[44px] gap-y-[33px]  flex-wrap flex  justify-evenly  bg-yellow-300-400  ">

<AreaCards
    imgw="79"
    imgh="154"
    area="OMR"
    desc="As historic as"
    areaUrl="/OMR.svg"
    areaAlt="OMR"
  />
  <AreaCards
    imgw="104"
    imgh="147"
    area="Shenoy Nagar"
    desc="As traditional as"
    areaUrl="/Shenoy Nagar.svg"
    areaAlt="Shenoy Nagar"
  />
  <AreaCards
    imgw="115"
    imgh="155"
    area="Anna Nagar"
    desc="As cultural as"
    areaUrl="/Anna Nagar.svg"
    areaAlt="Anna Nagar"
  />
  <AreaCards
    imgw="73"
    imgh="147"
    area="Porur"
    desc="As historic as"
    areaUrl="/Porur.svg"
    areaAlt="Porur"
  />
  <AreaCards
    imgw="131"
    imgh="117"
    area="Nungambakkam"
    desc="As traditional as"
    areaUrl="/Nungambakkam.svg"
    areaAlt="Nungambakkam"
  />
  <AreaCards
    imgw="127"
    imgh="155"
    area="Adayar"
    desc="As cultural as"
    areaUrl="/Adayar.svg"
    areaAlt="Adayar"
  />
  <AreaCards
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

     <div className={`${houseType === "Holiday Homes" ?"absolute top-[1080px]" :"absolute top-[880px]"}`}>

      <FeatureList/>
     </div>
      
    </div>
  );
}
