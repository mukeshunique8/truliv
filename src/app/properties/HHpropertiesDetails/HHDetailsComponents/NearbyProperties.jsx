import React from "react";
import Image from "next/image";
import NearbyPropertiesCard from "./NearbyPropertiesCard";

const properties = [
  {
    name: "Truliv DRA Olympus",
    location: "Moorthy Nagar, Porur",
    rating: "4.0",
    price: "1,999",
    badge: "Almost Full",
    style: "text-ptxt rounded-[5px] bg-[#FFF9F5] border-ptxt"
  },
 
  {
    name: "Green Valley Residency",
    location: "Green Valley, Ooty",
    rating: "4.2",
    price: "1,999",
    badge: "Limited Availability",
    style: "text-white rounded-[5px] bg-[#53BD00] border-[#06992F]"
  }
];



export default function NearbyProperties() {
  
  return (
    <div className='flex flex-col bg-wtxt md:max-w-[1440px] pb-10 items-start w-full '>
     
     <div className=" px-6 py-4 flex flex-col ">
     <h2 className="font-semibold text-[20px] md:text-2xl md:leading-10 leading-[20px] text-ptxt">Other Truliv Properties Nearby</h2>

     <div className="mt-6 justify-center gap-6 items-center flex flex-wrap md:gap-10">

      {properties.map((property, index) => (
            <NearbyPropertiesCard
              key={index}
              name={property.name}
              location={property.location}
              rating={property.rating}
              price={property.price}
              badge={property.badge}
              badgestyle={property.style}
            />
          ))}

          

   
     </div>

     </div>
     
     
    </div>
  );
}
