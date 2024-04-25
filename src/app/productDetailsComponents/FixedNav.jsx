import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function FixedNav() {
  return (
    <div className='text-[14px] py-1 rounded-[5px] w-[800px] sticky top-0 flex justify-center items-center  bg-[#F3F3F3] text-[#737373]'>
         
       {/* <button className='hover:text-[#737373] hover:font-bold'>Photos</button>
       <button className='hover:text-[#737373] hover:font-bold'>Details</button>
       <button className='hover:text-[#737373] hover:font-bold'>Availability</button>
       <button className='hover:text-[#737373] hover:font-bold'>Amenities</button>
       <button className='hover:text-[#737373] hover:font-bold'>Life @ Truliv</button>
       <button className='hover:text-[#737373] hover:font-bold'>Reviews</button>
       <button className='hover:text-[#737373] hover:font-bold'>Location</button>
    */}
            <Tabs  variant='enclosed' colorScheme='orange'>
        <TabList>
            <Tab>Photos</Tab>
            <Tab>Details</Tab>
            <Tab>Availability</Tab>
            <Tab>Amenities</Tab>
            <Tab>Life @ Truliv</Tab>
            <Tab>Reviews</Tab>
            <Tab>Location</Tab>
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
