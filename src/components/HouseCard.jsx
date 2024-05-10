"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import { HouseContext } from "../providers/HouseContext";
import selectOrange from "../../public/selectOrange.svg";

export default function HouseCard(props) {
  const [showDescription, setShowDescription] = useState(false);
  const { houseType, setHouseType } = useContext(HouseContext);

  // Function to handle house card click
  function handleHouse(type) {
    props.handleHouse(type); // Call the parent component's handleHouse function
    setShowDescription(true);
    setHouseType(type);

    localStorage.setItem("houseType", type);

    // Set showDescription to true when a card is clicked
    //  console.log(houseType);
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
      className="relative w-full cursor-pointer border-none"
      onMouseEnter={handleMouseEnter} // Handle mouse enter event
      onMouseLeave={handleMouseLeave} // Handle mouse leave event
      onClick={() => {
        handleHouse(props.houseType);
        setShowDescription(false);
        // Toggle image size when clicked
      }}
    >
      <div
        className={`relative cursor-pointer md:rounded-[30px] ${
          houseType === props.houseType ? " shadow-2xl" : ""
        }`}
      >
        <div className="relative hidden md:flex">
          <Image
            className={`w-full filter cursor-pointer ${
              houseType === props.houseType ? "" : ""
            } ${showDescription ? "houseHover" : "brightness-75"}`}
            src={props.urlImage}
            alt={props.alt}
            width={543}
            height={323}
          />
          
          {houseType === props.houseType && ( // Render the gradient overlay only if houseType matches props.houseType
            <div className="absolute  rounded-[50px] md:inset-0 -inset-4 bg-gradient-to-b from-orange-500 to-zinc-900 opacity-50 md:rounded-[30px]" />
          )}
        </div>
        <div className="relative flex md:hidden">
          <Image
            className={`w-full filter cursor-pointer ${
              houseType === props.houseType ? "" : ""
            } ${showDescription ? "houseHover" : "brightness-75"}`}
            src={props.urlImage2}
            alt={props.alt}
            width={156}
            height={153}
          />
          
          {houseType === props.houseType && ( // Render the gradient overlay only if houseType matches props.houseType
            <div className="absolute  rounded-[15px] inset-0  bg-gradient-to-b border-ptxt border-[1px] from-orange-500 to-zinc-900 opacity-50 md:rounded-[30px]" />
            
          )}
        </div>
      </div>

      <div className="absolute cursor-pointer bottom-[50px] md:bottom-16 left-3 md:px-4 md:left-10">
        <p
          className={`text-[#FFFFFF] cursor-pointer text-[14px] sm:text-2xl md:text-4xl md:leading-[54px] md:font-bold ${
            showDescription
              ? "opacity-100 translate-y-0"
              : "opacity-100 translate-y-[40px]"
          } transition-all duration-700 ease-in-out`}
        >
          {props.houseType}
        </p>
        {showDescription && (
          <p className="text-[#FFFFFF] md:mt-4 md:text-lg  cursor-pointer font-normal">
            {props.desc}
          </p>
        )}
      </div>
    </div>
  );
}
