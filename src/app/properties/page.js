"use client"



import React, { useState, useContext } from "react";

import Navbar2 from '../colivingHomeComponents/Navbar2'
import Footer from '../../components/Footer'
import SearchField from '../colivingHomeComponents/SearchField'


export default function page() {
 
  return (
    
      <div className=" bg-wtxt  w-full  flex flex-col justify-center items-center">

      <Navbar2/>
      <SearchField/>
      
      <Footer textstyle='text-white' logo='/Trulivlogo.svg' bgstyle='pt-8 bg-black text-white '/>
      </div>
     
      
    
  )
}
