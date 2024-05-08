import React, { useState, useContext, useEffect } from "react";
import SearchBtn from "../colivingHomeComponents/SearchBtn";
import { HouseContext } from "../../Contexts/HouseContext";
import { useFilterContext } from "../../Contexts/FilterContext"; // Import the FilterContext
import OccupancyCard from "./UIElements/OccupancyCard";
import GenderRadio from "./UIElements/GenderRadio";
import Amenities from "./UIElements/Amenities";
import Services from "./UIElements/Services";
import SortByPrice from "./UIElements/SortByPrice";
import CLPropertyBanner from "./CLPropertyBanner";
import HHPropertyBanner from "./HHPropertyBanner";
import PropertyBanner from "./PropertyBanner";
import BadgeAL from "./UIElements/BadgeAL";
import BadgeSO from "./UIElements/BadgeSO";
import BadgeFF from "./UIElements/BadgeFF";
import BadgeNA from "./UIElements/BadgeNA";
import Badge from "./UIElements/BadgeAL";

import PriceRange from "./UIElements/PriceRange";

import { Select } from "@chakra-ui/react";
import Image from "next/image";
import { CloseButton } from "@chakra-ui/react";

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
  const { houseType, setHouseType } = useContext(HouseContext);
  const {
    gender,
    setGender,
    occupancy,
    setOccupancy,
    amenities,
    setAmenities,
    services,
    setServices,
    priceRange,
    setPriceRange,
    houseTypeFiltered,
    setHouseTypeFiltered,
  } = useFilterContext();

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  // console.log("Gender:", gender);
  // console.log("Occupancy:", occupancy);
  // console.log("Amenities:", amenities);
  // console.log("Services:", services);
  // console.log("Price Range:", priceRange);
  // console.log("houseTypeFiltered:", houseTypeFiltered);
  // console.log("selectedLocations:", selectedLocations);
  

  useEffect(() => {
    // Retrieve house type from local storage when component mounts
    const storedHouseType = localStorage.getItem("houseType");
    if (storedHouseType) {
      setHouseType(storedHouseType);
      setHouseTypeFiltered(storedHouseType); // Set houseTypeFiltered with the stored value
    }
  }, []);

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


  const filtersearch = () => {
    setShowFilter(!showFilter); 
  };

  const closefilter = () => {
    setShowFilter(false);
  };

  return (
    <div className="bg-wbg   w-full max-w-[1440px] px-3 pt-[18px] py-12 md:px-[50px]  flex-col flex items-center justify-center">
      <div className="hidden  md:flex mt-[38px] min-h-[66px] rounded-md border justify-between items-center border-[#E6E7E9]   px-[20px] w-full">
        <div className="md:w-2/12 border-r border-gtxt flex justify-center items-center">
          <Image
            className="cursor-pointer"
            src="/locationOn.svg"
            alt="locationOn"
            width={19}
            height={19}
          />
          <Select
            // sx={{color:'b.100'}}

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
          <div className="md:w-3/12  relative flex justify-center items-center">
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

        <div className="md:w-5/12 flex justify-start items-center">
          <ul className="flex flex-wrap-reverse justify-center items-center gap-x-2 gap-y-2 py-2 px-3">
            {selectedLocations.map((location, index) => (
              <li
                key={index}
                className="flex min-w-fit justify-center items-center rounded bg-white text-b1txt  px-2  border-[1px] border-ptxt"
              >
                {location}
                <span onClick={() => handleLocationRemove(location)}>
                  <CloseButton />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-2/12">
          <SearchBtn  />
        </div>
      </div>

      {/* Search Box Mobile Screen */}

      <div className="flex md:hidden relative items-center rounded-[10px] justify-between shadow-xl px-4  w-full  py-4  mt-5 ">
        <input
          className="text-base px-2 py-1 rounded-sm text-[#110229]"
          type="text"
          value={"T-Nagar"}
        />
        <button>
          {" "}
          <Image
            className="cursor-pointer"
            src="/searchbutton.svg"
            alt="searchbutton"
            width={36}
            height={36}
          />
        </button>

        <Image
          onClick={filtersearch}
          className="cursor-pointer absolute top-[80px] right-0"
          src="/filter.svg"
          alt="filter"
          width={45}
          height={45}
        />
      </div>

      {/* HouseType */}

      <div className="mt-[25px] rounded-md flex-col items-start justify-start text-center font-semibold text-[20px] md:text-[28px] text-[#333333]  flex w-full">
        <span className="text-[#110229]  md:mr-3">{houseType}</span>
        <span className="font-light  text-lg">
          {selectedLocations.length > 0
            ? " in " + selectedLocations.join(", ")
            : ""}
        </span>
        <p className="flex text-[#8F90A6] font-normal text-base md:hidden" >5 Results</p>
      </div>

      {/* Filters and Cards */}

      <div className="w-full relative md:justify-center md:items-start md:gap-x-6 flex mt-6">
        {/* Filters */}

        <div
          className={`md:w-1/3 w-full  md:sticky md:top-2 border border-[#E6E7E9] md:rounded-tr-[0px] rounded-tr-[50px] rounded-tl-[50px] md:rounded-tl-none rounded-[5px] px-[24px] py-[20px] flex flex-col space-y-6 ${
            showFilter
              ? "absolute top-[10px] bg-white z-50 "
              : "hidden md:block"
          }`}
        >
          {/* Add filter */}

          <div className="flex flex-col w-full  pb-5 border-b border-[#E6E7E9]  md:hidden">
            <div className="flex pb-5  border-b border-ptxt items-center">
              <Image
                onClick={closefilter}
                className="cursor-pointer "
                src="/closex.svg"
                alt="close"
                width={24}
                height={24}
              />
              <Image
                className="cursor-pointer ml-[80px] "
                src="/filtersmall.svg"
                alt="filtersmall"
                width={17}
                height={16}
              />
              <p className="text-ptxt  ml-[8px] text-[20px] font-semibold">
                Add Filter
              </p>
            </div>

            <div className="flex text-[14px] mt-[40px] flex-col">
              <div className="flex gap-x-2">
                <Image
                  className="cursor-pointer  "
                  src="/downup.svg"
                  alt="downup"
                  width={14}
                  height={14}
                />

                <h2 className=" text-ptxt">Sort by Price</h2>
              </div>

              <div className="flex mt-5 justify-around">
                <SortByPrice option="Price: High to Low" />
                <SortByPrice option="Price: Low to High" />
              </div>
            </div>
          </div>

          {/* Occupancy */}

          <div className="flex flex-col items-start border-b border-[#E6E7E9]  gap-y-1">
            <div>
              <label
                className="font-semibold text-base leading-[30px]"
                htmlFor="occupancy"
              >
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
              <label
                className="font-semibold text-base leading-[30px]"
                htmlFor="Gender"
              >
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
              <label
                className="font-semibold text-base leading-[30px]"
                htmlFor="PriceRange"
              >
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
              <label
                className="font-semibold text-base leading-[30px]"
                htmlFor="Amenities"
              >
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
              <label
                className="font-semibold text-base leading-[30px]"
                htmlFor="Services"
              >
                Services
              </label>
            </div>

            <div className="flex flex-wrap justify-center gap-5 items-center pb-6">
              <Services />
            </div>

            <div className="flex w-full border-t py-5  justify-between items-center md:hidden">
              <p className="border-b-[1px] border-black">Clear All</p>
              <button className="bg-ptxt rounded-md text-white text-[14px] font-medium leading-[17px] px-[28px] py-[10px]">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className={`${showFilter ? "opacity-0" : "w-full md:w-2/3"}`}>

            
            <div className="flex flex-col justify-center items-center  gap-y-5">
            <PropertyBanner/>
            <PropertyBanner/>
            <PropertyBanner/>
            </div>

          {/* {houseType === "Holiday Homes" && (
            <div className="flex flex-col gap-y-5">
              <HHPropertyBanner badge={BadgeAL} />
              <HHPropertyBanner badge={BadgeSO} />
              <HHPropertyBanner badge={BadgeFF} />
              <HHPropertyBanner badge={BadgeNA} />
              <HHPropertyBanner badge={Badge} />
              <HHPropertyBanner badge={BadgeFF} />
              <HHPropertyBanner badge={BadgeNA} />
              <HHPropertyBanner badge={Badge} />
              <HHPropertyBanner badge={BadgeFF} />
              <HHPropertyBanner badge={BadgeNA} />
              <HHPropertyBanner badge={Badge} />
              <HHPropertyBanner badge={BadgeFF} />
              <HHPropertyBanner badge={Badge} />
              <HHPropertyBanner badge={BadgeFF} />
              <HHPropertyBanner badge={BadgeFF} />
              <HHPropertyBanner badge={Badge} />
              <HHPropertyBanner badge={BadgeNA} />
            </div>
          )}

          {houseType === "Co-Living Spaces" && (
            <div className="flex flex-col items-center gap-y-5">
              <CLPropertyBanner badge={BadgeAL} />
              <CLPropertyBanner badge={BadgeSO} />
              <CLPropertyBanner badge={BadgeFF} />
              <CLPropertyBanner badge={BadgeNA} />
              <CLPropertyBanner badge={Badge} />
              <CLPropertyBanner badge={BadgeFF} />
              <CLPropertyBanner badge={BadgeAL} />
              <CLPropertyBanner badge={BadgeSO} />
              <CLPropertyBanner badge={BadgeFF} />
              <CLPropertyBanner badge={BadgeNA} />
              <CLPropertyBanner badge={Badge} />
              <CLPropertyBanner badge={BadgeFF} />
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
