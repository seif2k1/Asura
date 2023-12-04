"use client";
import Image from "next/image";
import persone from "../../../public/assets/persone.png";
import ticket from "../../../public/assets/ticket-star.svg";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion";
export default function Travel() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div
      id="travel"
      className="w-full lg:h-screen  justify-start flex-col lg:flex-row items-center relative gap-[42px] inline-flex"
    >
      <div className="xl:w-[789.68px] w-full lg:w-[400px] h-[696.68px] relative ">
        <motion.div
          initial={{ x: "-700px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="xl:w-[705px] lg:w-[400px] w-full h-[550px] left-0 top-[129px] z-[-1] absolute bg-amber-300 rounded-tr-[500px] rounded-br-[500px]"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Image
            src={persone}
            alt="persone"
            className="xl:ms-[93px] w-full h-full xl:h-[696.68px] lg:h-[350px] xl:static lg:absolute top-[30%] xl:w-[696.68px] lg:w-[350px]"
          />
        </motion.div>
        <div className="w-24 h-24 lg:left-[584px] top-[20px] lg:z-[-1] xl:z-[1] left-0 absolute bg-gradient-to-l from-indigo-600 to-pink-500 rounded-full blur-md" />
        <div className="w-10 h-10 left-[55%] lg:left-[165px] top-[105px]  absolute bg-gradient-to-l from-indigo-600 to-pink-500 rounded-full blur-sm" />
        <div className="w-10 h-10 lg:left-[735px] left-[87%] top-[200px] lg:top-[200px] lg:z-[-1] xl:z-[1] absolute bg-amber-300 rounded-full blur-sm" />
        <div className="lg:w-4 lg:h-4 h-20  w-20 lg:left-[572px] lg:top-[299px] left-[70%] lg:z-[-1] xl:z-[1] top-[300px] absolute bg-orange-600 rounded-full blur-sm" />
        <div className="w-8 h-8 lg:left-[632px] left-[14px] top-[459px] absolute lg:z-[-1] xl:z-[1] bg-orange-600 rounded-full blur-sm" />
      </div>
      <div className="lg:w-[445px] w-full flex-col justify-start items-start gap-16 inline-flex">
        <div className="self-stretch w-full  lg:h-[269px] flex-col justify-start items-start gap-8 flex">
          <div className="text-center lg:text-left lg:h-[150px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch text-pink-500 text-[23px] font-bold font-['Circular Std'] uppercase leading-7 tracking-[4.60px]">
              Travel Point
            </div>
            <div className="self-stretch text-gray-900 text-[44px] font-bold font-['Circular Std'] leading-[52.80px]">
              We helping you find your dream location
            </div>
          </div>
          <div className="text-center lg:text-left text-gray-900 text-opacity-50 text-lg font-normal font-['Inter'] leading-[28.80px]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </div>
        </div>
        <div className="self-stretch w-full  lg:h-[334px] flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch  justify-center items-center lg:justify-start lg:items-start gap-8 flex-col lg:flex-row inline-flex">
            <div className="grow shrink basis-0 w-[80%] lg:w-auto py-8 px-4  rounded-[32px] border border-gray-900 border-opacity-10 flex-col justify-start items-center gap-4 inline-flex">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <div className="text-orange-600 text-[35px] font-bold font-['Circular Std'] leading-[42px]">
                  {counterOn && <CountUp start={0} end={500} duration={2} />}+
                </div>
              </ScrollTrigger>
              <div className="text-gray-900 text-lg font-normal font-['Inter'] leading-[28.80px]">
                Holiday Package
              </div>
            </div>
            <div className="grow shrink basis-0 w-[80%] lg:w-auto py-8 px-4 bg-white rounded-[32px] border border-gray-900 border-opacity-10 flex-col justify-center  items-center gap-4 inline-flex">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <div className="text-orange-600 text-[35px] font-bold font-['Circular Std'] leading-[42px]">
                  {counterOn && <CountUp start={0} end={100} duration={2.5} />}+
                </div>
              </ScrollTrigger>
              <div className="text-gray-900 text-lg font-normal font-['Inter'] leading-[28.80px]">
                Luxury Hotel
              </div>
            </div>
          </div>
          <div className="self-stretch  justify-center lg:items-start items-center gap-8 flex-col lg:flex-row inline-flex">
            <div className="grow shrink basis-0 w-[80%] lg:w-auto py-8 px-4 bg-white rounded-[32px] border border-gray-900 border-opacity-10 flex-col justify-start items-center gap-4 inline-flex">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <div className="text-orange-600 text-[35px] font-bold font-['Circular Std'] leading-[42px]">
                  {counterOn && <CountUp start={0} end={7} duration={4.5} />}+
                </div>
              </ScrollTrigger>
              <div className="text-gray-900 text-lg font-normal font-['Inter'] leading-[28.80px]">
                Premium Airlines
              </div>
            </div>
            <div className="grow shrink basis-0 w-[80%] lg:w-auto py-8 px-4 bg-white rounded-[32px] border border-gray-900 border-opacity-10 flex-col justify-start items-center gap-4 inline-flex">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <div className="text-orange-600 text-[35px] font-bold font-['Circular Std'] leading-[42px]">
                  {counterOn && <CountUp start={0} end={2} duration={6} />}
                  k+
                </div>
              </ScrollTrigger>
              <div className="text-gray-900 text-lg font-normal font-['Inter'] leading-[28.80px]">
                Happy Customer
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-28 lg:h-28 p-8 absolute  right-[10%] bg-amber-300 rounded-[100px] shadow justify-center items-center gap-4 inline-flex">
        <Image src={ticket} alt="ticker" className="w-[48px] h-[48px]" />
      </div>
    </div>
  );
}
