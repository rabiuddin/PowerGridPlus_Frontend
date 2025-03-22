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
                  <FiLock className="h-8 text-primary w-8" />
                </div>
                <h1 className="text-2xl text-gray-800 font-bold">
                  Reset Password
                </h1>
                <p className="text-gray-600 mt-2">
                  Create a new password for your account
                </p>
              </div>

              <ResetPasswordForm
                useResetPasswordInstance={useResetPasswordInstance}
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
          <PasswordUpdated />
        )}
      </motion.div>
    </div>
  );
}
