"use client";
import Image from "next/image";
import star from "../../../public/assets/star.svg";
import star2 from "../../../public/assets/star2.svg";
import per1 from "../../../public/assets/per1.svg";
import testi from "../../../public/assets/testi.svg";
import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-20px" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      id="testimonials"
      className="testi  w-full lg:h-[925px] justify-center items-center flex-col  inline-flex"
    >
      <div className="lg:w-[1000px] w-full flex-col justify-start items-center gap-16 inline-flex">
        <div className="self-stretch lg:h-[97px] flex-col justify-start items-center gap-4 flex">
          <div className="self-stretch text-center text-pink-500 text-[23px] font-bold font-['Circular Std'] uppercase leading-7 tracking-[4.60px]">
            Testimonials
          </div>
          <div className="self-stretch text-center text-gray-900 text-[44px] font-bold font-['Circular Std'] leading-[52.80px]">
            Trust our clients
          </div>
        </div>
      </div>
      <div className="lg:w-[1000px] relative lg:h-[70%] w-full  justify-start  items-center gap-16 inline-flex">
        {/* <div className="w-[75px] h-[75px] absolute top-0 left-0 lg:static bg-blue-500 ">
          <div className="w-[75px] h-[75px] bg-white rounded-[100px] border border-gray-400 border-opacity-10" />
          <div className="w-6 h-6 " />
        </div> */}

        <div className="self-stretch w-full my-[100px] md:my-[200px] lg:my-0 h-full flex-col justify-evenly items-center gap-8 flex">
          <Image
            width={128}
            height={128}
            src={per1}
            alt="per1"
            className="rounded-full"
          />
          <div className="self-stretch text-center">
            <span className="text-orange-600 text-[28px] font-bold font-['Circular Std'] leading-[33.60px]">
              Mark Smith{" "}
            </span>
            <span className="text-gray-900 text-opacity-75 text-[23px] font-bold font-['Circular Std'] leading-7">
              / Travel Enthusiast
            </span>
          </div>
          <div className="justify-center items-start gap-4 inline-flex">
            <Image src={star} alt="star" height={32} width={32} className="" />
            <Image src={star} alt="star" height={32} width={32} className="" />
            <Image src={star} alt="star" height={32} width={32} className="" />
            <Image src={star} alt="star" height={32} width={32} className="" />
            <Image src={star2} alt="star" height={32} width={32} className="" />
          </div>
          <div className="self-stretch text-center text-gray-900 text-opacity-75 text-[23px] font-['Circular Std'] leading-[36.80px]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots
            <br />
            in a piece of classical Latin literature from 45 BC.
          </div>
        </div>
        {/* <div className="w-[75px] h-[75px] bg-green-500 absolute top-0 right-0 lg:static">
          <div className="w-[75px] h-[75px] bg-indigo-600 rounded-[100px]" />
          <div className="w-6 h-6 " />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Testimonials;
