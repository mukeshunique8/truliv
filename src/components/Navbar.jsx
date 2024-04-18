import React from "react";
import Image from "next/image";
import Btn1 from '../components/Btn1'
import HouseCard from '../components/HouseCard'

export default function Navbar() {
  return (

    <div className=" w-full flex flex-col justify-center items-center">
            
    <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 w-[1440px] h-[461px] flex  justify-center items-start  " style={{ backgroundRepeat: 'no-repeat' }}>
      <Image
        className="absolute opacity-5 z-20 top-0 left-0"
        src="/NavImage.svg"
        alt="Nav Image"
        width={1440}
        height={461}
      />

      {/* Left side NAV */}

      <div className="w-1/2 space-x-[80px] flex justify-center items-center ">
        <div className="w-1/3 flex justify-center items-center text-center  mt-[41px]">
          <Image
            className=""
            src="/Trulivlogo.svg"
            alt="NavLogo"
            width={150}
            height={28}
          />
        </div>

        <div className="w-2/3 text-base text-[#FFFFFF]  mt-[42px]">
          <ul className="flex space-x-[55px] items-center text-center">
            <a className="flex text-center justify-center" href="">Explore 
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

      <div className="w-1/2 pr-[60px]  flex justify-end items-center">

        <ul className="flex space-x-[40px]">
        <a className="mt-[46px] text-base text-[#FFFFFF]   " href="">Login</a>
        <a className=" mt-[30px] " href=""><Btn1/></a>
        
       
        </ul>
       
      </div>

        <h1 className=" centerElement w-full justify-center flex absolute font-medium text-[#FFF]  text-[68px] leading-[102px]">Think Home, Think Trul <span className="ptxt ">i</span> v</h1>


       
 {/* Card Position */}
 {/* bg-[#FFFFFF] */}
 <div className="absolute z-50  w-[80%] h-[372px] space-x-5 px-5 py-6 rounded-3xl housecardbg top-[343px] left-1/2  -translate-x-1/2 flex justify-center ">
 <HouseCard houseType='Co-Living Spaces' urlImage='/coLivingSpaces.svg' alt='coLivingSpaces' />
 <HouseCard houseType='Holiday Homes' urlImage='/holidayHomes.svg' alt='holidayHomes' />

</div>

    </div>
    </div>

  );
}

// bg-[url("../../public/NavImage.svg")] bg-cover   bg-center
