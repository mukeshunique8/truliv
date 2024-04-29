import React, { useState } from 'react';

export default function FixedNav() {
  const [activeTab, setActiveTab] = useState('');

  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -50; // Adjust the offset as needed
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      // console.log(yOffset);
    }
  };
  const handleTabClick = (id) => {
    scrollToSection(id);
    setActiveTab(id);
  };

  return (
    <div className='text-[14px] mt-4 rounded-[8px] w-fit sticky top-2 flex justify-center items-center bg-[#F3F3F3] text-[#737373]'>
      <nav>
        <ul className='flex py-4 px-7 gap-x-10'>
          <li>
            <a
              href='#Photos'
              onClick={() => handleTabClick('Photos')}
              style={{ fontWeight: activeTab === 'Photos' ? 'bold' : 'normal' }}
            >
              Photos
            </a>
          </li>
          <li>
            <a
              href='#Details'
              onClick={() => handleTabClick('Details')}
              style={{ fontWeight: activeTab === 'Details' ? 'bold' : 'normal' }}
            >
              Details
            </a>
          </li>
          {/* <li>
            <a href='#Availability' onClick={() => handleTabClick('Availability')}>
              Availability
            </a>
          </li> */}
          <li>
            <a
              href='#Amenities'
              onClick={() => handleTabClick('Amenities')}
              style={{ fontWeight: activeTab === 'Amenities' ? 'bold' : 'normal' }}
            >
              Amenities
            </a>
          </li>
          <li>
            <a
              href='#OurPolicy'
              onClick={() => handleTabClick('OurPolicy')}
              style={{ fontWeight: activeTab === 'OurPolicy' ? 'bold' : 'normal' }}
            >
              Our Policy
            </a>
          </li>
          <li>
            <a
              href='#Reviews'
              onClick={() => handleTabClick('Reviews')}
              style={{ fontWeight: activeTab === 'Reviews' ? 'bold' : 'normal' }}
            >
              Reviews
            </a>
          </li>
          <li>
            <a
              href='#Location'
              onClick={() => handleTabClick('Location')}
              style={{ fontWeight: activeTab === 'Location' ? 'bold' : 'normal' }}
            >
              Location
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
