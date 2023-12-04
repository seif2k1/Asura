"use client";
import Image from "next/image";
import logo from "../../../public/assets/Vector.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-scroll";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`w-full  fixed top-0 left-0 right-0 shadow-xl bg-white z-[10] h-[100px] sm:px-[100px] lg:px-[50px] xl:px-[165px] py-8 justify-between items-center inline-flex`}
    >
      <Link
        className="cursor-pointer justify-start items-center gap-1 sm:gap-4 flex"
        to="home"
        spy={true}
        smooth={true}
        delay={0}
        offset={-113}
      >
        <Image src={logo} alt="logo" height={40} width={40} className="" />
        <div className="text-gray-900 text-2xl font-black font-['Circular Std'] leading-10">
          Travlog
        </div>
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={open === true ? { height: 0 } : { height: "100%" }}
            animate={open === true ? { height: "100%" } : { height: 0 }}
            exit={open === true ? { height: 0 } : { height: "100%" }}
            transition={{ duration: 1.3 }}
            className={` lg:flex z-[60] bg-white ${
              open
                ? " flex fixed w-screen h-screen  inset-0 flex-col justify-evenly items-center"
                : " hidden"
            } justify-start items-start lg:gap-6 xl:gap-16 `}
          >
            <Link
              onClick={() => {
                setOpen(false);
              }}
              className="cursor-pointer"
              to="home"
              spy={true}
              smooth={true}
              delay={0}
              offset={-113}
            >
              <motion.div
                initial={
                  open === true
                    ? { x: "-40px", opacity: 0 }
                    : { x: 0, opacity: 0 }
                }
                animate={
                  open === true
                    ? { x: 0, opacity: 1 }
                    : { x: "-40px", opacity: 1 }
                }
                exit={
                  open === true
                    ? { x: "-40px", opacity: 0 }
                    : { x: 0, opacity: 0 }
                }
                className="text-gray-800 text-sm font-bold font-['Circular Std'] leading-[16.80px]"
              >
                Home
              </motion.div>
            </Link>
            <Link
              onClick={() => {
                setOpen(false);
              }}
              className="cursor-pointer"
              to="service"
              spy={true}
              smooth={true}
              delay={0}
              offset={-113}
            >
              <motion.div
                initial={
                  open === true
                    ? { x: "40px", opacity: 0 }
                    : { x: 0, opacity: 0 }
                }
                animate={
                  open === true
                    ? { x: 0, opacity: 1 }
                    : { x: "40px", opacity: 1 }
                }
                exit={
                  open === true
                    ? { x: "40px", opacity: 0 }
                    : { x: 0, opacity: 0 }
                }
                className="text-gray-900 text-opacity-50 text-sm font-bold font-['Circular Std'] leading-[16.80px]"
              >
                Service
              </motion.div>
            </Link>
            <Link
              onClick={() => {
                setOpen(false);
              }}
              className="cursor-pointer"
              to="travel"
              spy={true}
              smooth={true}
              delay={0}
              offset={-113}
            >
              <motion.div
                initial={
                  open === true
                    ? { x: "-40px", opacity: 0 }
                    : { x: 0, opacity: 0 }
                }
                animate={
                  open === true
                    ? { x: 0, opacity: 1 }
                    : { x: "-40px", opacity: 1 }
                }
                exit={
                  open === true
                    ? { x: "-40px", opacity: 0 }
                    : { x: 0, opacity: 0 }
                }
                className="text-gray-900 text-opacity-50 text-sm font-bold font-['Circular Std'] leading-[16.80px]"
              >
                Travel Point
              </motion.div>
            </Link>
            <Link
              onClick={() => {
                setOpen(false);
              }}
              className="cursor-pointer"
              to="featured"
              spy={true}
              smooth={true}
              delay={0}
              offset={-113}
            >
              <motion.div
                initial={
                  open === true
                    ? { x: "40px", opacity: 0 }
                    : { x: 0, opacity: 0 }
                }
                animate={
                  open === true
                    ? { x: 0, opacity: 1 }
                    : { x: "40px", opacity: 1 }
                }
                exit={
                  open === true
                    ? { x: "40px", opacity: 0 }
                    : { x: 0, opacity: 0 }
                }
                className="text-gray-900 text-opacity-50 text-sm font-bold font-['Circular Std'] leading-[16.80px]"
              >
                Featured
              </motion.div>
            </Link>
            <Link
              onClick={() => {
                setOpen(false);
              }}
              className="cursor-pointer"
              to="testimonials"
              spy={true}
              smooth={true}
              delay={0}
              offset={-113}
            >
              <motion.div
                initial={
                  open === true
                    ? { x: "-40px", opacity: 0 }
                    : { x: 0, opacity: 0 }
                }
                animate={
                  open === true
                    ? { x: 0, opacity: 1 }
                    : { x: "-40px", opacity: 1 }
                }
                exit={
                  open === true
                    ? { x: "-40px", opacity: 0 }
                    : { x: 0, opacity: 0 }
                }
                className="text-gray-900 text-opacity-50 text-sm font-bold font-['Circular Std'] leading-[16.80px]"
              >
                Testimonials
              </motion.div>
            </Link>
            <Link
              onClick={() => {
                setOpen(false);
              }}
              className="cursor-pointer"
              to="subscribe"
              spy={true}
              smooth={true}
              delay={0}
              offset={-113}
            >
              <motion.div
                initial={
                  open === true
                    ? { x: "40px", opacity: 0 }
                    : { x: 0, opacity: 0 }
                }
                animate={
                  open === true
                    ? { x: 0, opacity: 1 }
                    : { x: "40px", opacity: 1 }
                }
                exit={
                  open === true
                    ? { x: "40px", opacity: 0 }
                    : { x: 0, opacity: 0 }
                }
                className="text-gray-900 text-opacity-50 text-sm font-bold font-['Circular Std'] leading-[16.80px]"
              >
                Contact
              </motion.div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className={` lg:flex hidden justify-start items-start lg:gap-6 xl:gap-16 `}
      >
        <Link
          onClick={() => {
            setOpen(false);
          }}
          className="cursor-pointer"
          to="home"
          spy={true}
          smooth={true}
          delay={0}
          offset={-113}
        >
          <motion.div className="text-gray-800 text-sm font-bold font-['Circular Std'] leading-[16.80px]">
            Home
          </motion.div>
        </Link>
        <Link
          onClick={() => {
            setOpen(false);
          }}
          className="cursor-pointer"
          to="service"
          spy={true}
          smooth={true}
          delay={0}
          offset={-113}
        >
          <motion.div className="text-gray-900 text-opacity-50 text-sm font-bold font-['Circular Std'] leading-[16.80px]">
            Service
          </motion.div>
        </Link>
        <Link
          onClick={() => {
            setOpen(false);
          }}
          className="cursor-pointer"
          to="travel"
          spy={true}
          smooth={true}
          delay={0}
          offset={-113}
        >
          <motion.div className="text-gray-900 text-opacity-50 text-sm font-bold font-['Circular Std'] leading-[16.80px]">
            Travel Point
          </motion.div>
        </Link>
        <Link
          onClick={() => {
            setOpen(false);
          }}
          className="cursor-pointer"
          to="featured"
          spy={true}
          smooth={true}
          delay={0}
          offset={-113}
        >
          <motion.div className="text-gray-900 text-opacity-50 text-sm font-bold font-['Circular Std'] leading-[16.80px]">
            Featured
          </motion.div>
        </Link>
        <Link
          onClick={() => {
            setOpen(false);
          }}
          className="cursor-pointer"
          to="testimonials"
          spy={true}
          smooth={true}
          delay={0}
          offset={-113}
        >
          <motion.div className="text-gray-900 text-opacity-50 text-sm font-bold font-['Circular Std'] leading-[16.80px]">
            Testimonials
          </motion.div>
        </Link>
        <Link
          onClick={() => {
            setOpen(false);
          }}
          className="cursor-pointer"
          to="subscribe"
          spy={true}
          smooth={true}
          delay={0}
          offset={-113}
        >
          <motion.div className="text-gray-900 text-opacity-50 text-sm font-bold font-['Circular Std'] leading-[16.80px]">
            Contact
          </motion.div>
        </Link>
      </motion.div>

      <div className="justify-start items-start flex">
        <div className="sm:px-8 px-2 py-2 sm:py-4 bg-white rounded-[100px] justify-start items-start gap-1 sm:gap-2 flex">
          <div className="text-gray-800 text-sm font-bold font-['Circular Std'] leading-[16.80px]">
            Log In
          </div>
        </div>
        <div className="sm:px-8 px-2 py-2 sm:py-4 bg-indigo-600 rounded-[100px] justify-start items-start gap-1 sm:gap-2 flex">
          <div className="text-zinc-100 text-sm font-bold font-['Circular Std'] leading-[16.80px]">
            Sign Up
          </div>
        </div>
      </div>
      {open === false ? (
        <GiHamburgerMenu
          className=" cursor-pointer lg:hidden flex  z-[61]"
          size={35}
          onClick={() => setOpen(true)}
        />
      ) : (
        <MdOutlineClose
          className=" cursor-pointer flex lg:hidden  z-[61]"
          size={35}
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default Navigation;
/*
 (
          <motion.div
            className={` lg:flex ${
              open
                ? "bg-white flex fixed w-screen h-screen  inset-0 flex-col justify-evenly items-center"
                : " hidden"
            } justify-start items-start lg:gap-6 xl:gap-16 `}
          >
            <Link
              onClick={() => {
                setOpen(false);
              }}
              className="cursor-pointer"
              to="home"
              spy={true}
              smooth={true}
              delay={0}
              offset={-113}
            >
              <motion.div className="text-gray-800 text-sm font-bold font-['Circular Std'] leading-[16.80px]">
                Home
              </motion.div>
            </Link>
            <Link
              onClick={() => {
                setOpen(false);
              }}
              className="cursor-pointer"
              to="service"
              spy={true}
              smooth={true}
              delay={0}
              offset={-113}
            >
              <motion.div className="text-gray-900 text-opacity-50 text-sm font-bold font-['Circular Std'] leading-[16.80px]">
                Service
              </motion.div>
            </Link>
            <Link
              onClick={() => {
                setOpen(false);
              }}
              className="cursor-pointer"
              to="travel"
              spy={true}
              smooth={true}
              delay={0}
              offset={-113}
            >
              <motion.div className="text-gray-900 text-opacity-50 text-sm font-bold font-['Circular Std'] leading-[16.80px]">
                Travel Point
              </motion.div>
            </Link>
            <Link
              onClick={() => {
                setOpen(false);
              }}
              className="cursor-pointer"
              to="featured"
              spy={true}
              smooth={true}
              delay={0}
              offset={-113}
            >
              <motion.div className="text-gray-900 text-opacity-50 text-sm font-bold font-['Circular Std'] leading-[16.80px]">
                Featured
              </motion.div>
            </Link>
            <Link
              onClick={() => {
                setOpen(false);
              }}
              className="cursor-pointer"
              to="testimonials"
              spy={true}
              smooth={true}
              delay={0}
              offset={-113}
            >
              <motion.div className="text-gray-900 text-opacity-50 text-sm font-bold font-['Circular Std'] leading-[16.80px]">
                Testimonials
              </motion.div>
            </Link>
            <Link
              onClick={() => {
                setOpen(false);
              }}
              className="cursor-pointer"
              to="subscribe"
              spy={true}
              smooth={true}
              delay={0}
              offset={-113}
            >
              <motion.div className="text-gray-900 text-opacity-50 text-sm font-bold font-['Circular Std'] leading-[16.80px]">
                Contact
              </motion.div>
            </Link>
          </motion.div>
        )
 */
