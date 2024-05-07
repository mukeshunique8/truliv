
"use client"

import Header from "../components/Header";
import Location2 from "../components/Location2";
import Amenities from '../components/Amenities'
import Quotes from '../components/Quotes'
import BottomSection from '../components/BottomSection'
import LifeAtTruliv from '../components/LifeAtTruliv'
import Footer from '../components/Footer'

export default function Home() {
  return (
 
      <div className="w-full  flex flex-col justify-center items-center">
        <Header />
        <Location2 />
        <Amenities />
         <Quotes />
        <BottomSection/>
        <LifeAtTruliv />
        <Footer logo='/trulivlogoblack.svg' bgstyle='bg-white'/>
      </div>
  
  );
}
