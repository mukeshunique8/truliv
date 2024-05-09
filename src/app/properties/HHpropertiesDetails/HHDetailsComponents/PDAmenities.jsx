import React from "react";
import Image from "next/image";

export default function PDAmenities() {
  const amenities = [
    { icon: "/dishwash.svg", text: "Dishwasher" },
    { icon: "/washer.svg", text: "Washer" },
    { icon: "/highspeed.svg", text: "High speed internet" },
    { icon: "/tv.svg", text: "TV" },
    { icon: "/fireplace.svg", text: "Fireplace" },
    { icon: "/wheelchair.svg", text: "Wheelchair access" },
    { icon: "/nopets.svg", text: "No pets" },
    { icon: "/nosmoking.svg", text: "No smoking" },
  ];

  return (
    <div id="Amenities" className="flex flex-col w-full md:w-[800px] gap-y-2 py-[50px] border-b-[1px] border-[#E0E0E0] md:mt-6">
      <h2 className="font-semibold text-2xl leading-8 text-ptxt">Amenities</h2>
      <div className="text-[14px]  grid md:grid-cols-3 grid-cols-2 mt-4 gap-6">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex gap-x-2">
            <Image className="cursor-pointer" src={amenity.icon} alt={amenity.text} width={16} height={16} />
            <p>{amenity.text}</p>
          </div>
        ))}
      </div>
      <div className="flex mt-4 items-center gap-x-2">
        <p className="flex font-medium cursor-pointer text-base text-ptxt">Show more  </p>
        <Image className="cursor-pointer" src='/rightarrow2.svg' alt="dishwasher" width={16} height={16} />
      </div>
    </div>
  );
}
