"use client";





// import React, { useState } from "react";
// import Image from "next/image";

// export default function HouseCard(props) {
//   const [showDescription, setShowDescription] = useState(false);
//   const [largeImage, setLargeImage] = useState(false); // State to track image size

//   // Function to handle house card click
//   function handleHouse(type) {
//     props.handleHouse(type); // Call the parent component's handleHouse function
//   }

//   // Function to toggle image size
//   function toggleImageSize() {
//     setLargeImage((prev) => !prev);
//   }

//   return (
//     <div
//       className="relative cursor-pointer border-none"
//       onMouseEnter={() => setShowDescription(true)}
//       onMouseLeave={() => setShowDescription(false)}
//       onClick={() => {
//         handleHouse(props.houseType);
//         toggleImageSize(); // Toggle image size when clicked
//       }}
//     >
//       <div className={`relative   cursor-pointer border-none ${largeImage ? 'w-[543px] h-[324px]' : 'w-[543px] h-[324px]'}`}>
//         <Image
//           className={`filter cursor-pointer ${showDescription ? 'houseHover' : 'brightness-75'}`}
//           src={props.urlImage}
//           alt={props.alt}
//           width={543 }
//           height={largeImage ? 324 : 200}
//         />
//       </div>

//       <div className="absolute cursor-pointer bottom-16 px-4 left-10">
//         <p className={`text-[#FFFFFF] cursor-pointer text-4xl leading-[54px] font-bold ${showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[80px]'} transition-all duration-700 ease-in-out`}>
//           {props.houseType}
//         </p>
//         {showDescription && (
//           <p className="text-[#FFFFFF] mt-4 text-lg cursor-pointer font-normal">{props.desc}</p>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import Image from "next/image";


export default function HouseCard(props) {
  const [showDescription, setShowDescription] = useState(false);
  const [largeImage, setLargeImage] = useState(false); // State to track image size

  // Function to handle house card click
  function handleHouse(type) {
    props.handleHouse(type); // Call the parent component's handleHouse function
    setShowDescription(true); // Set showDescription to true when a card is clicked
  }

  // Function to toggle image size
  function toggleImageSize() {
    setLargeImage((prev) => !prev);
  }

  return (
    <div
      className="relative cursor-pointer border-none"
      onMouseEnter={() => setShowDescription(true)} // Set showDescription to true on mouse enter
      onMouseLeave={() => setShowDescription(false)} // Set showDescription to false on mouse leave
      onClick={() => {
        handleHouse(props.houseType);
        toggleImageSize(); // Toggle image size when clicked
      }}
    >
      <div className={`relative cursor-pointer border-none ${largeImage ? 'w-[543px] h-[324px]' : 'w-[543px] h-[324px]'}`}>
        <Image
          className={`filter cursor-pointer ${showDescription ? 'houseHover' : 'brightness-75'}`}
          src={props.urlImage}
          alt={props.alt}
          width={543 }
          height={largeImage ? 324 : 200}
        />
      </div>

      <div className="absolute cursor-pointer bottom-16 px-4 left-10">
        <p className={`text-[#FFFFFF] cursor-pointer text-4xl leading-[54px] font-bold ${showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[80px]'} transition-all duration-700 ease-in-out`}>
          {props.houseType}
        </p>
        {showDescription && (
          <p className="text-[#FFFFFF] mt-4 text-lg cursor-pointer font-normal">{props.desc}</p>
        )}
      </div>
    </div>
  );
}
