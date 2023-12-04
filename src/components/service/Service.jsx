"use client";
import Image from "next/image";
import booking1 from "../../../public/assets/booking1.png";
import cloudy1 from "../../../public/assets/cloudy1.png";
import destination1 from "../../../public/assets/destination1.png";
import { motion } from "framer-motion";
const Service = () => {
  return (
    <motion.div
      id="service"
      className="w-full lg:h-[443px]  lg:flex-row flex-col gap-8 lg:gap-0 lg:px-[30px] xl:px-[165px] justify-start items-center inline-flex"
    >
      <motion.div 
      initial={{ opacity: 0, x: "-200px" }}
      transition={{ duration: 1, delay: 0 }}
      whileInView={{ opacity: 1, x: 0 }} className="xl:w-[444px] lg:w-[464px] w-full  flex-col justify-center items-center lg:justify-start lg:items-start gap-4 inline-flex">
        <div className="text-pink-500 text-[23px] font-bold font-['Circular Std'] uppercase leading-7 tracking-[4.60px]">
          Services
        </div>
        <div className=" text-center lg:text-left  text-gray-900 text-[44px] font-bold font-['Circular Std'] leading-[52.80px]">
          Our top value categories for you
        </div>
      </motion.div>
      <motion.div 
      initial={{ opacity: 0, x: "200px" }}
      transition={{ duration: 1, delay: 0 }}
      whileInView={{ opacity: 1, x: 0 }} className="justify-start px-[10px] lg:px-0 items-start gap-[21px] flex flex-col md:flex-row ">
        <div className="xl:w-[350px] lg:w-[300px] w-full self-stretch p-16 bg-white rounded-[32px] cursor-pointer shadow hover:shadow-2xl flex-col lg:justify-start justify-center items-center gap-16 inline-flex">
          <Image src={booking1} alt="booking" height={64} width={64} />
          <div className="self-stretch h-[153px] flex-col justify-start items-center gap-8 flex">
            <div className="self-stretch text-center text-gray-900 text-[28px] font-bold font-['Circular Std'] leading-[33.60px]">
              Best Tour Guide
            </div>
            <div className="self-stretch text-center text-gray-900 text-opacity-50 text-lg font-normal font-['Inter'] leading-[28.80px]">
              What looked like a small patch of purple grass, above five feet.
            </div>
          </div>
        </div>
        <div className="xl:w-[350px] lg:w-[300px] w-full self-stretch p-16 bg-white rounded-[32px] cursor-pointer shadow hover:shadow-2xl flex-col lg:justify-start justify-center items-center gap-16 inline-flex">
          <Image src={destination1} alt="destination" height={64} width={64} />
          <div className="self-stretch h-[153px] flex-col justify-start items-center gap-8 flex">
            <div className="self-stretch text-center text-gray-900 text-[28px] font-bold font-['Circular Std'] leading-[33.60px]">
              Easy Booking
            </div>
            <div className="self-stretch text-center text-gray-900 text-opacity-50 text-lg font-normal font-['Inter'] leading-[28.80px]">
              Square, was moving across the sand in their direction.
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Service;

{
  /* <div className="w-full h-[443px] px-[165px] justify-between items-start inline-flex  gap-y-[35px]">
      <div className="w-[444px] flex-col justify-start items-start gap-4 inline-flex">
        <div className="text-pink-500 text-[23px] font-bold font-['Circular Std'] uppercase leading-7 tracking-[4.60px]">
          Services
        </div>
        <div className="self-stretch text-gray-900  text-[44px] font-bold font-['Circular Std'] leading-[52.80px]">
          Our top value categories for you
        </div>
      </div>
      <div className="justify-between w-full items-start gap-y-[21px] flex">
        <div className="w-[350px] self-stretch p-16 bg-white shadow-2xl rounded-[32px] flex-col justify-start items-center gap-16 inline-flex">
          <Image src={destination1} alt="destination" height={64} width={64} />
          <div className="self-stretch h-[153px] flex-col justify-start items-center gap-8 flex">
            <div className="self-stretch text-center text-gray-900 text-[28px] font-bold font-['Circular Std'] leading-[33.60px]">
              Best Tour Guide
            </div>
            <div className="self-stretch text-center text-gray-900 text-opacity-50 text-lg font-normal font-['Inter'] leading-[28.80px]">
              What looked like a small patch of purple grass, above five feet.
            </div>
          </div>
        </div>
        <div className="w-[350px] self-stretch p-16 bg-white rounded-[32px] shadow-2xl flex-col justify-start items-center gap-16 inline-flex">
          <Image src={booking1} alt="booking" height={64} width={64} />
          <div className="self-stretch h-[153px] flex-col justify-start items-center gap-8 flex">
            <div className="self-stretch text-center text-gray-900 text-[28px] font-bold font-['Circular Std'] leading-[33.60px]">
              Easy Booking
            </div>
            <div className="self-stretch text-center text-gray-900 text-opacity-50 text-lg font-normal font-['Inter'] leading-[28.80px]">
              Square, was moving across the sand in their direction.
            </div>
          </div>
        </div>
      </div>
    </div> */
}
