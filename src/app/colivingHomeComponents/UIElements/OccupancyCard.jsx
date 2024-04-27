import React, { useState } from 'react';
import { useFilterContext } from '../../../Contexts/FilterContext';

export default function OccupancyCard({ occupancy }) {
  const { occupancy: selectedOccupancy, setOccupancy } = useFilterContext();
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
    if (isSelected) {
      setOccupancy(selectedOccupancy.filter((item) => item !== occupancy));
    } else {
      setOccupancy([...selectedOccupancy, occupancy]);
    }
  };

  return (
    <div
      className={`px-[12px] py-[10px] cursor-pointer rounded-[3px] bg-wtxt border-[1px] text-[#616876] border-[#E6E7E9] font-normal leading-4 text-[14px] ${
        isSelected ? 'bg-ptxt text-ptxt' : ''
      }`}
      onClick={toggleSelection}
    >
      <p className='cursor-pointer'>{occupancy}</p>
    </div>
  );
}
