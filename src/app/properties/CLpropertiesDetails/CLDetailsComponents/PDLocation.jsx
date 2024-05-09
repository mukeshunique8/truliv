import React from "react";
import Image from "next/image";

export default function PDLocation() {
  return (
    <div
      id="Location"
      className="flex flex-col w-fit md:w-[800px] gap-y-4 py-[50px] border-b-[1px] border-[#E0E0E0] md:mt-6"
    >
      <h2 className="font-semibold text-2xl leading-8 text-ptxt">Location</h2>

      <div className="hidden md:flex ">
        <iframe
                className="rounded-xl  shadow-xl"

          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6203599062555!2d80.19088707507683!3d12.996116487321475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c1761394d5%3A0xd2aacaa81f3e6b74!2sCyces%20Innovation%20Labs%20LLP!5e0!3m2!1sen!2sin!4v1714391889437!5m2!1sen!2sin"
          width="784"
          height="444"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="md:hidden rounded-2xl shadow-orange-950  flex ">
        <iframe
        className="rounded-xl  shadow-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6203599062555!2d80.19088707507683!3d12.996116487321475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c1761394d5%3A0xd2aacaa81f3e6b74!2sCyces%20Innovation%20Labs%20LLP!5e0!3m2!1sen!2sin!4v1714391889437!5m2!1sen!2sin"
          width="330"
          height="210"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
