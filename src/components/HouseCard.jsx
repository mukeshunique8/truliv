import React from 'react';
import Image from "next/image";

export default function HouseCard(props) {
  return (
    <div className="relative border-none">
      <div className="relative border-none housecardbg1 ">
        <Image
          src={props.urlImage}
          alt={props.alt}
          width={543}
          height={324}
        />
      </div>
      <p className='absolute bottom-8 left-10 text-[#FFFFFF] text-4xl leading-[54px] font-bold'>{props.houseType}</p>
    </div>
  );
}
