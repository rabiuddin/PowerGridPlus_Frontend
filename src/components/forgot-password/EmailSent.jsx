import React from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const EmailSent = ({ email }) => {
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
          Check Your Email
        </h2>
        <p className="text-gray-600 mb-6">
          We've sent a password reset link to{" "}
          <span className="font-medium">{email}</span>. Please check your inbox
          and follow the instructions.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          If you don't see the email, check your spam folder or make sure the
          email address is correct.
        </p>
        <div className="flex justify-center">
          <Link
            to="/login"
            className="inline-flex items-center text-[#0b6a62] hover:text-[#22a196] transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Login
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default EmailSent;
