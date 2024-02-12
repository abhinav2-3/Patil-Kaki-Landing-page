import React from "react";
import ServiceCard from "./ServiceCard";
import { GiHotMeal } from "react-icons/gi";
import { AiTwotoneShop } from "react-icons/ai";
import { IoMdTimer } from "react-icons/io";
import { FcRating } from "react-icons/fc";
import { MdOutlineSecurity } from "react-icons/md";

const Service = () => {
  return (
    <div className="w-full min-h-screen py-8 bg-primary flex gap-8 flex-col overflow-hidden">
      <h1 className="text-center font-bold text-2xl text-secondary">
        Why should You go ahead with Me?
      </h1>
      <h1 className="text-center font-bold text-3xl uppercase text-white">
        India's Largest Desi Meals Brand
      </h1>
      <div className="w-full h-full flex flex-wrap gap-4 lg:gap-10 p-2 lg:px-44 justify-center">
        <ServiceCard
          title="2cr+ meals"
          desc="Served & We are not stopping"
          icon={
            <GiHotMeal
              size={80}
              className="bg-primary text-secondary p-4 rounded-full"
            />
          }
        />
        <ServiceCard
          title="200+ Shop Stores"
          desc="In Mumbai, Delhi NCR, Hydrabad, Lucknow"
          icon={
            <AiTwotoneShop
              size={80}
              className="bg-primary text-secondary p-4 rounded-full"
            />
          }
        />
        <ServiceCard
          title="30 Minutes"
          desc="Superfast Delivery. We reach you before the hunger does"
          icon={
            <IoMdTimer
              size={80}
              className="bg-primary text-secondary p-4 rounded-full"
            />
          }
        />
        <ServiceCard
          title="4.5 Ratings"
          desc="11000+ 5 star review that keep us motivated"
          icon={
            <FcRating
              size={80}
              className="bg-primary text-secondary p-4 rounded-full"
            />
          }
        />
        <ServiceCard
          title="Security"
          desc="Superfast Delivery. We reach you before the hunger does"
          icon={
            <MdOutlineSecurity
              size={80}
              className="bg-primary text-secondary p-4 rounded-full"
            />
          }
        />
      </div>
    </div>
  );
};

export default Service;
