import React from 'react'

export default function OccupancyCard(props) {
  return (
    <div className='px-[12px] py-[10px] cursor-pointer rounded-[3px] bg-wtxt  border-[1px] text-[#616876] border-[#E6E7E9]  font-normal leading-4 text-[14px]'>
            <p className='cursor-pointer'>{props.occupancy}</p>
    </div>
  )
}
