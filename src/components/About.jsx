import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="w-full min-h-screen bg-secondary flex flex-col-reverse md:flex-row overflow-hidden">
      <aside className="md:w-1/2 w-full md:py-24 md:px-10 lg:py-40 lg:px-20 py-16 px-8 min-h-screen flex place-items-center">
        <div className="w-full h-full flex flex-col gap-5">
          <h4 className="text-2xl font-bold text-black">Founder of</h4>
          <motion.h1
            className="text-7xl font-extrabold  text-primary"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            PATIL KAKI
          </motion.h1>
          <p className="text-lg font-medium tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam optio
            ullam explicabo ducimus eos nihil id pariatur nobis suscipit id
            pariatur nobis suscipit id pariatur nobis suscipit repellat!
          </p>
          <motion.div
            className="flex justify-evenly md:justify-between py-8"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <button className="px-7 py-2 tracking-tight text-xl font-bold uppercase text-black bg-transparent border-[2px] border-black w-fit rounded-[100px] duration-300 hover:-translate-y-3 hover:bg-secondary/80">
              Signup Now
            </button>
            <button className="px-7 py-2 tracking-tight text-xl font-bold uppercase text-white bg-primary w-fit rounded-[100px] duration-300 hover:-translate-y-3 hover:bg-primary/80">
              Contact Me
            </button>
          </motion.div>
        </div>
      </aside>
      <aside className="md:w-1/2 bg-primary w-full min-h-[80vh] py-20 md:p-8">
        <div className="flex justify-center place-items-center min-h-[50vh]">
          <motion.img
            src="https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393667.jpg?w=740&t=st=1707728289~exp=1707728889~hmac=d4865d237bd2b89935a3aeeb1b6d380d6865cfc91ad64ae87738dfacc1c6f02b"
            alt="Founder"
            className="rounded-xl w-[80vw] md:w-[40vw] shadow-2xl shadow-secondary duration-300 transform hover:scale-110"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          />
        </div>
      </aside>
    </div>
  );
};

export default About;
