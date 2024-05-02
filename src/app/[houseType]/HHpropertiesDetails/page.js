"use client"


import React, { useState, useContext } from "react";

import Navbar2 from '../../colivingHomeComponents/Navbar2'
import Footer from '../../../components/Footer'
// import Footer2 from '../colivingHomeComponents/Footer2'
import PDHero from '../HHpropertiesDetails/HHDetailsComponents/PDHero'
import MiddleSection from '../HHpropertiesDetails/HHDetailsComponents/MiddleSection'
import NearbyProperties from '../HHpropertiesDetails/HHDetailsComponents/NearbyProperties'

export default function page() {
 
  return (
   
      <div className="mx-auto   w-full  flex flex-col justify-center items-center">

      <Navbar2/>
      <PDHero/>
      <MiddleSection/>
      <NearbyProperties/>

      
      <Footer textstyle='text-white' logo='/Trulivlogo.svg' bgstyle='bg-black text-white '/>
      
      </div>

      
    
  )
}
