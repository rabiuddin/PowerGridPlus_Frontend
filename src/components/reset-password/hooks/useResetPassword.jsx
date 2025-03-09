import { useEffect, useState } from "react";
import { calculatePasswordStrength } from "../../../utils/password.utils";
import { resetPasswordApiCall } from "../../../api/users.api";
import { useParams } from "react-router-dom";

export const useResetPassword = () => {
  // states
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { uidb64, token } = useParams();

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

    if (passwordStrength < 3) {
      setError("Please choose a stronger password");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    const response = await resetPasswordApiCall(uidb64, token, { password });

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
