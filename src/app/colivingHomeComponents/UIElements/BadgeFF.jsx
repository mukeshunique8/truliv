import React from 'react'
import DiagonalSquare from './DiagonalSquare'

export default function Badge() {
  return (
    <div className='relative'>

<button className="py-[8px] px-[22px] w-fit h-fit bg-green-600 rounded-tl-lg rounded-tr-lg rounded-br-lg text-wtxt leading-[16px] text-[14px] font-bold ">
                Filling Fast
              </button>

              <div className='absolute top-8 left-0'>
                
              <DiagonalSquare size={15} color="green" />
              </div> 
    </div>
  )
}
