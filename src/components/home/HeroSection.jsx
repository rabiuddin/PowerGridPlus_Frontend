import { motion } from "framer-motion";
import { AiFillAlipayCircle } from "react-icons/ai";
import { FaArrowRight, FaPhoneAlt, FaRobot } from "react-icons/fa";
import { IoAirplaneOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { MdMedicalServices } from "react-icons/md";

export default function HeroSection() {
  return (
    <section className="relative lg:h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-16 bg-gradient-to-br from-[#f3fff9] to-[#edfff6]">
      {/* Left Content */}
      <motion.div
        className="max-w-2xl text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight flex flex-col gap-2">
          <span className="flex items-center gap-4 shimmer justify-center lg:justify-start">
            <span>Conversational AI</span>
            <span className="inline-block text-primary">
              <FaRobot />
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
          <motion.a
            href="#"
            className="flex items-center gap-2 bg-white text-primary text-lg font-semibold px-6 py-3 rounded-lg border border-primary shadow-md hover:bg-primary hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Get Started for Free <FaArrowRight />
          </motion.a>
          <motion.a
            href="#"
            className="flex items-center gap-2 hover:bg-primary text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md bg-secondary transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Get Demo <FaArrowRight />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="relative w-full max-w-lg mt-12 lg:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
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
        <motion.div
          className="absolute scale-[90%] sm:scale-100 top-0 lg:-top-10 -left-5 sm:-left-25 bg-white shadow-md px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FaPhoneAlt className="text-primary" />
          <div>
            <h3 className="text-gray-800 font-bold">Call Summary</h3>
            <p className="text-gray-600 text-xs hidden sm:block">
              The AI Voicebot handled 232 calls today.
            </p>
          </div>
        </motion.div>

        {/* Floating Inbound Call Record */}
        <motion.div
          className="absolute scale-[90%] sm:scale-100 bottom-4 right-0 bg-white shadow-md px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <FaPhoneAlt className="text-primary" />
          <div>
            <h3 className="text-gray-800 font-bold">Great Call Record</h3>
            <p className="text-gray-600 text-xs hidden sm:block">
              The AI Voicebot handled 232 calls today.
            </p>
          </div>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          className="absolute top-0 right-0 bg-primary text-white shadow-lg p-3 rounded-full"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MdMedicalServices size={24} />
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-[-5%] bg-primary text-white shadow-lg p-3 rounded-full"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <IoAirplaneOutline size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
