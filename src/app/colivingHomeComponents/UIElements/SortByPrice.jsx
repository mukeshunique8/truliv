import React, { useState, useEffect } from 'react';
import { useFilterContext } from '../../../providers/FilterContext';

export default function SortByPrice({ option }) {
  const { sortByPrice, setSortByPrice } = useFilterContext();
  const [isSelected, setIsSelected] = useState(false);

  // Update isSelected state based on the current sortByPrice value
  useEffect(() => {
    setIsSelected(sortByPrice === option);
  }, [sortByPrice, option]);

  const toggleSelection = () => {
    if (sortByPrice === option) {
      // If the clicked option is already selected, deselect it
      setSortByPrice(null);
    } else {
      // Otherwise, select the clicked option and deselect the other option
      setSortByPrice(option);
    }
  };

  return (
    <div
      className={`px-[12px] py-[10px] cursor-pointer rounded-[3px] bg-wtxt border-[1px] text-[#616876] border-[#E6E7E9] font-normal leading-4 text-[14px] ${
        isSelected ? 'bg-ptxt bg-orange-200 text-ptxt' : ''
      }`}
      onClick={toggleSelection}
    >
      <p className='cursor-pointer'>{option}</p>
    </div>
  );
}
