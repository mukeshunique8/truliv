"use client"
import React, { useState, useContext } from "react";
import Image from "next/image";
import { HouseContext } from "../Contexts/HouseContext";

export default function HouseCard(props) {
  const [showDescription, setShowDescription] = useState(false);
  const { houseType, setHouseType } = useContext(HouseContext);

  // Function to handle house card click
  function handleHouse(type) {
    props.handleHouse(type); // Call the parent component's handleHouse function
    setShowDescription(true); // Set showDescription to true when a card is clicked
  }

  // Function to handle mouse enter event
  function handleMouseEnter() {
    if (!showDescription && !houseType) {
      setShowDescription(true); // Show description only if it's not already shown and houseType is not true
    }
  }

  // Function to handle mouse leave event
  function handleMouseLeave() {
    setShowDescription(false); // Always hide description on mouse leave
  }

  return (
    <div
      className="relative cursor-pointer border-none"
      onMouseEnter={handleMouseEnter} // Handle mouse enter event
      onMouseLeave={handleMouseLeave} // Handle mouse leave event
      onClick={() => {
        handleHouse(props.houseType);
        setShowDescription(false);
        // Toggle image size when clicked
      }}
    >
      <div className={`relative cursor-pointer border-none`}>
        <Image
          className={`w-full filter cursor-pointer ${houseType === props.houseType ? "shadow-2xl" : ""} ${showDescription ? "houseHover" : "brightness-75"}`}
          src={props.urlImage}
          alt={props.alt}
          width={543}
          height={323}
        />
      </div>

      <div className="absolute cursor-pointer bottom-16 px-4 left-10">
        <p className={`text-[#FFFFFF] cursor-pointer text-4xl leading-[54px] font-bold ${showDescription ? "opacity-100 translate-y-0" : "opacity-100 translate-y-[40px]"} transition-all duration-700 ease-in-out`}>
          {props.houseType}
        </p>
        {showDescription && (
          <p className="text-[#FFFFFF] mt-4 text-lg cursor-pointer font-normal">{props.desc}</p>
        )}
      </div>
    </div>
  );
}
