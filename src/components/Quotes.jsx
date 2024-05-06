import {React,useState} from 'react';
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const communityText = [
  {
    name: "Pradhip Biswas",
    message:
      "The team was always available to answer and resolve any questions I had. I highly recommend you turn to them for all housing needs.",
    propertyName: "Truliv Artemis",
  },
  {
    name: "Shiksha Shree",
    message:
      "The Booking and the communications went perfectly and also very quickly and easy. Highly recommended and easy. Thank You.",
    propertyName: "Truliv Demeter",
  },
  {
    name: "Neena Raj",
    message:
      "I Appreciate the quality of service, understanding, responsiveness, and support from truliv. Will come again for sure!",
    propertyName: "Truliv Aether",
  },
];

export default function Quotes() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    // loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  return (
    <div className="w-full bg-[#FFF3EE] mt-7  pb-6  md:mt-[60px] flex flex-col items-center justify-center">
      <div ref={sliderRef} className="keen-slider max-w-[1440px]  ">
        {communityText.map((quote, index) => (
          <div key={index} className="keen-slider__slide ">
            <div className=" bg-[#FFFF] rounded-md flex flex-col text-center mx-[30px] md:mx-[275px] mt-[60px] md:mt-[121px] mb-[60px] md:mb-[75px]">
             


             <div className='relative'>
             <p className="text-ptxt text-[16px] md:text-[22px] pt-[50px] font-semibold">{quote.name}</p>
              <p className="text-[#747474] text-[12px] md:text-[18px] font-normal">Stayed at {quote.propertyName}</p>
              <p className="text-btxt text-center text-[16px] md:text-[24px] px-5 md:px-[45px] py-6 md:py-[50px] font-normal">{quote.message}</p>
              <Image
                className="absolute -top-[55px] -left-[23px]"
                src="/quoteUp.svg"
                alt="quoteUp"
                width={89}
                height={89}
              />
              <Image
                className="absolute -bottom-[40px] -right-[18px]"
                src="/quoteDown.svg"
                alt="quoteDown"
                width={89}
                height={89}
              />
             </div>
             
           
            </div>
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
          <div className="dots flex gap-x-3 mt-4">
          {[...Array(communityText.length).keys()].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current.moveToSlideRelative(idx);
              }}
              className={`h-4 w-4 rounded-full bg-white ${
                currentSlide === idx ? 'bg-orange-500' : ''
              }`}
            ></button>
          ))}
        </div>
      )}

   
    </div>
  );
}
