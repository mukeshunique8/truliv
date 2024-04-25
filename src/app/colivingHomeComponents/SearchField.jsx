import React, { useState, useContext, useEffect } from "react";
import SearchBtn from "../colivingHomeComponents/SearchBtn";
import { HouseContext } from "../../Contexts/HouseContext";
import { useFilterContext } from "../../Contexts/FilterContext"; // Import the FilterContext
import HotelBanner from "../../components/HotelBanner";
import OccupancyCard from "./UIElements/OccupancyCard";
import GenderRadio from "./UIElements/GenderRadio";
import Amenities from "./UIElements/Amenities";
import Services from "./UIElements/Services";
import { useRouter } from "next/navigation";
import { HOUSETYPE_DETAIL_ROUTE } from "../../routes/url"

import PriceRange from "./UIElements/PriceRange";

import { Select } from "@chakra-ui/react";
import Image from "next/image";
import { CloseButton } from "@chakra-ui/react";
 
// Sample suggestions for different cities
const citySuggestions = {
  Chennai: [
    "OMR",
    "Shenoy Nagar",
    "Anna Nagar",
    "Porur",
    "Nungambakkam",
    "Adayar",
    "T. Nagar",
  ],
  Bangalore: [
    "HSR Layout",
    "Koramangala",
    "Indiranagar",
    "Jayanagar",
    "Whitefield",
    "Malleswaram",
    "Basavanagudi",
  ],
  Mumbai: ["Andheri", "Bandra", "Powai", "Colaba", "Dadar", "Juhu", "Thane"],
  Delhi: [
    "Connaught Place",
    "Dwarka",
    "Vasant Kunj",
    "Rohini",
    "Saket",
    "Nehru Place",
    "Karol Bagh",
  ],
};


