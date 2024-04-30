
"use client"

import Image from "next/image";
import Header from "../components/Header";
import Locations from "../components/Locations";
import Amenities from '../components/Amenities'
import Quotes from '../components/Quotes'
import BottomSection from '../components/BottomSection'
import LifeAtTruliv from '../components/LifeAtTruliv'
import Footer from '../components/Footer'
import Navbar2 from "./colivingHomeComponents/Navbar2";

export default function Home() {
  return (
 
      <div className="mx-auto  flex flex-col justify-center items-center">
        <Header />

      
        <Locations />
        <Amenities />
         <Quotes />
        <BottomSection/>
        <LifeAtTruliv />
        <Footer logo='/trulivlogoblack.svg' bgstyle='bg-white'/>
      </div>
  
  );
}
