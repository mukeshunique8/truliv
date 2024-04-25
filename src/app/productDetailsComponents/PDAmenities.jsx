import React from "react";

export default function PDAmenities() {
  return (
    <div className="flex flex-col w-[800px] gap-y-2 py-[50px] border-b-[1px] border-[#E0E0E0] mt-6">
      <h2 className="font-medium text-2xl leading-8 text-ptxt">Amenities</h2>
      <div className="text-[14px] grid grid-cols-3 mt-4 gap-6 ">

        <p>Dishwasher</p>
        <p>Washer</p>
        <p>TV</p>
        <p>High speed internet</p>
        <p>Fireplace</p>
        <p>Wheelchair access</p>
        <p>No pets</p>
        <p>No smoking</p>

      </div>

      <p className=" mt-4 font-medium text-base  text-ptxt">Show more {"->"}</p>


    </div>
  );
}
