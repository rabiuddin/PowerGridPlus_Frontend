import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiXCircle,
  FiLoader,
  FiArrowRight,
} from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEmailVerification } from "../components/verify-user/hooks/useEmailVerification";

const VerifyUser = () => {
  const [verificationState, setVerificationState] = useState("loading"); // loading, success, error
  const [errorMessage, setErrorMessage] = useState("");
  const { verifyEmail } = useEmailVerification();
  const params = useParams();
  const navigate = useNavigate();

  // Get token from URL
  const { token } = params;

  useEffect(() => {
    const verifyUserEmail = async () => {
      if (!token) {
        setVerificationState("error");
        setErrorMessage(
          "Verification token is missing. Please check your email link and try again."
        );
        return;
      }

      try {
        const success = await verifyEmail(token);
        if (success) {
          setVerificationState("success");
          // Redirect to login page after 5 seconds
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        } else {
          setVerificationState("error");
          setErrorMessage(
            "Unable to verify your email. The verification link may have expired."
          );
        }
      } catch (error) {
        setVerificationState("error");
        setErrorMessage(
          error.message || "An unexpected error occurred during verification."
        );
      }
    };

    verifyUserEmail();
  }, [token, verifyEmail, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b6a62]/5 to-[#22a196]/5 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md w-full"
      >
        {/* Loading State */}
        {verificationState === "loading" && (
          <div className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <FiLoader className="w-16 h-16 text-[#0b6a62] animate-spin" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Verifying Your Email
            </h2>
            <p className="text-gray-600">
              Please wait while we verify your email address...
            </p>
          </div>
        )}

        {/* Success State */}
        {verificationState === "success" && (
          <div className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <FiCheckCircle className="w-10 h-10 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Email Verified!
            </h2>
            <p className="text-gray-600 mb-6">
              Your email has been successfully verified. You can now log in to
              your account.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              You will be redirected to the login page in a few seconds...
            </p>
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#0b6a62] text-white rounded-lg hover:bg-[#22a196] transition-colors flex items-center justify-center mx-auto"
              >
                Go to Login
                <FiArrowRight className="ml-2" />
              </motion.button>
            </Link>
          </div>
        )}

        {/* Error State */}
        {verificationState === "error" && (
          <div className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <FiXCircle className="w-10 h-10 text-red-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Verification Failed
            </h2>
            <p className="text-gray-600 mb-6">{errorMessage}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login" className="flex-1">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 border border-[#0b6a62] text-[#0b6a62] rounded-lg hover:bg-[#0b6a62]/5 transition-colors"
                >
                  Back to Login
                </motion.button>
              </Link>
              <Link to="/signup" className="flex-1">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-[#0b6a62] text-white rounded-lg hover:bg-[#22a196] transition-colors"
                >
                  Sign Up Again
                </motion.button>
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default VerifyUser;
