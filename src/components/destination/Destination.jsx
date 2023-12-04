import Image from "next/image";
import left from "../../../public/assets/arrow-left.svg";
import right from "../../../public/assets/arrow-right.svg";
const Destination = () => {
  return (
    <div
      id="destination"
      className="w-full lg:h-[228px] flex-col md:flex-row bg-cyan-500 md:px-[165px] py-16 justify-between items-center inline-flex"
    >
      <div className="md:w-[50%] w-full lg:h-[97px] flex-col justify-center items-center lg:justify-start text-center md:text-left lg:items-start gap-4 inline-flex">
        <div className="text-pink-500 text-[23px] font-bold font-['Circular Std'] uppercase leading-7 tracking-[4.60px]">
          Top Destination
        </div>
        <div className="text-gray-900 text-[44px] font-bold font-['Circular Std'] leading-[52.80px]">
          Explore top destination
        </div>
      </div>
      <div className="w-[232px] h-[100px] justify-center items-center gap-8 inline-flex">
        <div className="w-[50px] h-[50px] relative cursor-pointer bg-white hover:bg-indigo-600 rounded-[100px] border-[2px] hover:border-indigo-600 hover:border-[2px] duration-1000 hover:rotate-[360deg] border-gray-900 flex border-dashed border-opacity-75 items-center justify-center">
          <div className="w-6 h-6 flex items-center justify-center">
            <Image
              src={left}
              alt="left-arrow"
              height={24}
              width={24}
              className=""
            />
          </div>
        </div>
        <div className="w-[50px] h-[50px] relative rotate-[180deg] cursor-pointer bg-white hover:bg-indigo-600  hover:border-[2px] duration-1000 hover:border-indigo-600 hover:rotate-[540deg] rounded-[100px] border-[2px] border-gray-900 border-dashed border-opacity-75 flex items-center justify-center">
          <div className="w-6 h-6 flex items-center justify-center">
            <Image
              src={left}
              alt="left-arrow"
              height={24}
              width={24}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
