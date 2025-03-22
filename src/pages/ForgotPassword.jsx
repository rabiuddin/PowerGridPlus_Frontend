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
    <div className="flex bg-gradient-to-br justify-center p-4 from-primary/5 items-center min-h-screen to-[#22a196]/5">
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
                <div className="bg-primary/10 h-16 justify-center rounded-full w-16 inline-flex items-center mb-4">
                  <FiMail className="h-8 text-primary w-8" />
                </div>
                <h1 className="text-2xl text-gray-800 font-bold">
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

              <div className="text-center mt-6">
                <Link
                  to="/login"
                  className="text-primary hover:text-[#22a196] inline-flex items-center transition-colors"
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
