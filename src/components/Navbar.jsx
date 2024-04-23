// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Btn1 from "../components/Btn1";
// import HouseCard from "../components/HouseCard";
// import BookingCoLiving from "./BookingCoLiving";
// import BookingHolidayHomes from "./BookingHolidayHomes";



// export default function Navbar() {
//   const [houseType, setHouseType] = useState(""); // State to track houseType

//   const [showDescription, setShowDescription] = useState(false);


//   // Function to handle house card click
//   function handleHouse(type) {
//     setHouseType(type);
//   }
  

//   return (
//     <div className="w-full flex flex-col justify-center items-center">
//       <div
//         className="relative w-[1440px] h-[461px] flex justify-center items-start"
//         style={{
//           background:
//             "linear-gradient(180deg, #000 -4.84%, rgba(33, 33, 33, 0.00) 136.18%)",
//         }}
//       >
//         <Image
//           className="absolute cursor-pointer -z-10 top-0 left-0"
//           src="/NavImage.svg"
//           alt="Nav Image"
//           width={1440}
//           height={461}
//         />

//         {/* Left side NAV */}
//         <div className="w-1/2 pl-[60px] z-30 space-x-[80px] flex justify-center items-center">
//           <div className="w-1/3 flex justify-center items-center text-center mt-[41px]">
//             <Image
//               className="cursor-pointer"
//               src="/Trulivlogo.svg"
//               alt="NavLogo"
//               width={150}
//               height={28}
//             />
//           </div>
//           <div className="w-2/3 text-base z-30 text-[#FFFFFF] mt-[42px]">
//             <ul className="flex space-x-[55px] items-center text-center">
//               <a className="flex text-center justify-center" href="">
//                 Explore
//                 <span>
//                   <Image
//                     className=""
//                     src="/keyDown.svg"
//                     alt="keyDown"
//                     width={26}
//                     height={26}
//                   />
//                 </span>
//               </a>
//               <a href="">About Us</a>
//               <a href="">Blog</a>
//             </ul>
//           </div>
//         </div>

//         {/* right side NAV */}
//         <div className="w-1/2 z-30 pr-[60px] flex justify-end items-center">
//           <ul className="flex space-x-[40px]">
//             <a className="mt-[46px] text-base text-[#FFFFFF]" href="">
//               Login
//             </a>
//             <a className="mt-[30px] " href="">
//               <Btn1 />
//             </a>
//           </ul>
//         </div>

//         {/* <h1 className="centerElement z-30 w-full justify-center flex absolute font-medium text-[#FFF] text-[68px] leading-[102px]">
          
//           Think Home, Think Trul <span className="ptxt">i</span> v
//         </h1> */}



// {houseType === "Co-Living Spaces" && (
//         <h1 className="centerElement z-30 w-full justify-center flex absolute font-medium text-[#FFF] text-[68px] leading-[102px]">
        
//          Live the Life at Trul<span className="ptxt">i</span> v
//       </h1>
//       )}

//       {houseType === "Holiday Homes" && (
//         <h1 className="centerElement z-30 w-full justify-center flex absolute font-medium text-[#FFF] text-[68px] leading-[102px]">
//           Best Holiday Homes in India
//         </h1>
//       )}

//       {houseType !== "Co-Living Spaces" && houseType !== "Holiday Homes" && (
//         <h1 className="centerElement z-30 w-full justify-center flex absolute font-medium text-[#FFF] text-[68px] leading-[102px]">
          
//         Think Home, Think Trul <span className="ptxt">i</span> v
//       </h1>
//       )}






//         {/* Card Position */}
//         <div className="absolute z-10 w-[80%]  flex-col rounded-3xl housecardbg top-[343px] left-1/2 -translate-x-1/2 flex justify-center items-center ">
//           <div className=" flex space-x-5 px-5 py-6 ">
//             <HouseCard
//               desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim molestiae sequi consectetur illo earum quis consequuntur tenetur, ratione laboriosam architecto quas beatae eaque at!"
//               houseType="Co-Living Spaces"
//               urlImage="/coLivingSpaces.svg"
//               alt="coLivingSpaces"
//               handleHouse={handleHouse} // Pass down the handleHouse function
//             />
//             <HouseCard
//               desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim molestiae sequi consectetur illo earum quis consequuntur tenetur, ratione laboriosam architecto quas beatae eaque at!"
//               houseType="Holiday Homes"
//               urlImage="/holidayHomes.svg"
//               alt="holidayHomes"
//               handleHouse={handleHouse} // Pass down the handleHouse function
//             />
//           </div>

//           <div
//            onMouseEnter={() => setShowDescription(false)}
//            onMouseLeave={() => setShowDescription(false)}
//           className="px-5 w-full flex flex-col justify-center items-center">
            
