import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import EmailSent from "../components/forgot-password/EmailSent";
import ForgotPasswordForm from "../components/forgot-password/ForgotPasswordForm";
import { useForgotPassword } from "../components/forgot-password/hooks/useForgotPassword";

export default function ForgotPassword() {
  const useForgotPasswordInstance = useForgotPassword();
  const { email, isSuccess } = useForgotPasswordInstance;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b6a62]/5 to-[#22a196]/5 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {!isSuccess ? (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0b6a62]/10 mb-4">
                  <FiMail className="w-8 h-8 text-[#0b6a62]" />
                </div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Forgot Password
                </h1>
                <p className="text-gray-600 mt-2">
                  Enter your email address and we'll send you a link to reset
                  your password.
                </p>
              </div>

              <ForgotPasswordForm
                useForgotPasswordInstance={useForgotPasswordInstance}
              />

              <div className="mt-6 text-center">
                <Link
                  to="/login"
                  className="inline-flex items-center text-primary hover:text-[#22a196] transition-colors"
                >
                  <FiArrowLeft className="mr-2" />
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <EmailSent email={email} />
        )}
      </motion.div>
    </div>
  );
}
