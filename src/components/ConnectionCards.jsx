import React from "react";

export default function ConnectionCards(props) {
  return (
    <div className={`${props.borderstyle} px-[52px] flex flex-col  justify-center text-center"`}>
      <p className="text-[48px] font-bold text-[#ffffffcc]">{props.p1}</p>
      <p className="text-[20px] font-medium text-wtxt">{props.p2}</p>
    </div>
  );
}