export default function SearchField() {
  const router = useRouter()
  // function routeProperty(){
  
  //   router.push(HOUSETYPE_DETAIL_ROUTE("coliving/properties")); 
  
  // }
  const { houseType, setHouseType } = useContext(HouseContext);
  const { gender, setGender, occupancy, setOccupancy, amenities, setAmenities, services, setServices, priceRange, setPriceRange,houseTypeFiltered,setHouseTypeFiltered } = useFilterContext(); // Destructure the filter context values
  // console.log("houseTypeFiltered:", houseTypeFiltered);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  // useEffect(() => {
  //   console.log("Gender:", gender);
    console.log("Occupancy:", occupancy);
  //   console.log("Amenities:", amenities);
  //   console.log("Services:", services);
  //   console.log("Price Range:", priceRange);
  //   console.log("houseTypeFiltered:", houseTypeFiltered);
  // }, [gender, occupancy, amenities, services, priceRange]);

  useEffect(() => {
    // Retrieve house type from local storage when component mounts
    const storedHouseType = localStorage.getItem("houseType");
    if (storedHouseType) {
      setHouseType(storedHouseType);
      setHouseTypeFiltered(storedHouseType); // Set houseTypeFiltered with the stored value
    }
  }, []);
  
  console.log("houseTypeFiltered:", houseTypeFiltered);
  console.log("Gender:", gender);
  console.log("selectedLocations:", selectedLocations);
  console.log("Occupancy:", occupancy);
  console.log("Amenities:", amenities);
  console.log("Services:", services);
  console.log("Price Range:", priceRange);
  console.log("houseTypeFiltered:", houseTypeFiltered);

  // useEffect(() => {
  //   // Store house type in local storage when it changes
  //   localStorage.setItem("houseType", houseType);
  //   setHouseTypeFiltered(houseType); // Update houseTypeFiltered when houseType changes
  // }, [houseType, setHouseTypeFiltered]);
  

  const handleCitySelect = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    setShowSuggestions(true);
    setSuggestions(citySuggestions[city] || []);
  };
  const handleLocationChange = (e) => {
    const location = e.target.value;
    setSearchInput(location);
    if (location === "") {
      setSuggestions([]);
      setShowSuggestions(false);
    } else {
      filterSuggestions(location);
      setShowSuggestions(true);
    }
    setSelectedLocation("");
  };
  
  
  const filterSuggestions = (input) => {
    const filteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };
  
  const handleLocationSelect = (location) => {
    if (!selectedLocations.includes(location)) {
      setSelectedLocations([...selectedLocations, location]);
    }
    setSearchInput("");
    setShowSuggestions(false);
  };

  const handleLocationRemove = (location) => {
    const updatedLocations = selectedLocations.filter(
      (loc) => loc !== location
    );
    setSelectedLocations(updatedLocations);
  };

  const handleAddLocation = () => {
    // Add selected locations to your application's logic
    // You can access selectedLocations array here
  };

  return (
    <div className="bg-wbg w-[1440px] py-[18px] px-[50px] flex-col flex items-center justify-center">
      <div className="mt-[38px] min-h-[66px] rounded-md border justify-center items-center border-[#E6E7E9]  flex px-[20px] w-full">
        <div className="w-2/12 border-r border-gtxt flex justify-center items-center">
          <Image
            className="cursor-pointer"
            src="/locationOn.svg"
            alt="locationOn"
            width={19}
            height={19}
          />
          <Select
            placeholder="Select City"
            className="text-center w-fit text-base text-b1txt"
            variant="unstyled"
            size="lg"
            onChange={handleCitySelect}
          >
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </Select>
        </div>

        {selectedCity && (
          <div className="w-3/12 drop-shadow-card relative flex justify-center items-center">
            <input
              type="text"
              placeholder="Select Location"
              className="text-center w-fit text-base text-b1txt"
              value={searchInput}
              onChange={handleLocationChange}
              onClick={() => setShowSuggestions(true)}
            />
            {showSuggestions && (
              <ul className="absolute top-12 z-10 bg-white border border-gray-300 mt-1 py-1 rounded-md w-full">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleLocationSelect(suggestion)}
                    className="px-3 py-1 cursor-pointer hover:bg-gray-100"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className="w-6/12 flex justify-start items-center">
          <ul className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 py-2 px-3">
            {selectedLocations.map((location, index) => (
              <li
                key={index}
                className="flex min-w-fit justify-center items-center rounded bg-white text-b1txt border px-3 py-2 border-ptxt"
              >
                {location}
                <span onClick={() => handleLocationRemove(location)}>
                  <CloseButton />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-1/12">
          <SearchBtn onClick={handleAddLocation} />
        </div>
      </div>

      {/* HouseType */}

      <div className="mt-[25px] rounded-md  justify-start text-center font-semibold text-[28px] text-[#333333] items-center  flex px-[20px] w-full">
        <span className="text-ptxt mr-3">{houseType}</span>
        <span className="font-light  text-lg">
          {selectedLocations.length > 0 ? " @ " + selectedLocations.join(", ") : ""}
        </span>
      </div>

      {/* Filters and Cards */}

      <div className="w-full justify-center items-start gap-x-6 flex mt-6">
        {/* Filters */}

        <div className="w-1/3  border  border-[#E6E7E9]  rounded-[5px] px-[24px] py-[20px] flex flex-col gap-y-6">
          {/* Occupancy */}

          <div className="flex flex-col items-start border-b border-[#E6E7E9]  gap-y-1">
            <div>
              <label className="font-semibold text-base leading-[30px]" htmlFor="occupancy">
                Occupancy
              </label>
            </div>

            <div className="flex flex-wrap justify-start gap-5 items-center pb-6">
              <OccupancyCard occupancy="Single Occupancy" />
              <OccupancyCard occupancy="Double Occupancy" />
              <OccupancyCard occupancy="Triple Occupancy" />
              <OccupancyCard occupancy="Quadruple Occupancy" />
              <OccupancyCard occupancy="Quintuple Occupancy" />
            </div>
          </div>

          {/* Gender */}

          <div className="flex flex-col items-start border-b border-[#E6E7E9] gap-y-1">
            <div>
              <label className="font-semibold text-base leading-[30px]" htmlFor="Gender">
                Gender
              </label>
            </div>

            <div className="flex flex-wrap justify-start gap-5 items-center pb-6">
              <GenderRadio />
            </div>
          </div>


          {/* PriceRange */}

          <div className="flex flex-col items-start border-b border-[#E6E7E9] gap-y-1">
    <div>
      <label className="font-semibold text-base leading-[30px]" htmlFor="PriceRange">
        PriceRange
      </label>
    </div>
    <div className="flex mt-3 w-full flex-wrap justify-start gap-5 items-center">
      <PriceRange />
    </div>
  </div>

          {/* Amenities */}

          <div className="flex flex-col items-start border-b border-[#E6E7E9] gap-y-1">
            <div>
              <label className="font-semibold text-base leading-[30px]" htmlFor="Amenities">
                Amenities
              </label>
            </div>

            <div className="flex flex-wrap justify-start gap-5 items-center pb-6">
              <Amenities />
            </div>
          </div>

          {/* Services */}

          <div className="flex flex-col items-start  gap-y-1">
            <div>
              <label className="font-semibold text-base leading-[30px]" htmlFor="Services">
              Services
              </label>
            </div>

            <div className="flex flex-wrap justify-center gap-5 items-center pb-6">
              <Services />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="w-2/3">
          <div className="flex flex-col gap-y-5">
            <HotelBanner
              location="ECR,Chennai"
              hotel="Truliv Ipsum, Kovalam"
              altimg="TrulivIpsum"
              urlimg="/TrulivIpsum.png"
            />
            <HotelBanner
              location="ECR,Chennai"
              hotel="Truliv Ipsum, Kovalam"
              altimg="TrulivIpsum"
              urlimg="/TrulivIpsum.png"
            /><HotelBanner
            location="ECR,Chennai"
            hotel="Truliv Ipsum, Kovalam"
            altimg="TrulivIpsum"
            urlimg="/TrulivIpsum.png"
          />
            <HotelBanner
              location="ECR,Chennai"
              hotel="Truliv Ipsum, Kovalam"
              altimg="TrulivIpsum"
              urlimg="/TrulivIpsum2.png"
            />
            <HotelBanner
              location="ECR,Chennai"
              hotel="Truliv Ipsum, Kovalam"
              altimg="TrulivIpsum"
              urlimg="/TrulivIpsum3.png"
              
            />
            <HotelBanner
            className='cursor-pointer'
            // onClick={routeProperty()}
              location="ECR,Chennai"
              hotel="Truliv Ipsum, Kovalam"
              altimg="TrulivIpsum"
              urlimg="/TrulivIpsum.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
