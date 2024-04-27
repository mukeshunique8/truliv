import React from "react";
import Image from "next/image";

export default function PDAmenities() {
  return (
    <div id="Amenities" className="flex flex-col w-[800px] gap-y-2 py-[50px] border-b-[1px] border-[#E0E0E0] mt-6">
      <h2 className="font-semibold text-2xl leading-8 text-ptxt">Amenities</h2>
      <div className="text-[14px] grid grid-cols-3 mt-4 gap-6">
  <div className="flex gap-x-2">
    <Image className="cursor-pointer" src='/dishwash.svg' alt="dishwasher" width={16} height={16} />
    <p>Dishwasher</p>
  </div>
  
  <div className="flex gap-x-2">
    <Image className="cursor-pointer" src='/washer.svg' alt="dishwasher" width={16} height={16} />
    <p>Washer</p>
    {/* Add Image tag for Washer here if needed */}
  </div>

  <div className="flex gap-x-2">
    <Image className="cursor-pointer" src='/tv.svg' alt="dishwasher" width={16} height={16} />
    <p>TV</p>
    {/* Add Image tag for TV here if needed */}
  </div>

  <div className="flex gap-x-2">
    <Image className="cursor-pointer" src='/highspeed.svg' alt="dishwasher" width={16} height={16} />
    <p>High speed internet</p>
    {/* Add Image tag for High speed internet here if needed */}
  </div>

  <div className="flex gap-x-2">
    <Image className="cursor-pointer" src='/fireplace.svg' alt="dishwasher" width={16} height={16} />
    <p>Fireplace</p>
    {/* Add Image tag for Fireplace here if needed */}
  </div>

  <div className="flex gap-x-2">
    <Image className="cursor-pointer" src='/wheelchair.svg' alt="dishwasher" width={16} height={16} />
    <p>Wheelchair access</p>
    {/* Add Image tag for Wheelchair access here if needed */}
  </div>

  <div className="flex gap-x-2">
    <Image className="cursor-pointer" src='/nopets.svg' alt="dishwasher" width={16} height={16} />
    <p>No pets</p>
    {/* Add Image tag for No pets here if needed */}
  </div>

  <div className="flex gap-x-2">
    <Image className="cursor-pointer" src='/nosmoking.svg' alt="dishwasher" width={16} height={16} />
    <p>No smoking</p>
    {/* Add Image tag for No smoking here if needed */}
  </div>
</div>

<div className="flex  mt-4 items-center gap-x-2">
<p className=" flex  font-medium text-base  text-ptxt">Show more  </p>
<Image className="cursor-pointer" src='/rightarrow2.svg' alt="dishwasher" width={16} height={16} />
</div>


      


    </div>
  );
}
