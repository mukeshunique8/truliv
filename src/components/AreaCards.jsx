import React, { useContext } from "react";
import Image from "next/image";
import { HouseContext } from "../Contexts/HouseContext";



export default function AreaCards(props) {
  const { houseType } = useContext(HouseContext);
  return (


    <div className={`w-[140px] h-[179px] md:w-[180px]  md:h-[250px]  hover:shadow-ptxt hover:shadow-md transition-all duration-700  cursor-pointer pb-2 rounded-xl bg-wbg hover:border-ptxt border hover:border-[1px] flex flex-col justify-between items-center ${houseType === 'Holiday Homes'? "w-[280px] border-none pb-0 justify-center items-center md:w-[390px] h-auto md:h-fit " :""} `}>
      


      {houseType !== 'Holiday Homes'&&
        <div className='flex flex-col mt-5  justify-center items-center'>
        <p className='text-[12px] cursor-pointer text-center md:mx-[34px] leading-[18px] text-btxt'>{props.desc}</p>
        <p className='text-ptxt cursor-pointer text-[13px] md:text-xl leading-[30px] font-semibold'>{props.area}</p>
        </div>
        }

        <div className={`relative w-[56px] h-[110px] md:w-[80px] md:h-[155px] ${houseType === 'Holiday Homes'? "w-[280px] h-auto  md:w-[390px] md:h-[215px] " :""} `}>
        <Image
        className='object-cover '
          src={props.areaUrl}
          alt={props.areaAlt}
          
          fill
          sizes="100%"
        />




        </div>
    

    </div>
  )
}
