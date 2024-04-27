import React from "react";
import Review from "./Review";

export default function ReviewContainer() {
  return (
    <div  id="Reviews" className="flex flex-col font-medium w-[550px] gap-y-2 pt-[40px]  mt-6">
      <h2 className="font-semibold text-2xl leading-8 text-ptxt">What our guests say (Ratings & Reviews)</h2>
      
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
