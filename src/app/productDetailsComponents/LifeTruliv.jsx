import React from "react";
import Image from "next/image";


export default function LifeTruliv() {
  return (
    <div className="flex flex-col w-[800px] gap-y-2 py-[50px] border-b-[1px] border-[#E0E0E0] mt-6">
      <h2 className="font-medium text-2xl leading-8 text-ptxt">Life @ Truliv</h2>
      <p className=" mt-4 text-base  text-[#404040]">Our property offers three concepts in one: community, coliving, and coworking. We welcome like-minded people from all over the world who are looking to be or are already living
location-independent lifestyles. Our typical guests are digital nomads, freelancers, entrepreneurs, and others who are just starting this lifestyle. Our lab comes with many benefits, one of which is meeting new friends and making potential new business connections.</p>


        <h2 className="text-black text-base font-medium mt-9">Community events</h2>      

      <div className="grid text-[14px] grid-cols-3 mt-4 gap-6 ">

        <p>Community meals</p>
        <p>Cultural excursions</p>
        <p>Game nights</p>
        <p>Hackathons</p>
        <p>Meditation classes</p>
        <p>Movie nights</p>
        <p>Parties and gatherings</p>
        <p>Walking tours</p>

      </div>

      <div className="mt-9 grid  grid-cols-3 gap-6">

      <Image className=""src="/life1.png"  alt="life1"  width={245}   height={206}/>
      <Image className=""src="/life2.png"  alt="life2"  width={245}   height={206}/>
      <Image className=""src="/life5.png"  alt="life5"  width={245}   height={206}/>
      <Image className=""src="/life3.png"  alt="life3"  width={245}   height={206}/>
      <Image className=""src="/life4.png"  alt="life4"  width={245}   height={206}/>
      <Image className=""src="/life5.png"  alt="life5"  width={245}   height={206}/>

      </div>


    </div>
  );
}
