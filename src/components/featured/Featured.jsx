"use client";
import Image from "next/image";
import stars from "../../../public/assets/Group.png";
import stars1 from "../../../public/assets/Group11.png";
import pic1 from "../../../public/assets/pic1.png";
import pic2 from "../../../public/assets/pic2.png";

import location from "../../../public/assets/location2.svg";
import calendar from "../../../public/assets/calendar.svg";
import ticket from "../../../public/assets/ticket2.svg";
import { motion } from "framer-motion";

const Featured = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-20px" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      id="featured"
      className="w-full flex flex-col-reverse overflow-hidden lg:flex-row my-[25px]  md:h-[220vh] lg:h-[150vh] xl:h-screen items-center relative justify-between"
    >
      <div className="xl:w-[540px]  h-[100%] lg:w-[55%] w-[80%] md:h-[772px] lg:ms-[30px] xl:ms-[165px] flex-col justify-between items-start gap-10 inline-flex">
        <div className="text-center lg:text-left h-full md:h-[200px] flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch md:h-[97px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch text-pink-500 text-[23px] font-bold font-['Circular Std'] uppercase leading-7 tracking-[4.60px]">
              Key features
            </div>
            <div className="self-stretch text-gray-900 text-[44px] font-bold font-['Circular Std'] leading-[52.80px]">
              We offer best services
            </div>
          </div>
          <div className="self-stretch text-gray-900 text-opacity-50 text-lg font-normal font-['Inter'] leading-[28.80px]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature
            <br />
            from 45 BC.
          </div>
        </div>
        <div className="self-stretch md:h-[572px] h-full flex-col justify-evenly items-start inline-flex">
          <div className="text-center w-full md:flex-left flex-col md:flex-row p-8 bg-white rounded-[32px] hover:border-[.7px] hover:border-gray-900 cursor-pointer  hover:border-opacity-10  justify-start items-center gap-8 inline-flex">
            <div className="w-[100px] h-[100px] flex items-center justify-center  bg-orange-600 rounded-[32px]">
              <Image
                src={location}
                alt="location"
                height={48}
                width={48}
                className=""
              />
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-gray-900 text-[23px] font-bold font-['Circular Std'] leading-7">
                We offer best services
              </div>
              <div className="text-gray-900 text-opacity-50 text-lg font-normal font-['Inter'] leading-[28.80px]">
                Lorem Ipsum is not simply random text
              </div>
            </div>
          </div>
          <div className="text-center w-full md:flex-left flex-col md:flex-row p-8 bg-white rounded-[32px] hover:border-[.7px] hover:border-gray-900 cursor-pointer  hover:border-opacity-10 justify-start items-center gap-8 inline-flex">
            <div className="w-[100px] h-[100px] flex items-center justify-center  bg-amber-300 rounded-[32px]">
              <Image
                src={calendar}
                alt="location"
                height={48}
                width={48}
                className=""
              />
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-gray-900 text-[23px] font-bold font-['Circular Std'] leading-7">
                Schedule your trip
              </div>
              <div className="text-gray-900 text-opacity-50 text-lg font-normal font-['Inter'] leading-[28.80px]">
                It has roots in a piece of classical
              </div>
            </div>
          </div>
          <div className="text-center w-full md:flex-left flex-col md:flex-row p-8 bg-white rounded-[32px] hover:border-[.7px] hover:border-gray-900 cursor-pointer  hover:border-opacity-10 justify-start items-center gap-8 inline-flex">
            <div className="w-[100px] h-[100px] flex items-center justify-center  bg-pink-500 rounded-[32px]">
              <Image
                src={ticket}
                alt="location"
                height={48}
                width={48}
                className=""
              />
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-gray-900 text-[23px] font-bold font-['Circular Std'] leading-7">
                Get discounted coupons
              </div>
              <div className="text-gray-900 text-opacity-50 text-lg font-normal font-['Inter'] leading-[28.80px]">
                Lorem Ipsum is not simply random text
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={pic1}
        alt="pic1"
        className="md:absolute mb-[100px] mt-[50px] md:mb-0 md:mt-0 md:end-[250px] w-[300px] h-[465px] min-[375px]:right-[15%] lg:right-[30px] lg:w-[350px] xl:w-[433px] xl:right-[250px] md:w-[433px] md:h-[665px] lg:h-[580px] xl:h-[665px] right-[3%] top-[5%]  md:top-[46px] rounded-[500px] z-[3]"
      />
      <Image
        src={pic2}
        alt="pic2"
        height={496}
        width={351}
        className="absolute md:w-[351px] md:h-[496px] xl:w-[351px]  xl:h-[496px] lg:w-[358px] lg:h-[411px] w-[200px] h-[275px] min-[375px]:right-[6%]  top-[15%] right-[-5%] md:end-[156px] md:top-[270px] z-[4] rounded-[500px] lg:right-[0px] "
      />

      <div className="w-[224px] hidden absolute right-[130px] top-0 h-[224px] overflow-hidden rounded-full ">
        <Image src={stars} alt="stars" height={224} width={224} className="" />
      </div>
      <div className="w-[224px] hidden absolute right-[234px] top-0 h-[224px] overflow-hidden rounded-full ">
        <Image src={stars1} alt="stars" height={224} width={224} className="" />
      </div>
    </motion.div>
  );
};

export default Featured;
