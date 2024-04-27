import React from "react";
import Image from "next/image";


export default function LifeTruliv() {
  return (
    <div id="Life @ Truliv" className="flex flex-col w-[800px] gap-y-2 py-[50px] border-b-[1px] border-[#E0E0E0] mt-6">
      <h2 className="font-medium text-2xl leading-8 text-ptxt">Life @ Truliv</h2>
      <p className=" mt-4 text-base  text-[#404040]">Our property offers three concepts in one: community, coliving, and coworking. We welcome like-minded people from all over the world who are looking to be or are already living
location-independent lifestyles. Our typical guests are digital nomads, freelancers, entrepreneurs, and others who are just starting this lifestyle. Our lab comes with many benefits, one of which is meeting new friends and making potential new business connections.</p>


        <h2 className="text-black text-base font-medium mt-9">Community events</h2>      
        <div className="flex flex-col w-[800px] gap-y-2 py-[50px] border-b-[1px] border-[#E0E0E0] mt-6">
  <h2 className="font-medium text-2xl leading-8 text-ptxt">Activities</h2>
  <div className="text-[14px] grid grid-cols-3 mt-4 gap-6">
    <div className="flex  items-center gap-y-1">
      <Image className="cursor-pointer" src='/communitymeals.svg' alt="Community meals" width={50} height={50} />
      <p>Community meals</p>
    </div>
  
    <div className="flex  items-center gap-y-1">
      <Image className="cursor-pointer" src='/cultural.svg' alt="Cultural excursions" width={50} height={50} />
      <p>Cultural excursions</p>
    </div>

    <div className="flex  items-center gap-y-1">
      <Image className="cursor-pointer" src='/game.svg' alt="Game nights" width={50} height={50} />
      <p>Game nights</p>
    </div>

    <div className="flex  items-center gap-y-1">
      <Image className="cursor-pointer" src='/hackathons.svg' alt="Hackathons" width={50} height={50} />
      <p>Hackathons</p>
    </div>

    <div className="flex  items-center gap-y-1">
      <Image className="cursor-pointer" src='/meditation.svg' alt="Meditation classes" width={50} height={50} />
      <p>Meditation classes</p>
    </div>

    <div className="flex  items-center gap-y-1">
      <Image className="cursor-pointer" src='/movie.svg' alt="Movie nights" width={50} height={50} />
      <p>Movie nights</p>
    </div>

    <div className="flex  items-center gap-y-1">
      <Image className="cursor-pointer" src='/parties.svg' alt="Parties and gatherings" width={50} height={50} />
      <p>Parties and gatherings</p>
    </div>

    <div className="flex  items-center gap-y-1">
      <Image className="cursor-pointer" src='/walking.svg' alt="Walking tours" width={50} height={50} />
      <p>Walking tours</p>
    </div>
  </div>

  <div className="flex mt-4 items-center gap-x-2">
    <p className="flex font-medium text-base text-ptxt">Show more</p>
    <Image className="cursor-pointer" src='/rightarrow2.svg' alt="Show more" width={16} height={16} />
  </div>
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
