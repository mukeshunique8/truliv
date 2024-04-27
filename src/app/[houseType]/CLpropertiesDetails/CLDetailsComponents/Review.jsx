import React from "react";
import Image from "next/image";

export default function LifeTruliv() {
  return (
    <div  className="flex flex-col  gap-y-[16px] py-[50px] border-b-[1px] border-[#E0E0E0] ">
      <div className="flex justify-start gap-x-4">
        <Image
          className=""
          src="/reviewprofile.png"
          alt="reviewprofile"
          width={48}
          height={48}
        />
        <div className="flex flex-col">
          <div className="flex gap-x-2">
            <p className="text-[#171717] font-bold leading-5 text-[14px]">
              Max Joseph D.
            </p>
            <Image
              className=""
              src="/star.svg"
              alt="star"
              width={20}
              height={20}
            />
            <p className="text-[#525252] font-bold leading-5 text-[14px]">
              3.9
            </p>
          </div>
          <p className="text-[#737373] leading-5 text-[14px] ">Jun 2023</p>
        </div>
      </div>
      <div>
        <p className="text-[#525252] w-[480px] italic leading-6 text-[16px]">
          Great coliving with big and comfortable rooms, a spacious and
          well-equipped coworking space, and a gym with everything I needed. The
          team is very friendly. I had a great....
        </p>
      </div>
    </div>
  );
}
