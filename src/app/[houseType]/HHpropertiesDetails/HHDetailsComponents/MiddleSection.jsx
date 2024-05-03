import React from 'react'
import FixedNav from './FixedNav'
import BookingForm from './BookingForm'
import AboutTruliv from './AboutTruliv'
import AvailableOccupancies from './AvailableOccupancies'
import PDAmenities from './PDAmenities'
import OurPolicy from './OurPolicy'
import ReviewContainer from './ReviewContainer'
import PDLocation from './PDLocation'
import HouseRules from './HouseRules'

export default function MiddleSection() {
  return (
    <div className='flex px-2 md:px-5  w-full flex-col justify-center items-center md:items-start  bg-wtxt md:w-[1440px] b  md:pl-12 '>
      <FixedNav/>
      <BookingForm/>
      <AboutTruliv/>
  
      <PDAmenities/>
     
      <ReviewContainer/>
      <OurPolicy/>
      <PDLocation/>
     
    </div>
  )
}
