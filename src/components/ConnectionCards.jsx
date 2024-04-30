import React from "react";

export default function ConnectionCards(props) {
  return (
    <div className={`${props.borderstyle} md:px-[52px] flex flex-col  justify-center items-center text-center"`}>
      <p className="md:text-[48px] text-[22px] font-bold text-[#ffffffcc]">{props.p1}</p>
      <p className="md:text-[20px] text-[12px] font-medium text-wtxt">{props.p2}</p>
    </div>
  );
}
