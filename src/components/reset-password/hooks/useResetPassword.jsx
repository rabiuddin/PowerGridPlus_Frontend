import { useEffect, useState } from "react";
import { calculatePasswordStrength } from "../../../utils/password.utils";
import { resetPasswordApiCall } from "../../../api/auth.api";

export const useResetPassword = () => {
  // states
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const [resetToken, setResetToken] = useState("");

  // functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (passwordStrength < 3) {
      setError("Please choose a stronger password");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const response = await resetPasswordApiCall({ resetToken, password });

    if (response.success) {
      setIsSuccess(true);
      console.log(response.message);
    } else {
      console.error(response.message);
      setError(response.message);
    }

    setIsSubmitting(false);
  };

  // use Effects
  useEffect(() => {
    // Get reset token from URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get("reset-token");
    if (token) {
      setResetToken(token);
    }
  }, []);

  useEffect(() => {
    setPasswordStrength(calculatePasswordStrength(password));
  }, [password]);

  return {
    isSuccess,
    handleSubmit,
    password,
    setPassword,
    setShowPassword,
    showPassword,
    passwordStrength,
    showConfirmPassword,
    setShowConfirmPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    isSubmitting,
  };
};
