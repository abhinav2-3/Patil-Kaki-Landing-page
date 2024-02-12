import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaHamburger,
  FaPizzaSlice,
} from "react-icons/fa";
import food from "../assets/food.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row overflow-hidden">
      <aside className="md:w-1/2 w-full min-h-[50vh] bg-primary py-3 px-5">
        <motion.img
          src="https://patilkaki.com/assets/pk-logo-min-21a39d3c.png"
          alt="Patil-Kaki logo"
          className="w-40 h-20 object-contain"
        />
        <div className="w-full flex place-items-center  flex-col">
          <motion.img
            src={food}
            alt="food"
            className="w-[65vw] duration-300 transform hover:scale-110"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
          />

          <div className="w-full flex flex-col justify-center gap-4 place-items-center">
            <div className="flex gap-4  justify-center text-white">
              <FaFacebook
                size={28}
                className="hover:text-secondary duration-300 cursor-pointer hover:-translate-y-3"
              />
              <FaInstagram
                size={28}
                className="hover:text-secondary duration-300 cursor-pointer hover:-translate-y-3"
              />
              <FaTwitter
                size={28}
                className="hover:text-secondary duration-300 cursor-pointer hover:-translate-y-3"
              />
            </div>
            <button className="px-8 py-2 tracking-tight text-xl font-medium text-black bg-secondary w-fit rounded-[100px] capitalize duration-300 hover:-translate-y-3 hover:bg-secondary/80">
              Order Now
            </button>
          </div>
        </div>
      </aside>
      <aside className="md:w-1/2 w-full border min-h-screen bg-secondary flex flex-col">
        <Navbar />
        <div className="py-16 flex flex-col w-full h-full place-items-center justify-center  ">
          <motion.h1
            className="py-4 px-16 tracking-tigh font-bold text-xl text-white rounded-[100px] bg-primary"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Maa Ke Hath Ka Khana
          </motion.h1>
          <motion.div
            className="py-10 px-16 w-full flex flex-col justify-center place-items-center md:text-[4vw] lg:text-[5vw] text-[10vw] leading-tight uppercase font-extrabold"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
          >
            <h1 className="flex gap-4 place-items-center">
              Good Taste{" "}
              <span>
                <FaHamburger color="green" />
              </span>
            </h1>
            <h1 className="flex gap-4 place-items-center">
              Good Sense{" "}
              <span>
                <FaPizzaSlice color="green" />
              </span>
            </h1>
          </motion.div>
          <motion.div
            className="flex gap-4 w-full justify-evenly place-items-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <img
              src={food2}
              alt=""
              className="w-32 md:w-32 lg:w-40 duration-300 hover:-translate-y-3"
            />
            <img
              src={food}
              alt=""
              className="w-32 md:w-32 lg:w-40 duration-300 hover:-translate-y-3"
            />
            <img
              src={food3}
              alt=""
              className="w-32 md:w-32 lg:w-40 duration-300 hover:-translate-y-3"
            />
          </motion.div>
        </div>
      </aside>
    </div>
  );
};

export default Hero;
