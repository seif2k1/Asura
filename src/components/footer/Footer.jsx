"use client";
import Image from "next/image";
import logo from "../../../public/assets/Vector.svg";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-20px" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      id="contact"
      className="w-full my-[20px] lg:h-[353px] lg:px-[70px] xl:px-[165px] flex-col md:flex-row px-[20px] justify-start items-start gap-5 lg:gap-[80px] xl:gap-[153px] lg:py-[25px] inline-flex"
    >
      <div className="grow shrink  basis-0 flex-col  justify-start items-start lg:gap-6 inline-flex">
        <div className="flex-col justify-start items-start gap-8 inline-flex">
          <div className="justify-start items-center gap-4 inline-flex">
            <Image src={logo} alt="logo" height={40} width={40} />
            <div className="text-gray-900 text-2xl font-black font-['Circular Std'] leading-10">
              Travlog
            </div>
          </div>
          <div className="w-[278px] text-gray-900 text-opacity-50 text-[18px] font-['Circular Std'] leading-[36.80px]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots
            <br />
            in a piece of classical Latin literature from 45 BC.
          </div>
        </div>
        <div className="justify-start items-start gap-8 inline-flex">
          <div className="w-8 h-8 relative bg-indigo-600  rounded-full"></div>
          <div className="w-8 h-8 relative bg-indigo-600 rounded-full"></div>
          <div className="w-8 h-8 relative bg-indigo-600 rounded-full"></div>
        </div>
      </div>
      <hr className="md:hidden flex bg-black h-[2px] w-full" />
      <div className="justify-start  w-full flex-wrap lg:flex-nowrap gap-x-[114px] px-[20px] md:px-0 items-start gap-4 lg:gap-[121px] flex">
        <div className="flex-col lg:w-full  justify-start items-start gap-2 lg:gap-6 inline-flex">
          <div className="text-gray-900 text-[23px] font-bold font-['Circular Std'] leading-7">
            Company
          </div>
          <div className="text-gray-900 text-opacity-75 text-[15px] font-normal font-['Inter'] leading-[28.80px]">
            About
          </div>
          <div className="text-gray-900 text-opacity-75 text-[15px] font-normal font-['Inter'] leading-[28.80px]">
            Career
          </div>
          <div className="text-gray-900 text-opacity-75 text-[15px] font-normal font-['Inter'] leading-[28.80px]">
            Mobile
          </div>
        </div>
        <hr className="bg-black h-[2px] w-full lg:hidden" />
        <div className="flex-col lg:w-full  justify-start items-start gap-2 lg:gap-6 inline-flex">
          <div className="text-gray-900 text-[23px] font-bold font-['Circular Std'] leading-7">
            Contact
          </div>
          <div className="text-gray-900 text-opacity-75 text-[15px] font-normal font-['Inter'] leading-[28.80px]">
            Why Travlog?
          </div>
          <div className="text-gray-900 text-opacity-75 text-[15px] font-normal font-['Inter'] leading-[28.80px]">
            Partner with us
          </div>
          <div className="text-gray-900 text-opacity-75 text-[15px] font-normal font-['Inter'] leading-[28.80px]">
            FAQ’s
          </div>
          <div className="text-gray-900 text-opacity-75 text-[15px] font-normal font-['Inter'] leading-[28.80px]">
            Blog
          </div>
        </div>
        <hr className="bg-black h-[2px] w-full lg:hidden" />
        <div className="flex-col lg:w-full  justify-start items-start gap-2 lg:gap-6 inline-flex">
          <div className="text-gray-900 text-[23px] font-bold font-['Circular Std'] leading-7">
            Meet Us
          </div>
          <div className="text-gray-900 text-opacity-75 text-[15px] font-normal font-['Inter'] leading-[28.80px]">
            +00 92 1234 56789
          </div>
          <div className="text-gray-900 text-opacity-75 text-[15px] font-normal font-['Inter'] leading-[28.80px]">
            info@travlog.com
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-gray-900 text-opacity-75 text-[15px] font-normal font-['Inter'] leading-[28.80px]">
              205. R Street, New York
            </div>
            <div className="text-gray-900 text-opacity-75 text-[15px] font-normal font-['Inter'] leading-[28.80px]">
              BD23200
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
