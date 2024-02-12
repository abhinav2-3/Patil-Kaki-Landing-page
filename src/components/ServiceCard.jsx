import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, icon, desc }) => {
  return (
    <motion.div
      className="w-56 h-64 border rounded-lg bg-secondary p-8 flex flex-col gap-4 justify-center place-items-center duration-200 transform hover:scale-110"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
    >
      <span>{icon}</span>
      <h1 className="text-2xl font-bold uppercase text-center">{title}</h1>
      <h4 className="text-sm font-medium text-tertiary text-center">{desc}</h4>
    </motion.div>
  );
};

export default ServiceCard;
