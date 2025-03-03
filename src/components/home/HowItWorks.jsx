import React from "react";
import { steps } from "../../data/home.jsx";
import StepCard from "../how-it-works/step-card/StepCard.jsx";


const HowItWorks = () => {
  return (
    <div
      className="py-16 bg-gray-100 bg-cover"
      style={{ backgroundImage: "URL('/HowItWorksBg.png')" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="main-heading">How it works?</h1>
        <div className="w-16 h-1 bg-teal-600 mx-auto mb-10"></div>
      </div>
      <div className="space-y-12 px-4 md:px-0 md:w-[85%] sm:w-[92%] w-[98%] mx-auto"> 
        {steps.map((step, index) => (
          <StepCard
            key={index}
            step={step.step}
            title={step.title}
            description={step.description
            }
            image={step.image}
            isReversed={index % 2 !== 0}
            stepContentClassName={"md:w-3/5 h-auto md:h-1/2 p-8"}
            stepImageClassName={"md:w-2/5 h-auto md:h-1/2"}
            isLineClamped={true}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
