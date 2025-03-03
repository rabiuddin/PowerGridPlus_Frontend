import React from "react";
import RevealFromLeft from "../../shared/framer-motion/RevealFromLeft";
import RevealFromRight from "../../shared/framer-motion/RevealFromRight";
import StepCardContent from "./StepCardContent";
import StepCardImage from "./StepCardImage";

const StepCard = ({ step, title, description, image, isReversed, stepContentClassName, stepImageClassName, isLineClamped }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center ${
        isReversed ? "md:flex-row-reverse" : ""
      } bg-[#ffffffCC] hover:bg-white shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-101 duration-400 h-full`}
    >
      <div className={stepContentClassName}>
        {isReversed ? (
          <RevealFromRight>
            <StepCardContent
              step={step}
              title={title}
              description={description}
              isLineClamped={isLineClamped}
            />
          </RevealFromRight>
        ) : (
          <RevealFromLeft>
            <StepCardContent
              step={step}
              title={title}
              description={description}
              isLineClamped={isLineClamped}
            />
          </RevealFromLeft>
        )}
      </div>
      <div className={stepImageClassName}>
        {isReversed ? (
          <RevealFromLeft>
            <StepCardImage image={image} title={title} />
          </RevealFromLeft>
        ) : (
          <RevealFromRight>
            <StepCardImage image={image} title={title} />
          </RevealFromRight>
        )}
      </div>
    </div>
  );
};

export default StepCard;
