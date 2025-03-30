import React from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const VerificationEmailSent = ({ email }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-2xl shadow-xl text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="flex bg-green-100 h-16 justify-center rounded-full w-16 items-center">
            <FiCheckCircle className="h-8 text-green-600 w-8" />
          </div>
        </div>
        <h2 className="text-2xl text-gray-800 font-bold mb-2">
          Check Your Email
        </h2>
        <p className="text-gray-600 mb-6">
          We've sent a verification link to{" "}
          <span className="font-medium">{email}</span>. Please check your inbox
          and follow the instructions.
        </p>
        <p className="text-gray-500 text-sm mb-6">
          If you don't see the email, check your spam folder or make sure the
          email address is correct.
        </p>
        <div className="flex justify-center">
          <Link
            to="/login"
            className="text-primary hover:text-[#22a196] inline-flex items-center transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Login
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default VerificationEmailSent;
