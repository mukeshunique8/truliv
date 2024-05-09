import React from 'react'
import FixedNav from './FixedNav'
import AboutTruliv from './AboutTruliv'
import AvailableOccupancies from './AvailableOccupancies'
import PDAmenities from './PDAmenities'
import OurPolicy from './OurPolicy'
import ReviewContainer from './ReviewContainer'
import PDLocation from './PDLocation'
import HouseRules from './HouseRules'
import BookingForm from './BookingForm'

export default function MiddleSection() {
  return (
    <div className='  md:max-w-[1440px] flex  '>

      <div className='flex relative px-4 flex-col  bg-wtxt  w-full lg:w-3/5  '>

      <FixedNav/>
      
      <AboutTruliv/>
  
      <PDAmenities/>
     
      <ReviewContainer/>
      <OurPolicy/>
      <PDLocation/>
      </div>
     
     <div className='lg:w-2/5 w-full flex justify-end'>
      <BookingForm/>
     </div>
    </div>
  )
}
