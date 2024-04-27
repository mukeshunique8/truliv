import {useState,React} from 'react'
import Image from "next/image";

import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { IoIosCheckbox, IoIosCheckboxOutline } from "react-icons/io";

export default function BookingForm() {
    const [isActive, setIsActive] = useState(true);
    const [checked, setChecked] = useState(true);


    const toggleIcon = () => {
        setIsActive(!isActive);
      };

    
      const toggleCheckbox = () => {
        setChecked(!checked);
      };
  return (
    <div  className=' w-[465px] absolute  mt-[110px]  ml-[900px] '>

        <div className='px-5 border-[1px] border-[#E8E8E8] bg-[#FFFDFD] rounded py-5 flex flex-col gap-y-4 '>

            <p className='text-ptxt font-bold leading-6 text-[26px] '>₹1,999
             <span className='text-base font-normal pl-2 '>/room /night</span></p>

             <p className='font-medium text-[#9B9B9B] text-[14px] leading-[20px] '>+ taxes & fees: ₹420 </p>

             <div className='border-[1px] rounded-[3px]  leading-[17px] px-7 py-3 border-[#e95f29a6] '>

                <div className='flex text-base  text-[#676767] gap-x-0'>
                    <p className='border-r-[1px] pr-[10px] border-[#e95f29a6]'>Mon, 11 Dec - Fri, 15 Dec</p>
                    <p className='pl-[10px]'>2 guests, 1 room</p>
                </div>

             </div>

             <div className='border-t-ptxt pt-5 flex justify-between border-t-[2px] '>

                <div className='flex flex-col'>
                    <p className='text-[18px] font-medium text-black'> Total Price</p>
                <p className='font-medium text-[#9B9B9B] text-[14px] leading-[20px] '>Including taxes and fees </p>

                </div>

                <div className='text-black text-[20px] font-semibold'>
                    <p>₹1,999</p>
                </div>

             </div>

             <p className='text-ptxt mt-6 font-medium leading-5 text-[14px] underline'>Cancellation Policy</p>



        </div>
          
        {/* Whatsapp */}

        <div className=" flex justify-between mt-5 items-center">
          <div className=" flex items-center">
            <Image
              className="mr-2"
              src="/whatsapp.svg"
              alt="whatsapp"
              width={30}
              height={30}
            />
            <h2 className="text-[#000000] text-[15px] leading-6">
              Get updates over WhatsApp
            </h2>
          </div>
          <div>
            {isActive ? (
              <FaToggleOn
                className="cursor-pointer"
                size={35}
                style={{ color: "#E95F29" }}
                onClick={toggleIcon}
              />
            ) : (
              <FaToggleOff
                className="cursor-pointer"
                size={35}
                style={{
                  color: "#FFFFFF",
                  border: "1px",
                  borderColor: "#E95F29",
                }}
                onClick={toggleIcon}
              />
            )}
          </div>
        </div>

        <div className="flex mt-5 pr-8">
          <div className="mr-2">
            {checked ? (
              <IoIosCheckbox
                className="cursor-pointer"
                size={35}
                style={{ color: "#E95F29" }}
                onClick={toggleCheckbox}
              />
            ) : (
              <IoIosCheckboxOutline
                className="cursor-pointer"
                size={35}
                style={{ color: "#FFFFFF" }}
                onClick={toggleCheckbox}
              />
            )}
          </div>
          <div>
            <p className="text-[#000000] text-base leading-6">
              I have read and agreed to the{" "}
              <span className="text-ptxt underline">terms and conditions</span>{" "}
              and <span className="text-ptxt underline">privacy policy </span>
              and hereby confirm to proceed.
            </p>
          </div>
        </div>     

        <button className="text-base w-full rounded-md mt-5 bg-ptxt text-wtxt font-medium py-4">
        Continue To Book
          </button>           
          

    </div>
  )
}
