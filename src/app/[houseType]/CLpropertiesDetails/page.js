"use client";

import React, { useState, useContext } from "react";

import Navbar2 from "../../colivingHomeComponents/Navbar2";
import Footer from "../../../components/Footer";
import BottomBar from "../CLpropertiesDetails/CLDetailsComponents/BottomBar";
// import Footer2 from '../colivingHomeComponents/Footer2'
import PDHero from "./CLDetailsComponents/PDHero";
import MiddleSection from "./CLDetailsComponents/MiddleSection";
import NearbyProperties from "./CLDetailsComponents/NearbyProperties";

export default function page() {
  return (
    <div className="mx-auto relative  w-full  flex flex-col justify-center items-center">
      <Navbar2 />
      
      <PDHero />
      <MiddleSection />
      <NearbyProperties />

      {/* <Footer2/> */}
     <Footer
        textstyle="text-white"
        logo="/Trulivlogo.svg"
        bgstyle="bg-black md:pt-0 pt-10 text-white "
      /> 
      
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-10">
        <BottomBar/>
      </div>

    </div>
  );
}
