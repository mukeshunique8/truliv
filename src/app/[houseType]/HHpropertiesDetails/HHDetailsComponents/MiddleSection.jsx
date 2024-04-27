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
    <div className='flex flex-col  bg-wtxt w-[1440px] bg- pl-12 '>
      <FixedNav/>
      <BookingForm/>
      <AboutTruliv/>
      {/* <AvailableOccupancies/> */}
      <PDAmenities/>
      {/* <LifeTruliv/> */}
      <ReviewContainer/>
      <OurPolicy/>
      <PDLocation/>
      {/* <HouseRules/> */}
    </div>
  )
}
