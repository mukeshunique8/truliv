import React, { useState, useContext } from "react";
import Btn1 from "../../components/Btn1";
import Image from "next/image";
import Link from "next/link"; 
import { HouseContext } from "../../Contexts/HouseContext"; // Import the HouseContext


export default function Navbar() {
   // Consume the HouseContext
   const { houseType, setHouseType, showDescription, setShowDescription } = useContext(HouseContext);
  //  console.log(houseType);

  return (
    <div className="bg-[#232323] w-[1440px] py-[18px] pl-[41px] pr-[61px]   flex items-center justify-center " >
         {/* Left side NAV */}
         <div className=" w-2/3  z-30 space-x-[80px] flex justify-between">
          <div className=" w-1/2 flex text-center ">
          <Link href="/">
            
              <Image
                className="cursor-pointer"
                src="/Trulivlogo.svg"
                alt="NavLogo"
                width={150}
                height={28}
              />
         
          </Link>
          </div>
          <div className="w-1/2 text-base flex justify-center  z-30 text-[#FFFFFF] ">
            <ul className="flex space-x-[55px]  items-center text-center">
              <a className="hover:text-ptxt  transition-all 3s cursor-pointer flex text-center justify-center" href="">
                Explore
                <span>
                  <Image
                    className=""
                    src="/keyDown.svg"
                    alt="keyDown"
                    width={26}
                    height={26}
                  />
                </span>
              </a>
              <a className="hover:text-ptxt  transition-all 3s cursor-pointer " href="">About Us</a>
              <a className="hover:text-ptxt  transition-all 3s cursor-pointer " href="">Blog</a>
            </ul>
          </div>
        </div>

        {/* right side NAV */}
        <div className="w-1/3   z-30  flex justify-end items-center">
          <ul className="flex justify-center items-center space-x-[40px]">
            <a className=" text-base text-[#FFFFFF] hover:text-ptxt  transition-all 3s cursor-pointer" href="">
              Login
            </a>
            <a className="" href="">
              <Btn1 />
            </a>
          </ul>
        </div>
        {/* <button onClick={()=> setHouseType("TESTEDDDDDD")}>check</button> */}

        {/* <p className="text-4xl text-white"> This is {houseType}</p> */}
  
  
    </div>
  )
}
