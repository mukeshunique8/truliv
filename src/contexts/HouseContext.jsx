import React, { createContext, useState, useContext } from 'react';

export const HouseContext = createContext(); // Export HouseContext

export const HouseProvider = ({ children }) => {
  const [houseType, setHouseType] = useState('');
  const [showDescription, setShowDescription] = useState(false);

  return (
    <HouseContext.Provider value={{ houseType, setHouseType, showDescription, setShowDescription }}>
      {children}
    </HouseContext.Provider>
  );
};

export const useHouseContext = () => useContext(HouseContext);
