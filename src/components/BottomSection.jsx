
"use client"


import React, { useContext } from 'react';
import Connections from '../components/Connections';
import HowDoes from '../components/HowDoes';
import { HouseContext } from "../providers/HouseContext";
import HolidayHomes from './HolidayHomes';

export default function BottomSection() {
  // Consume the HouseContext
  const { houseType } = useContext(HouseContext);

  // Render HolidayHomes if houseType is 'Holiday Homes', otherwise render Connections and HowDoes
  return (
    <div className='flex max-w-[1440px] flex-col justify-center items-center'>
      {houseType === 'Holiday Homes' ? (
        <HolidayHomes />
      ) : (
        <>
          <Connections />
          <HowDoes />
        </>
      )}
    </div>
  );
}

