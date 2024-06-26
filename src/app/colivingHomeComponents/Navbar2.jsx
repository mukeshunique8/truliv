import React, { useState, useContext } from "react";
import Btn1 from "../../components/Btn1";
import Image from "next/image";
import Link from "next/link"; 
import { HouseContext } from "../../providers/HouseContext"; // Import the HouseContext


export default function Navbar() {
   const { houseType, setHouseType, showDescription, setShowDescription } = useContext(HouseContext);

  return (
    <div id='Photos' className="hidden md:flex bg-[#232323] w-full py-[18px] pl-[41px] pr-[61px]    items-center justify-center " >
      
      <div className="flex w-full justify-between max-w-[1440px]">
        
      
         {/* Left side NAV */}
         <div className=" w-2/3  z-30 space-x-[80px] flex justify-between">
          <div className=" w-1/2 flex text-center items-center ">
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
      
        </div>
  
    </div>
  )
}
