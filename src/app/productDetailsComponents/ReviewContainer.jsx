import React from "react";
import Review from "./Review";

export default function ReviewContainer() {
  return (
    <div className="flex flex-col font-medium w-[550px] max-h-[1100px] overflow-y-scroll gap-y-2 py-[25px] border-b-[1px] border-[#E0E0E0] mt-6">
      <h2 className="font-medium text-2xl leading-8 text-ptxt">What our guests say (Ratings & Reviews)</h2>
      
      <div className="flex flex-col ">
        <Review/>
        <Review/>
        <Review/>
        <Review/>
        <Review/>
        <Review/>
      </div>

    </div>
  );
}
