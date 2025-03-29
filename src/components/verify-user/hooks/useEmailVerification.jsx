"use client";

import { useState } from "react";

export const useEmailVerification = () => {
  const [isResending, setIsResending] = useState(false);
  const [resendError, setResendError] = useState(null);
  const [resendSuccess, setResendSuccess] = useState(false);

  // Function to resend verification email
  const resendVerificationEmail = async (email) => {
    if (!email) {
      setResendError("Email address is required");
      return false;
    }

    setIsResending(true);
    setResendError(null);
    setResendSuccess(false);

    try {
      // In a real app, you would make an API call to resend the verification email
      // For this example, we'll simulate a successful API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate successful response
      setResendSuccess(true);
      return true;
    } catch (error) {
      setResendError(
        error.message ||
          "Failed to resend verification email. Please try again."
      );
      return false;
    } finally {
      setIsResending(false);
    }
  };

  // Function to verify email with token
  const verifyEmail = async (token) => {
    if (!token) {
      throw new Error("Verification token is required");
    }

    try {
      // In a real app, you would make an API call to verify the email
      // For this example, we'll simulate a successful API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate successful verification
      // In a real app, you would check the response from the API
      return true;
    } catch (error) {
      throw new Error(
        error.message || "Failed to verify email. Please try again."
      );
    }
  };

  return {
    resendVerificationEmail,
    verifyEmail,
    isResending,
    resendError,
    resendSuccess,
  };
};
