import React from "react";
import { Link } from "react-router-dom";
import useScroll from "../../../hooks/useScroll";

const StepCardContent = ({ step, title, description, isLineClamped }) => {

    const {scrollToTop} = useScroll();
  return (
    <>
      <div>
        <h3 className="text-teal-500 text-md font-semibold">{step}</h3>
        <h2 className="text-2xl font-bold text-gray-800 mt-2">{title}</h2>
        <div className={`text-gray-600 mt-4 text-justify ${isLineClamped && "line-clamp-4"}`}>{description}</div>

        {isLineClamped && (
          <>
            <Link
              onClick={scrollToTop}
              to="/how-it-works"
              className="inline-block mt-4 text-sm font-semibold text-teal-500 hover:text-teal-700 transition-colors"
            >
              Read More &rarr;
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default StepCardContent;
