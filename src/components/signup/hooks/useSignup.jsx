import { useState } from "react";
import { signupApiCall } from "../../../api/auth.api";

export const useSignup = () => {
  // use states
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // functions
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    setLoading(true);
    e.preventDefault();

    // validation
    if (formData.password != formData.confirmPassword) {
      console.log("Passwords do not match");
      setLoading(false)
      return;
    }

    const response = await signupApiCall(formData);

    if (response.success) {
      console.log(response.message);
    } else {
      console.error(response.message);
    }

    setLoading(false);
  };

  return {
    formData,
    handleInputChange,
    handleSignup,
    loading,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
  };
};
