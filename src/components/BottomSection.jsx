import React, { useContext } from 'react';
import Connections from '../components/Connections';
import HowDoes from '../components/HowDoes';
import { HouseContext } from "../contexts/HouseContext";
import HolidayHomes from './HolidayHomes';

export default function BottomSection() {
  // Consume the HouseContext
  const { houseType } = useContext(HouseContext);

  return (
    <div className='flex flex-col justify-center items-center'>
      {/* Conditional rendering based on houseType */}
      {houseType === 'Co-Living Spaces' && (
        <>
          <Connections />
          <HowDoes />
        </>
      )}
      {houseType === 'Holiday Homes' && <HolidayHomes />}
      {/* Render Connections and HowDoes if neither condition is true */}
      {houseType !== 'Co-Living Spaces' && houseType !== 'Holiday Homes' && (
        <>
          <Connections />
          <HowDoes />
        </>
      )}
    </div>
  );
}
