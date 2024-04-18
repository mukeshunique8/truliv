import Image from "next/image";
import Navbar from "@/components/Navbar";
import Locations from "@/components/Locations";
import FeatureList from '../components/FeatureList'
import Amenities from '../components/Amenities'
import Quotes from '../components/Quotes'


export default function Home() {
  return (


   <div className="w-full flex flex-col justify-center items-center">
   <Navbar/>
   <Locations/>
  <FeatureList/>
  <Amenities/>
  <Quotes/>
   </div>


  );
}
