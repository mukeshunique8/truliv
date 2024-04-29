import React from "react";
import Image from "next/image";

export default function Footer(props) {
  return (
    <div className={`${props.bgstyle}    w-full flex flex-col justify-center items-center `}>
      <div className="max-w-[1440px] pb-[102px] pt-[206px] flex px-[30px]   ">
        <div className="  flex flex-col items-start">
          <Image
            className="cursor-pointer"
            // src="/trulivLogoFooter.svg"
            src={props.logo}
            alt="trulivLogoFooter"
            width={235}
            height={78}
          />
          <p className="leading-[31px] w-[468px] h-[177px] mt-[30px] text-center text-[14px] text-[#8F90A6] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          {/* Social Icons */}
          <div className="flex  gap-x-[32px]">
            <Image
              className="hover:scale-110 transition-all 3s cursor-pointer"
              src="/facebook.svg"
              alt="facebook"
              width={25}
              height={25}
            />
            <Image
              className="hover:scale-110 transition-all 3s cursor-pointer"
              src="/twitter.svg"
              alt="twitter"
              width={25}
              height={25}
            />
            <Image
              className="hover:scale-110 transition-all 3s cursor-pointer"
              src="/instagram.svg"
              alt="instagram"
              width={25}
              height={25}
            />
            <Image
              className="hover:scale-110 transition-all 3s cursor-pointer"
              src="/linkedin.svg"
              alt="linkedin"
              width={25}
              height={25}
            />
          </div>

          <p className="mt-[40px] text-[#8F90A6] text-[13px]">
            © 2023 . All rights reserved.
          </p>
        </div>
      
        <div className="pl-[116px] pt-6 flex flex-col justify-start items-start">
          {/* <h3 className="font-semibold text-[#110229] text-[20px] leading-9"> */}
          <h3 className={`${props.textstyle} font-semibold text-[20px] leading-9`}>
            Take a tour
          </h3>

          <ul className=" cursor-pointer pt-[13px]  text-[18px] flex flex-col justify-center font-normal items-center text-center leading-[52px]">
            <li>Porur</li>
            <li>OMR</li>
            <li>Shenoy Nagar</li>
            <li>Nungambakkam</li>
            <li>Saligramam</li>
          </ul>
        </div>

        <div className="pt-6 pl-[56px] flex flex-col justify-start items-start">
          <h3 className="font-semibold text-[20px] leading-9">
            Our Company
          </h3>

          <ul className="font-normal cursor-pointer text-center pt-[13px] flex flex-col justify-center items-center  text-[18px] leading-[52px]">
            <li>About Us</li>
            <li>Agents</li>
            <li>Blog</li>
            <li>Media</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className=" pl-[50px]   pt-6 flex flex-col justify-start items-start">
          <h3 className="font-semibold  text-[20px] leading-9">
            Subscribe
          </h3>

          

          <p className="text-center flex px-4 justify-center items-center text-[#8F90A6] leading-[23px] text-[14px] pt-7">
            Subscribe to get latest property, blog news from us
          </p>

          <div className="bg-wbg mt-[25px] border-[#D0D0E3] border-2 w-full py-[15px] px-[15px] flex justify-between rounded-2xl text-center items-center">
            <input
              placeholder="Email address"
              className="focus:border-orange-500  px-2 w-[80%] text-[14px] leading-[23px] text-orange-500 focus:outline-none"
              type="email"
              htmlFor="email"
            />
            <button className="flex justify-center items-center bg-pbg rounded-[50%] w-[38px] h-[38px]">
              <Image
                className=""
                src="/rightArrow.svg"
                alt="rightArrow"
                width={13}
                height={13}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
