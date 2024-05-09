import React from "react";
import Image from "next/image";

const Review = ({ name, date, rating, text, image }) => (
  <div className="flex flex-col md:gap-y-[16px] gap-y-[8px] py-6 md:py-[50px] border-b-[1px] border-[#E0E0E0]">
    <div className="flex justify-start gap-x-4">
      <Image
        className=""
        src={image}
        alt="reviewprofile"
        width={48}
        height={48}
      />
      <div className="flex flex-col">
        <div className="flex gap-x-2">
          <p className="text-[#171717] font-bold leading-5 text-[14px]">{name}</p>
          <Image
            className=""
            src="/star.svg"
            alt="star"
            width={20}
            height={20}
          />
          <p className="text-[#525252] font-bold leading-5 text-[14px]">{rating}</p>
        </div>
        <p className="text-[#737373] leading-5 text-[14px] ">{date}</p>
      </div>
    </div>
    <div>
      <p className="text-[#525252] md:w-[480px] italic leading-6 md:text-[16px] text-[12px]">{text}</p>
    </div>
  </div>
);

export default function ReviewContainer() {
  const reviewsData = [
    { 
      name: "Max Joseph D.", 
      date: "Jun 2023", 
      rating: "3.9", 
      text: "Great coliving with big and comfortable rooms, a spacious and well-equipped coworking space, and a gym with everything I needed. The team is very friendly. I had a great....",
      image: "/reviewprofile.png"
    },
    { 
      name: "Anna Smith", 
      date: "Aug 2023", 
      rating: "4.5", 
      text: "Absolutely loved my stay at Truliv! The community vibe is amazing, and the facilities are top-notch. The coworking space was perfect for getting work done, and the events organized by the team were so much fun.",
      image: "/reviewprofile.png"
    },
    { 
      name: "John Doe", 
      date: "Oct 2023", 
      rating: "4.2", 
      text: "Truliv exceeded my expectations in every way. The rooms were clean and spacious, the coworking space was comfortable and well-equipped, and the community events were a great way to meet new people.",
      image: "/reviewprofile.png"
    },
    { 
      name: "Emily Johnson", 
      date: "Dec 2023", 
      rating: "4.8", 
      text: "I had an amazing experience at Truliv. The staff were friendly and helpful, the facilities were excellent, and the location was convenient. I would highly recommend it to anyone looking for a comfortable and welcoming place to stay.",
      image: "/reviewprofile.png"
    },
    { 
      name: "Michael Brown", 
      date: "Jan 2024", 
      rating: "4.0", 
      text: "I stayed at Truliv for a month and had a fantastic time. The coliving space was clean and well-maintained, the coworking area was quiet and conducive to productivity, and the events organized by the staff were a lot of fun. Overall, it was a great experience.",
      image: "/reviewprofile.png"
    }
  ];

  return (
    <div id="Reviews" className="flex flex-col font-medium md:w-[550px] gap-y-2 pt-[40px] md:mt-6">
      <h2 className="font-semibold text-2xl leading-8 text-ptxt">What our guests say (Ratings & Reviews)</h2>
      
      <div className="flex flex-col ">
        {reviewsData.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
    </div>
  );
}
