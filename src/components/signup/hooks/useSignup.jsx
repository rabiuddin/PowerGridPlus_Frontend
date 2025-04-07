import { useEffect, useState } from "react";
import { signupApiCall } from "../../../api/users.api";
import { calculatePasswordStrength } from "../../../utils/password.utils";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../config/constants";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/slices/userSlice";

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
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [error, setError] = useState("");
  const [showVerificationNotice, setShowVerificationNotice] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const from = location.state?.from?.pathname || "/";

  // functions
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    setLoading(true);
    setError("");
    e.preventDefault();

    // validation
    if (passwordStrength < 3) {
      setError("Please choose a stronger password");
      setLoading(false);
      return;
    }

    if (formData.password != formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    const response = await signupApiCall({
      email: formData.email,
      password: formData.password,
    });

    if (response.success) {
      setShowVerificationNotice(true);
    } else {
      setError(response.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    setPasswordStrength(calculatePasswordStrength(formData.password));
  }, [formData.password]);

  return {
    formData,
    handleInputChange,
    handleSignup,
    loading,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    passwordStrength,
    error,
    showVerificationNotice,
  };
};
