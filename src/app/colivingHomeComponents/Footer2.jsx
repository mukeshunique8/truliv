import React from "react";
import Image from "next/image";

// List of PG locations
const pgLocations = [
  "Greater Noida",
  "Indore",
  "Visakhapatnam",
  "Nungambakkam",
  "Delhi",
  "Pune",
  "Manipal",
  "Kota",
  "Vadapalani",
  "Bengaluru",
  "Kochi",
  "Mumbai",
  "Guindy",
  "Coimbatore",
  "Ahmedabad",
  "Gandhinagar",
  "Anna Nagar",
  "Vadodara",
  "Gurgaon",
  "Dehradun",
  "Hyderabad",
  "Vijayawada",
  "Belgaum",
  "Pallavaram",
  "Urapakkam",
];

const menuItems = [
  "About Us",
  "Blogs",
  "FAQs",
  "COVID-19",
 
  "Team",
  "Privacy Policy",
  "Refunds",
  
  "Investor Relations",
  "Refer and Earn",
  "House Rules",
  "T&C",
  "Careers",
  "Partner With Us",
  "Media",
  "Contact Us",
  "Cookie Policy"
];


const pgLocationsWithPrefix = pgLocations.map(
  (location) => `PG in ${location}`
);

export default function Footer2() {
  return (
    <div className=" bg-[#232728]   w-full flex flex-col  justify-center items-center">
      <div className="w-[1440px] bg-[#232728]  pt-[50px]flex flex-col justify-center items-center gap-y-4 px-[40px] py-[40px]   ">
        {/* Top Footer */}
        <div className=" w-full  border-b-[1px]   border-slate-400">
          <h2 className="text-wtxt font-semibold text-lg">Popular Searches</h2>

          <div
            className="pt-5  w-full pb-10"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "1rem",
            }}
          >
            {pgLocationsWithPrefix.map((location, index) => (
              <a className="hover:text-ptxt hover:scale-110 transition-all 3s cursor-pointer text-wtxt" key={index}>{location}</a>
            ))}
          </div>
        </div>

        {/* Bootom Footer */}
        <div className=" mt-8  flex justify-center items-start w-full">

          <div className="w-1/4 pt-[62px] flex items-center justify-start">
          <Image className="hover:scale-110 transition-all 3s cursor-pointer"  src="/TrulivLogo.svg"  alt="TrulivLogo" width={190}  height={35}     /> 

          </div>

          <div
            className="w-2/4   pb-10 "
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
            }}
          >
            {menuItems.map((link,index)=>{
              return               <a className="hover:text-ptxt hover:scale-110 transition-all 3s text-wtxt cursor-pointer" key={index}>{link}</a>
            })}

          </div>


              <div className="w-1/4 pt-[62px] flex px-20 justify-evenly items-center">
              <Image className="hover:scale-110 transition-all 3s cursor-pointer"  src="/facebook.svg"  alt="facebook" width={25}  height={25}     />       
               
              <Image className="hover:scale-110 transition-all 3s cursor-pointer"  src="/linkedin.svg"  alt="linkedin" width={25}  height={25}     />    
              <Image className="hover:scale-110 transition-all 3s cursor-pointer"  src="/instagram.svg"  alt="instagram" width={25}  height={25}     />        

              </div>
        

          
        </div>


              <div className="text-xs mt-10 text-slate-400 w-full  flex justify-between">
                <p>Copyright © 2022 | All Rights Reserved by Dtwelve Spaces Pvt Ltd. | Sitemap</p>
                <p>Images shown are for representational purposes only. Amenities depicted may <br /> or may not form a part of that individual property</p>

              </div>

      </div>
    </div>
  );
}

// // List of PG locations
// const pgLocations = [
//   "Greater Noida", "Indore", "Visakhapatnam", "Nungambakkam", "Delhi",
//   "Pune", "Manipal", "Kota", "Vadapalani", "Bengaluru",
//   "Kochi", "Mumbai", "Guindy", "Coimbatore", "Ahmedabad",
//   "Gandhinagar", "Anna Nagar", "Vadodara", "Gurgaon", "Dehradun",
//   "Hyderabad", "Vijayawada", "Belgaum", "Pallavaram", "Urapakkam",
//   // Additional cities
//   "New City 1", "New City 2", "New City 3",
//   "New City 1", "New City 2", "New City 3"
// ];

// // Chunk the array into 5 subarrays
// const chunkedLocations = pgLocations.reduce((resultArray, item, index) => {
//   const chunkIndex = Math.floor(index / 5);

//   if (!resultArray[chunkIndex]) {
//     resultArray[chunkIndex] = []; // start a new chunk
//   }

//   resultArray[chunkIndex].push(item);
//   return resultArray;
// }, []);

// <ul style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem" }}>
//       {chunkedLocations.map((chunk, index) => (
//         <li key={index} style={{ listStyle: "none" }}>
//           <ul>
//             {chunk.map((location, subIndex) => (
//               <li key={subIndex}>{location}</li>
//             ))}
//           </ul>
//         </li>
//       ))}
//     </ul>
