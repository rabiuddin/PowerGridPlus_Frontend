import { motion } from "framer-motion";
import { FiLock, FiArrowLeft } from "react-icons/fi";
import PasswordUpdated from "../components/reset-password/PasswordUpdated";
import { useResetPassword } from "../components/reset-password/hooks/useResetPassword";
import ResetPasswordForm from "../components/reset-password/ResetPasswordForm";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  // hooks
  const useResetPasswordInstance = useResetPassword();
  const { isSuccess } = useResetPasswordInstance;

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
                  <FiLock className="w-8 h-8 text-[#0b6a62]" />
                </div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Reset Password
                </h1>
                <p className="text-gray-600 mt-2">
                  Create a new password for your account
                </p>
              </div>

              <ResetPasswordForm
                useResetPasswordInstance={useResetPasswordInstance}
              />

              <div className="mt-6 text-center">
                <Link
                  to="/login"
                  className="inline-flex items-center text-[#0b6a62] hover:text-[#22a196] transition-colors"
                >
                  <FiArrowLeft className="mr-2" />
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <PasswordUpdated />
        )}
      </motion.div>
    </div>
  );
}
