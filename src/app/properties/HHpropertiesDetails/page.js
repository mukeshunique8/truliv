"use client"


import React, { useState, useContext } from "react";

import Navbar2 from '../../colivingHomeComponents/Navbar2'
import Footer from '../../../components/Footer'
import PDHero from '../HHpropertiesDetails/HHDetailsComponents/PDHero'
import MiddleSection from '../HHpropertiesDetails/HHDetailsComponents/MiddleSection'
import NearbyProperties from '../HHpropertiesDetails/HHDetailsComponents/NearbyProperties'
import BottomBar from "../HHpropertiesDetails/HHDetailsComponents/BottomBar";

export default function page() {
 
  return (
   
      <div className="mx-auto relative  w-full  flex flex-col justify-center items-center">

      <Navbar2/>
      <PDHero/>
      <MiddleSection/>
      <NearbyProperties/>
      <Footer textstyle='text-white' logo='/Trulivlogo.svg' bgstyle='bg-black text-white md:pt-0 pt-10 '/>
      
      <div className="w-full flex md:hidden fixed bottom-0">
      <BottomBar/>
      </div>
      
      
      </div>

      
    
  )
}