//             {houseType === 'Co-Living Spaces' &&<BookingCoLiving/>}
//             {houseType === 'Holiday Homes' &&<BookingHolidayHomes/>}


//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useContext } from "react";
import Image from "next/image";
import Btn1 from "../components/Btn1";
import HouseCard from "../components/HouseCard";
import BookingCoLiving from "./BookingCoLiving";
import BookingHolidayHomes from "./BookingHolidayHomes";
import { HouseContext } from "../contexts/HouseContext"; // Import the HouseContext

export default function Navbar() {
  // Consume the HouseContext
  const { houseType, setHouseType, showDescription, setShowDescription } = useContext(HouseContext);

  // Function to handle house card click
  function handleHouse(type) {
    setHouseType(type); // Set the houseType state in the context
    setShowDescription(true); // Set the showDescription state to true
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="relative w-[1440px] h-[461px] flex justify-center items-start"
        style={{
          background:
            "linear-gradient(180deg, #000 -4.84%, rgba(33, 33, 33, 0.00) 136.18%)",
        }}
      >
        <Image
          className="absolute cursor-pointer -z-10 top-0 left-0"
          src="/NavImage.svg"
          alt="Nav Image"
          width={1440}
          height={461}
        />

        {/* Left side NAV */}
        <div className="w-1/2 pl-[60px] z-30 space-x-[80px] flex justify-center items-center">
          <div className="w-1/3 flex justify-center items-center text-center mt-[41px]">
            <Image
              className="cursor-pointer"
              src="/Trulivlogo.svg"
              alt="NavLogo"
              width={150}
              height={28}
            />
          </div>
          <div className="w-2/3 text-base z-30 text-[#FFFFFF] mt-[42px]">
            <ul className="flex space-x-[55px] items-center text-center">
              <a className="flex text-center justify-center" href="">
                Explore
                <span>
                  <Image
                    className=""
                    src="/keyDown.svg"
                    alt="keyDown"
                    width={26}
                    height={26}
                  />
                </span>
              </a>
              <a href="">About Us</a>
              <a href="">Blog</a>
            </ul>
          </div>
        </div>

        {/* right side NAV */}
        <div className="w-1/2 z-30 pr-[60px] flex justify-end items-center">
          <ul className="flex space-x-[40px]">
            <a className="mt-[46px] text-base text-[#FFFFFF]" href="">
              Login
            </a>
            <a className="mt-[30px] " href="">
              <Btn1 />
            </a>
          </ul>
        </div>

        {/* Conditional rendering based on houseType */}
        {houseType === "Co-Living Spaces" && (
          <h1 className="centerElement z-30 w-full justify-center flex absolute font-medium text-[#FFF] text-[68px] leading-[102px]">
            Live the Life at Trul<span className="ptxt">i</span> v
          </h1>
        )}

        {houseType === "Holiday Homes" && (
          <h1 className="centerElement z-30 w-full justify-center flex absolute font-medium text-[#FFF] text-[68px] leading-[102px]">
            Best Holiday Homes in India
          </h1>
        )}

        {houseType !== "Co-Living Spaces" && houseType !== "Holiday Homes" && (
          <h1 className="centerElement z-30 w-full justify-center flex absolute font-medium text-[#FFF] text-[68px] leading-[102px]">
            Think Home, Think Trul <span className="ptxt">i</span> v
          </h1>
        )}

        
        {/* Card Position */}
        <div className="absolute z-10 w-[80%]  flex-col rounded-3xl housecardbg top-[343px] left-1/2 -translate-x-1/2 flex justify-center items-center ">
          <div className=" flex space-x-5 px-5 py-6 ">
            <HouseCard
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim molestiae sequi consectetur illo earum quis consequuntur tenetur, ratione laboriosam architecto quas beatae eaque at!"
              houseType="Co-Living Spaces"
              urlImage="/coLivingSpaces.svg"
              alt="coLivingSpaces"
              handleHouse={handleHouse} // Pass down the handleHouse function
            />
            <HouseCard
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim molestiae sequi consectetur illo earum quis consequuntur tenetur, ratione laboriosam architecto quas beatae eaque at!"
              houseType="Holiday Homes"
              urlImage="/holidayHomes.svg"
              alt="holidayHomes"
              handleHouse={handleHouse} // Pass down the handleHouse function
            />
          </div>

          {/* Conditional rendering of booking component */}
          <div
            onMouseEnter={() => setShowDescription(true)}
            onMouseLeave={() => setShowDescription(false)}
            className="px-5 w-full flex flex-col justify-center items-center"
          >
            {showDescription && (
              <>
                {houseType === 'Co-Living Spaces' && <BookingCoLiving />}
                {houseType === 'Holiday Homes' && <BookingHolidayHomes />}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}