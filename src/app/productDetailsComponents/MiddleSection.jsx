import React from 'react'
import FixedNav from './FixedNav'
import AboutTruliv from './AboutTruliv'
import AvailableOccupancies from './AvailableOccupancies'
import PDAmenities from './PDAmenities'
import LifeTruliv from './LifeTruliv'
import ReviewContainer from './ReviewContainer'
import PDLocation from './PDLocation'
import HouseRules from './HouseRules'

export default function MiddleSection() {
  return (
    <div className='flex flex-col bg-wtxt w-[1440px] bg- pl-12 '>
      <FixedNav/>
      <AboutTruliv/>
      <AvailableOccupancies/>
      <PDAmenities/>
      <LifeTruliv/>
      <ReviewContainer/>
      <PDLocation/>
      <HouseRules/>
    </div>
  )
}
