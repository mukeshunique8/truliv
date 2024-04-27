import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function FixedNav() {

  
  const scrollToSection = (id) => { 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div  className='text-[14px]   rounded-[5px] w-fit sticky top-0 flex justify-center items-center  bg-[#F3F3F3] text-[#737373]'>
         
    
            <Tabs   colorScheme='orange'>
        <TabList>
            <Tab onClick={() => {scrollToSection("Photos"); }}>Photos</Tab>
            <Tab onClick={() => {scrollToSection("Details"); }}>Details</Tab>
            <Tab onClick={() => {scrollToSection("Availability"); }}>Availability</Tab>
            <Tab onClick={() => {scrollToSection("Amenities"); }}>Amenities</Tab>
            <Tab onClick={() => {scrollToSection("Life @ Truliv"); }}>Life @ Truliv</Tab>
            <Tab onClick={() => {scrollToSection("Reviews"); }}>Reviews</Tab>
            <Tab onClick={() => {scrollToSection("Location"); }}>Location</Tab>
        </TabList>

        {/* <TabPanels>
            <TabPanel>
            <p>one!</p>
            </TabPanel>
            <TabPanel>
            <p>two!</p>
            </TabPanel>
            <TabPanel>
            <p>three!</p>
            </TabPanel>
        </TabPanels> */}
        </Tabs>
    </div>
  )
}
