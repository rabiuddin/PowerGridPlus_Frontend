import { FaArrowRight,  FaPhoneAlt } from "react-icons/fa";
import {
  IoAirplaneOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { MdMedicalServices } from "react-icons/md";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-16 bg-gradient-to-br from-[#f3fff9] to-[#edfff6]">
      {/* Left Content */}
      <div className="max-w-2xl text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight flex flex-col gap-2">
          <span className="flex items-center gap-2 shimmer">
            <span>Conversational AI</span>
            <span className="inline-block text-primary">
              <IoPhonePortraitOutline size={40} />
            </span>
          </span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Don’t struggle with insurance complexities—our conversational AI
          provides straightforward explanations, so you can make informed
          choices effortlessly.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
          <a
            href="#"
            className="flex items-center gap-2 bg-white text-primary text-lg font-semibold px-6 py-3 rounded-lg border border-primary shadow-md hover:bg-primary hover:text-white transition-all duration-300"
          >
            Get Started for Free <FaArrowRight />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 bg-primary text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-secondary transition-all duration-300"
          >
            Get Demo <FaArrowRight />
          </a>
        </div>
      </div>

      <div className="relative w-full max-w-lg mt-12 lg:mt-0">
        {/* Curved Background Shape */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-[95%] h-[95%] bg-gradient-to-b from-secondary to-[#a3eae4] rounded-t-full rounded-b-xl shadow-lg" />

        {/* Main Image */}
        <div className="relative flex justify-center">
          <img
            src="src/assets/hero_robot.png"
            alt="AI Assistant"
            className="w-full pb-11 relative z-10"
          />
        </div>

        {/* Floating Call Summary Box */}
        <div className="absolute top-0 -left-25 bg-white shadow-md px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 z-10">
          <FaPhoneAlt className="text-primary" />
          <div>
            <h3 className="text-gray-800 font-bold">Call Summary</h3>
            <p className="text-gray-600 text-xs">
              The AI Voicebot handled 232 calls today.
            </p>
          </div>
        </div>

        {/* Floating Inbound Call Record */}
        <div className="absolute bottom-4 right-0 bg-white shadow-md px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 z-10">
          <FaPhoneAlt className="text-primary" />
          <div>
            <h3 className="text-gray-800 font-bold">Inbound Call Record</h3>
            <p className="text-gray-600 text-xs">
              The AI Voicebot handled 232 calls today.
            </p>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-0 right-0 bg-primary text-white shadow-lg p-3 rounded-full">
          <MdMedicalServices size={24} />
        </div>
        <div className="absolute bottom-0 left-[-5%] bg-primary text-white shadow-lg p-3 rounded-full">
          <IoAirplaneOutline size={24} />
        </div>
      </div>
    </section>
  );
}
