import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";

const SlideUpForm = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setShowForm(true), 15000);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    setShowForm(false);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out p-8 ${
        showForm ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-secondary md:w-2/5 rounded-xl shadow-md p-4 relative">
        <button
          className="absolute right-0 px-4"
          onClick={() => setShowForm(false)}
        >
          <RxCross1 size={30} />
        </button>
        <h2 className="text-center text-5xl font-medium uppercase">
          Flat 15% off
        </h2>
        <h5 className="text-center text-sm font-medium mb-5">
          Enter your details and win a coupon worth 20% off
        </h5>
        <div
          onSubmit={handleSubmit}
          className="flex flex-col place-items-center w-3/4 gap-4 m-auto"
        >
          <input
            type="tel"
            id="phone"
            placeholder="Enter your Phone number"
            className="shadow-sm block w-full px-4 py-2 rounded-md outline-none  text-gray-900"
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Enter your E-Mail"
            className="shadow-sm block w-full px-4 py-2 rounded-md outline-none  text-gray-900"
            required
          />
          <button className="px-8 py-2 w-full tracking-tight text-xl font-medium text-white bg-primary rounded-lg capitalize duration-300 hover:-translate-y-3 hover:bg-transparent hover:border-[2px]">
            Show Me Coupon
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideUpForm;
