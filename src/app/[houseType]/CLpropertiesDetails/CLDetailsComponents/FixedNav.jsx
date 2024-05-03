import React, { useState } from 'react';
import { Tabs, TabList, Tab } from '@chakra-ui/react';

export default function FixedNav() {
  const [activeTab, setActiveTab] = useState('');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -50; // Adjust the offset as needed
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  const handleTabClick = (id) => {
    scrollToSection(id);
    setActiveTab(id);
  };

  return (
    <div className='text-[14px] mt-4 rounded-[8px] md:w-fit sticky top-2 flex w-full  justify-center items-center bg-[#F3F3F3] text-[#737373]'>
      <nav>
        <ul className='flex flex-wrap py-1 px-1 items-center justify-center md:py-4 md:px-7 md:gap-y-4  gap-y-2 gap-x-3 md:gap-x-10'>
          <li>
            <span
              onClick={() => handleTabClick('Photos')}
              style={{ fontWeight: activeTab === 'Photos' ? 'bold' : 'normal', cursor: 'pointer' }}
            >
              Photos
            </span>
          </li>
          <li>
            <span
              onClick={() => handleTabClick('Details')}
              style={{ fontWeight: activeTab === 'Details' ? 'bold' : 'normal', cursor: 'pointer' }}
            >
              Details
            </span>
          </li>
          <li>
            <span
              onClick={() => handleTabClick('Availability')}
              style={{ fontWeight: activeTab === 'Availability' ? 'bold' : 'normal', cursor: 'pointer' }}
            >
              Availability
            </span>
          </li>
          <li>
            <span
              onClick={() => handleTabClick('Amenities')}
              style={{ fontWeight: activeTab === 'Amenities' ? 'bold' : 'normal', cursor: 'pointer' }}
            >
              Amenities
            </span>
          </li>
          <li>
            <span
              onClick={() => handleTabClick('Life @ Truliv')}
              style={{ fontWeight: activeTab === 'Life @ Truliv' ? 'bold' : 'normal', cursor: 'pointer' }}
            >
              Life @ Truliv
            </span>
          </li>
          <li>
            <span
              onClick={() => handleTabClick('Reviews')}
              style={{ fontWeight: activeTab === 'Reviews' ? 'bold' : 'normal', cursor: 'pointer' }}
            >
              Reviews
            </span>
          </li>
          <li>
            <span
              onClick={() => handleTabClick('Location')}
              style={{ fontWeight: activeTab === 'Location' ? 'bold' : 'normal', cursor: 'pointer' }}
            >
              Location
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
