"use client";
import { motion } from "framer-motion";
import message from "../../../public/assets/message.svg";
import Image from "next/image";
export default function Subscribe() {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-20px" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      id="subscribe"
      className="w-full lg:h-[608px] md:px-4 lg:px-16 py-32 bg-amber-500 bg-opacity-10 rounded-[32px] flex-col justify-center items-center gap-16 inline-flex"
    >
      <div className="flex-col text-center md:text-left justify-center items-center md:justify-start md:items-start gap-8 flex">
        <div className="lg:w-[982px] w-[80%] md:w-full text-center text-pink-500 text-[23px] font-bold font-['Circular Std'] uppercase leading-7 tracking-[4.60px]">
          subscribe to our newsletter
        </div>
        <div className="lg:w-[982px] w-[80%] md:w-full text-center text-gray-900 text-[23px] lg:text-[55px] font-bold font-['Circular Std'] leading-[66px]">
          Prepare yourself & let’s explore the beauty of the world
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" lg:w-[982px]  h-[150px] w-full lg:h-[100px] md:h-[60px] flex-col md:flex-row justify-evenly items-center gap-16 inline-flex"
      >
        <div className="lg:w-[65%] w-[80%] h-full relative  rounded-[32px] justify-start items-center gap-4 flex">
          <Image
            src={message}
            alt="message"
            height={32}
            width={32}
            className="absolute start-[12px]"
          />
          <input
            type="text"
            placeholder="Your Email"
            required
            className="text-left ps-[57px] pe-[15px] rounded-[17px]  focus:outline-indigo-600 h-full w-full text-gray-900 text-opacity-75 text-[18px] font-bold font-['Circular Std'] leading-7 "
          />
        </div>
        <button className="w-[235px]  h-full  px-16 py-2 bg-indigo-600 rounded-[32px] justify-start items-center gap-4 flex">
          <h1 className="text-center text-white text-[23px] font-bold font-['Circular Std'] leading-7">
            Subscribe
          </h1>
        </button>
      </form>
    </motion.div>
  );
}
