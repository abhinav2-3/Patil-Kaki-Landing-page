import React from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.nav
      className="flex text-lg py-8 px-16 justify-evenly font-semibold uppercase place-items-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h1 className="hidden lg:block  duration-300 cursor-pointer hover:-translate-y-2">
        Location
      </h1>
      <h1 className="text-primary font-bold  duration-300 cursor-pointer hover:-translate-y-2">
        Food and Drinks
      </h1>
      <h1 className="hidden lg:block  duration-300 cursor-pointer hover:-translate-y-2">
        Shop
      </h1>
      <span className="hidden lg:block  duration-300 cursor-pointer hover:-translate-y-2">
        <FaSearch />
      </span>
    </motion.nav>
  );
};

export default Navbar;
