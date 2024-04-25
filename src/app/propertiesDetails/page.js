"use client"
import React, { useState, useContext } from "react";

import Navbar2 from '../colivingHomeComponents/Navbar2'
import Footer2 from '../colivingHomeComponents/Footer2'

import { FilterProvider } from "../../Contexts/FilterContext";

export default function page() {
 
  return (
    // <FilterProvider>
      <div className="mx-auto bg-red-900  w-full  flex flex-col justify-center items-center">

      <Navbar2/>
      <Footer2/>
      
      </div>
      // </FilterProvider>
      
    
  )
}
