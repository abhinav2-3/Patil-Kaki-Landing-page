import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60 * 1000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevState) => Math.max(prevState - 1000, 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(timeLeft / 1000 / 60) % 60;
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="w-full min-h-[80vh] bg-gray-900 flex flex-col  items-center pt-8 overflow-hidden">
      <div className="text-3xl font-semibold text-secondary py-10 px-5">
        <h1>Time is Running out.</h1>
        <h1>Order your Food Now!</h1>
      </div>
      <motion.div
        className="text-8xl md:text-9xl  font-bold text-primary text-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {minutes === 0 && seconds === 0 && (
          <span className="text-xl">Hurry, time's up!</span>
        )}
        {minutes > 0 && (
          <>
            <div className="w-full py-4 px-8 flex gap-10">
              <h1>{minutes < 10 ? "0" + minutes : minutes}</h1>:
              <h1>{seconds < 10 ? "0" + seconds : seconds}</h1>
            </div>
            <div className="w-full px-12 flex justify-between text-sm">
              <span>Minutes</span>
              <span>Seconds</span>
            </div>
          </>
        )}
      </motion.div>
      <button className="px-20 flex flex-col py-4 mt-10 text-2xl font-bold text-black bg-secondary w-fit rounded-lg uppercase duration-300 hover:-translate-y-3 hover:bg-secondary/80">
        Order Now
        <span className="text-sm w-full text-tertiary place-items-center">
          (Delivery Free)
        </span>
      </button>
    </div>
  );
};

export default Countdown;
