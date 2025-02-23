import React from "react";

const StepCard = ({ step, title, description, image, isReversed }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center ${
        isReversed ? "md:flex-row-reverse" : ""
      } bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-101 duration-400 mx-4 md:mx-0`}
    >
      {/* Text Content */}
      <div className="md:w-1/2 p-8">
        <h3 className="text-teal-500 text-md font-semibold">{step}</h3>
        <h2 className="text-2xl font-bold text-gray-800 mt-2">{title}</h2>
        <p className="text-gray-600 mt-4">{description}</p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
        <img src={image} alt={title} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default StepCard;
