// import Image from "next/image";
// import Navbar from "@/components/Navbar";
// import Locations from "@/components/Locations";
// import FeatureList from '../components/FeatureList'
// import Amenities from '../components/Amenities'
// import Quotes from '../components/Quotes'
// import Connections from '../components/Connections'
// import HowDoes from '../components/HowDoes'
// import LifeAtTruliv from '../components/LifeAtTruliv'
// import Footer from '../components/Footer'


// export default function Home() {
//   return (


//    <div className="mx-auto w-full flex flex-col justify-center items-center">
//    <Navbar/>
//    <Locations/>
 
//   <Amenities/>
//   <Quotes/>
//   <Connections/>
//   <HowDoes/>
//   <LifeAtTruliv/>
//   <Footer/>
//    </div>


//   );
// }

"use client"

// pages/page.js
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Locations from "@/components/Locations";
import Amenities from '../components/Amenities'
import Quotes from '../components/Quotes'
import BottomSection from '../components/BottomSection'
import LifeAtTruliv from '../components/LifeAtTruliv'
import Footer from '../components/Footer'
import { HouseProvider } from "../contexts/HouseContext";

export default function Home() {
  return (
    <HouseProvider> {/* Wrap your content with the HouseProvider */}
      <div className="mx-auto w-full flex flex-col justify-center items-center">
        <Navbar />
        <Locations />
        <Amenities />
        <Quotes />
        <BottomSection/>
        <LifeAtTruliv />
        <Footer />
      </div>
    </HouseProvider>
  );
}
