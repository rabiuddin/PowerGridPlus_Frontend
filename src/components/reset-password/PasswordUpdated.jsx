import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const PasswordUpdated = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-xl p-8 text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <FiCheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Password Updated!
        </h2>
        <p className="text-gray-600 mb-6">
          Your password has been successfully updated. You can now log in with
          your new password.
        </p>
        <Link
          to="/login"
          className="group cursor-pointer relative w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden rounded-lg bg-primary border-2 border-primary text-white font-medium transition-all duration-300 hover:bg-white hover:text-primary disabled:opacity-70"
        >
          <span className="relative flex items-center justify-center">
            Go to Login
          </span>
        </Link>
      </motion.div>
    </>
  );
};

export default PasswordUpdated;
