import React from 'react'
import Btn1 from "./Btn1";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="relative w-[1440px] h-[461px] flex justify-center items-start" >
         {/* Left side NAV */}
         <div className="w-1/2 pl-[60px] z-30 space-x-[80px] flex justify-center items-center">
          <div className="w-1/3 flex justify-center items-center text-center mt-[41px]">
            <Image
              className="cursor-pointer"
              src="/Trulivlogo.svg"
              alt="NavLogo"
              width={150}
              height={28}
            />
          </div>
          <div className="w-2/3 text-base z-30 text-[#FFFFFF] mt-[42px]">
            <ul className="flex space-x-[55px] items-center text-center">
              <a className="flex text-center justify-center" href="">
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
              <a href="">About Us</a>
              <a href="">Blog</a>
            </ul>
          </div>
        </div>

        {/* right side NAV */}
        <div className="w-1/2 z-30 pr-[60px] flex justify-end items-center">
          <ul className="flex space-x-[40px]">
            <a className="mt-[46px] text-base text-[#FFFFFF]" href="">
              Login
            </a>
            <a className="mt-[30px] " href="">
              <Btn1 />
            </a>
          </ul>
        </div>
    </div>
  )
}
