"use client"
import React, { useState, useContext } from "react";

import Navbar2 from '../colivingHomeComponents/Navbar2'
import Footer2 from '../colivingHomeComponents/Footer2'
import SearchField from '../colivingHomeComponents/SearchField'


export default function page() {
 
  return (
    
      <div className="mx-auto bg-blue-300 w-full  flex flex-col justify-center items-center">

      <Navbar2/>
      <SearchField/>
      <Footer2/>
      </div>
      
      
    
  )
}
