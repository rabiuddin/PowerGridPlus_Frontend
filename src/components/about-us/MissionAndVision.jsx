import React from "react";
import RevealFromLeft from "../shared/framer-motion/RevealFromLeft";
import RevealFromRight from "../shared/framer-motion/RevealFromRight";

const MissionAndVision = () => {
  return (
    <>
      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <RevealFromLeft className="space-y-6">
              <h2 className="text-3xl font-bold text-primary mb-2">
                Our Mission
              </h2>
              <p className="text-gray-600 text-justify">
                To revolutionize energy management through innovative AI and IoT
                solutions, making power grids smarter, more efficient, and more
                sustainable for future generations. We empower users to optimize
                their energy consumption by solving the core problem of smart
                plug adoption cost, scaling sensing capacity and user experience
                by reimagining smart plug sensor units based on complete AI
                makeover.
              </p>
              <h2 className="text-3xl font-bold text-primary pt-6 mb-2">
                Our Vision
              </h2>
              <p className="text-gray-600 text-justify">
                To be global leader in AI-powered smart energy management
                solutions, driving the transition to a more sustainable and
                connected energy infrastructure while giving lifetime value to
                our users.
              </p>
            </RevealFromLeft>

            <RevealFromRight className="relative">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Company Vision"
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealFromRight>
          </div>
          <div>
            <RevealFromLeft className="space-y-6">
              <h2 className="text-3xl font-bold text-primary pt-6 mb-2">
                About
              </h2>
              <p className="text-gray-600 text-justify">
                PowegridPlus OÜ smartplug technology, is a software and hardware
                solution for electricity and GHG emmision management. Our
                AI-smartplug technology helps clients save on investment in
                remote electricity observation and control using elastic sensing
                technology and control scheme (i.e. Single submeter units per
                household/multiple devices). The solution provides automated
                energy audits for individual devices and generates realtime and
                suitable energy efficiency and CO2 advice to clients using
                artificial intelligence (AI). Some of the user interfaces
                adapted for the smartplug technology includes demand side
                recommendations services and chatbot technology. We equally
                utilize predictive and prescriptive analytics models to help
                clients generate energy efficiency and emmission advice at
                individual asset level.
              </p>
            </RevealFromLeft>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionAndVision;
