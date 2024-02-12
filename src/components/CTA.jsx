import React from "react";
import { FaLocationArrow } from "react-icons/fa";

function CTA({ title, desc1, desc2, desc3, buttonText }) {
  return (
    <div className="bg-secondary py-16">
      <div className="mx-auto px-4  sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center font-bold text-primary uppercase">
          {title}
        </h2>
        <div className="text-center text-lg py-4 px-10">
          <p className="text-gray-900 font-medium">&#x2022; {desc1}</p>
          <p className="text-gray-900 font-medium">&#x2022; {desc2}</p>
          <p className="text-gray-900 font-medium">&#x2022; {desc3}</p>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex gap-4 items-center px-8 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary hover:-translate-y-3 duration-200"
          >
            {buttonText}
            <FaLocationArrow />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CTA;
