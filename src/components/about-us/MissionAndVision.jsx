import React from "react";
import RevealFromLeft from "../shared/RevealFromLeft";
import RevealFromRight from "../shared/RevealFromRight";

const MissionAndVision = () => {
  return (
    <>
      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <RevealFromLeft className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
              <p className="text-gray-600">
                To revolutionize energy management through innovative AI and IoT
                solutions, making power grids smarter, more efficient, and more
                sustainable for future generations.
              </p>
              <h2 className="text-3xl font-bold text-primary pt-6">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To be the global leader in smart energy solutions, driving the
                transition to a more sustainable and connected energy
                infrastructure worldwide.
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
        </div>
      </section>
    </>
  );
};

export default MissionAndVision;
