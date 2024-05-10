import React from "react";
import Image from "next/image";

const communityEvents = [
  {
    icon: "/communitymeals.svg",
    alt: "Community meals",
    text: "Community meals",
  },
  {
    icon: "/cultural.svg",
    alt: "Cultural excursions",
    text: "Cultural excursions",
  },
  {
    icon: "/game.svg",
    alt: "Game nights",
    text: "Game nights",
  },
  {
    icon: "/hackathons.svg",
    alt: "Hackathons",
    text: "Hackathons",
  },
  {
    icon: "/meditation.svg",
    alt: "Meditation classes",
    text: "Meditation classes",
  },
  {
    icon: "/movie.svg",
    alt: "Movie nights",
    text: "Movie nights",
  },
  {
    icon: "/parties.svg",
    alt: "Parties and gatherings",
    text: "Parties and gatherings",
  },
  {
    icon: "/walking.svg",
    alt: "Walking tours",
    text: "Walking tours",
  },
];

const imagessrc = [
  { src: "/life1.png", alt: "Life" },
  { src: "/life2.png", alt: "Life" },
  { src: "/life3.png", alt: "life" },
  { src: "/life4.png", alt: "Life" },
  { src: "/life5.png", alt: "Life" },
];

export default function LifeTruliv() {
  return (
    <div
      id="Life @ Truliv"
      className="flex  flex-col md:w-[800px] gap-y-2 py-[50px] border-b-[1px] border-[#E0E0E0] md:mt-6"
    >
      <h2 className="font-semibold text-2xl px-2 leading-8 text-ptxt">
        Life @ Truliv
      </h2>
      <p className=" mt-4 px-2 text-base  text-[#404040]">
        Our property offers three concepts in one: community, coliving, and
        coworking. We welcome like-minded people from all over the world who are
        looking to be or are already living location-independent lifestyles. Our
        typical guests are digital nomads, freelancers, entrepreneurs, and
        others who are just starting this lifestyle. Our lab comes with many
        benefits, one of which is meeting new friends and making potential new
        business connections.
      </p>

      <h2 className="text-black text-base font-semibold mt-9">
        Community events
      </h2>
      <div className="flex flex-col md:w-[800px] gap-y-2  mt-6">
        <div className="text-[14px]  grid md:grid-cols-3 grid-cols-2  gap-6">
          {communityEvents.map((event, index) => (
            <div className="flex  items-center gap-y-1" key={event.alt + index}>
              <Image
                className="cursor-pointer"
                src={event.icon}
                alt={event.alt}
                width={50}
                height={50}
              />
              <p>{event.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-9  flex-wrap flex justify-center md:grid  md:grid-cols-3 gap-6">
        {imagessrc.map((each, index) => (
          <div className="relative w-[350px] h-[250px] md:w-[250px] md:h-[220px]" key={each.alt + index}>
            <Image
              className=""
              src={each.src}
              alt={each.alt}
              fill
              sizes="100%"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
