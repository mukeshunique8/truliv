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

  // Define the array of tab details
  const tabs = [
    { id: 'Photos', label: 'Photos' },
    { id: 'Details', label: 'Details' },
    { id: 'Availability', label: 'Availability' },
    { id: 'Amenities', label: 'Amenities' },
    { id: 'Life @ Truliv', label: 'Life @ Truliv' },
    { id: 'Reviews', label: 'Reviews' },
    { id: 'Location', label: 'Location' },
  ];

  return (
    <div className='text-[14px] mt-4 rounded-[8px] md:w-fit sticky top-2 flex w-full justify-center items-center bg-[#F3F3F3] text-[#737373]'>
      <nav>
        <ul className='flex flex-wrap py-1 px-1 items-center justify-center md:py-4 md:px-7 md:gap-y-4 gap-y-2 gap-x-3 md:gap-x-10'>
          {tabs.map((tab) => (
            <li key={tab.id}>
              <span
                onClick={() => handleTabClick(tab.id)}
                style={{
                  fontWeight: activeTab === tab.id ? 'bold' : 'normal',
                  cursor: 'pointer',
                }}
              >
                {tab.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
