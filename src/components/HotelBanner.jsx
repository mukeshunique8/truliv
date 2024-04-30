import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HotelBanner(props) {
  // const router = useRouter()

  // function routeProperty(){
  //   router.push('/coliving/propertiesDetails')
  // }

  return (
    // <div
    //   // onClick={routeProperty}
    //   className="drop-shadow-hhds cursor-pointer bg-wtxt flex w-[170px] h-[305px] flex-col rounded-sm md:rounded-[30px]  p-4 gap-x-5"
    // >
    //   <div className=" ">
    //     <Image
    //       className="rounded-md"
    //       src={props.urlimg}
    //       alt={props.altimg}
    //       width={170}
    //       height={170}
    //     />
    //   </div>

    //   <div className="drop-shadow-hhds flex flex-col justify-center gap-y-[5px] ">
    //     <h1 className="text-dbtxt text-[14px] md:text-2xl font-semibold ">{props.hotel}</h1>
    //     <p className="text-gtxt  text-[11px] md:text-[19px] font-normal">{props.location}</p>
    //     <Image
    //       className="hidden md:flex"
    //       src="/starRating.svg"
    //       alt="hh1"
    //       width={114}
    //       height={24}
    //     />
    //     <div className="flex md:flex-row flex-col flex-wrap gap-y-2 items-start md:gap-x-[30px] mt-[15px] ">
    //       <li className="flex justify-center gap-x-2 items-center">
    //         <span>
    //           {" "}
    //           <Image
    //             className=""
    //             src="/wifi2.svg"
    //             alt="wifi2"
    //             width={20}
    //             height={20}
    //           />
    //         </span>
    //         Wi-fi
    //       </li>

    //       <li className="flex justify-center gap-x-2 items-center">
    //         <span>
    //           {" "}
    //           <Image
    //             className=""
    //             src="/parking.svg"
    //             alt="wifi2"
    //             width={20}
    //             height={20}
    //           />
    //         </span>
    //         Parking
    //       </li>

    //     </div>

    //     <a
    //       href=""
    //       className="flex w-[155px] cursor-pointer  justify-start mt-3  md:mt-[42px] items-center gap-x-[10px]"
    //     >
    //       <h2 className="text-ptxt cursor-pointer text-[11px] md:text-[18px] font-medium ">
    //         Reserve Now
    //       </h2>
    //       <Image
    //         className=""
    //         src="/rightArrow2.svg"
    //         alt="rightArrow2"
    //         width={18}
    //         height={18}
    //       />
    //     </a>
    //   </div>
    // </div>
    <div
// onClick={routeProperty}
className="drop-shadow-hhds cursor-pointer bg-wtxt flex md:flex-row flex-col rounded-[30px]  p-4 gap-x-5"
>
<div className=" ">
  <Image
    className="rounded-xl"
    src={props.urlimg}
    alt={props.altimg}
    width={391}
    height={216}
  />
</div>

<div className="drop-shadow-hhds flex flex-col justify-center gap-y-[5px] ">
  <h1 className="text-dbtxt text-2xl font-semibold ">{props.hotel}</h1>
  <p className="text-gtxt text-[19px] font-normal">{props.location}</p>
  <Image
    className=""
    src="/starRating.svg"
    alt="hh1"
    width={114}
    height={24}
  />
  <div className="flex flex-wrap gap-y-2 gap-x-[30px] mt-[15px] ">
    <li className="flex justify-center gap-x-2 items-center">
      <span>
        {" "}
        <Image
          className=""
          src="/wifi2.svg"
          alt="wifi2"
          width={20}
          height={20}
        />
      </span>
      Wi-fi
    </li>

    <li className="flex justify-center gap-x-2 items-center">
      <span>
        {" "}
        <Image
          className=""
          src="/parking.svg"
          alt="wifi2"
          width={20}
          height={20}
        />
      </span>
      Parking
    </li>

    <li className="flex justify-center gap-x-2 items-center">
      <span>
        {" "}
        <Image
          className=""
          src="/security.svg"
          alt="wifi2"
          width={20}
          height={20}
        />
      </span>
      24 x 7 Security
    </li>

    <li className="flex justify-center gap-x-2 items-center">
      <span>
        {" "}
        <Image
          className=""
          src="/wifi2.svg"
          alt="wifi2"
          width={20}
          height={20}
        />
      </span>
      Wi-fi
    </li>
  </div>

  <a
    href=""
    className="flex w-[155px] cursor-pointer  justify-start mt-[42px] items-center gap-x-[10px]"
  >
    <h2 className="text-ptxt cursor-pointer text-[18px] font-medium ">
      Reserve Now
    </h2>
    <Image
      className=""
      src="/rightArrow2.svg"
      alt="rightArrow2"
      width={18}
      height={18}
    />
  </a>
</div>
</div>
  );
}

