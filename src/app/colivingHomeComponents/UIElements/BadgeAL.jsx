import React from 'react'
import DiagonalSquare from './DiagonalSquare'

export default function Badge() {
  return (
    <div className='relative'>

<button className="py-[8px] px-[22px] w-fit h-fit bg-ptxt rounded-tl-lg rounded-tr-lg rounded-br-lg text-wtxt leading-[16px] text-[14px] font-bold ">
                Almost Full
              </button>

              <div className='absolute top-8 left-0'>
                
              <DiagonalSquare size={15} color="#E95F29" />
              </div> 
    </div>
  )
}
