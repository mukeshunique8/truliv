import React, { createContext, useState, useContext } from "react";

const FilterContext = createContext();

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }) => {
  const [gender, setGender] = useState("");
  const [occupancy, setOccupancy] = useState("");
  const [services, setServices] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [houseTypeFiltered, setHouseTypeFiltered] = useState("");

  return (
    <FilterContext.Provider
      value={{
        gender,
        setGender,
        occupancy,
        setOccupancy,
        services,
        setServices,
        amenities,
        setAmenities,
        priceRange,
        setPriceRange,
                houseTypeFiltered,
        setHouseTypeFiltered,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
