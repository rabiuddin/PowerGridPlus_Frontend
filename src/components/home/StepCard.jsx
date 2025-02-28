import React from "react";
import RevealFromLeft from "../shared/RevealFromLeft";
import RevealFromRight from "../shared/RevealFromRight";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/utils";

const StepCard = ({ step, title, description, image, isReversed }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center ${
        isReversed ? "md:flex-row-reverse" : ""
      } bg-[#ffffffCC] hover:bg-white shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-101 duration-400 h-full`}
    >
      {/* Text Content */}
      {isReversed ? (
        <>
          <div className="md:w-3/5 h-auto md:h-1/2 p-8">
            <RevealFromRight>
              <div>
                <h3 className="text-teal-500 text-md font-semibold">{step}</h3>
                <h2 className="text-2xl font-bold text-gray-800 mt-2">
                  {title}
                </h2>
                <div className="text-gray-600 mt-4 line-clamp-4">
                  {description}
                </div>
                <Link
                onClick={scrollToTop}
                  to="/how-it-works"
                  className="inline-block mt-4 text-sm font-semibold text-teal-500 hover:text-teal-700 transition-colors"
                >
                  Read More &rarr;
                </Link>
              </div>
            </RevealFromRight>
          </div>
          <div className="md:w-2/5 h-auto md:h-1/2">
            <RevealFromLeft>
              <img src={image} alt={title} className="w-full h-full object-cover mr-auto" />
            </RevealFromLeft>
          </div>
        </>
      ) : (
        <>
          <div className="md:w-3/5 p-8 h-auto md:h-1/2 ">
            <RevealFromLeft>
              <div>
                <h3 className="text-teal-500 text-md font-semibold">{step}</h3>
                <h2 className="text-2xl font-bold text-gray-800 mt-2">
                  {title}
                </h2>
                <div className="text-gray-600 mt-4 line-clamp-4">
                  {description}
                </div>
                <Link
                onClick={scrollToTop}
                  to="/how-it-works"
                  className="inline-block mt-4 text-sm font-semibold text-teal-500 hover:text-teal-700 transition-colors"
                >
                  Read More &rarr;
                </Link>
              </div>
            </RevealFromLeft>
          </div>
          <div className="md:w-2/5 h-auto md:h-1/2">
            <RevealFromRight>
              <img src={image} alt={title} className="w-full h-full object-cover ml-auto" />
            </RevealFromRight>
          </div>
        </>
      )}
    </div>
  );
};

export default StepCard;
