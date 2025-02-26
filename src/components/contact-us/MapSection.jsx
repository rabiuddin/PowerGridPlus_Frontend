import React from "react";
import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <>
      {/* Map Section */}
      <section
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            {/* Replace with your actual map implementation */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600">Map Integration Goes Here</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapSection;
