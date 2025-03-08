import { useState } from "react";
import { loginApiCall } from "../../../api/users.api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../config/constants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  // use states
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // functions
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    setLoading(true);
    setError("");
    e.preventDefault();

    const response = await loginApiCall(formData);

    if (response.success) {
      const { access, refresh } = response.data;
      localStorage.setItem(ACCESS_TOKEN, access);
      localStorage.setItem(REFRESH_TOKEN, refresh);
      // dispatch(setUser(user));
      toast.success(response.message);
      navigate("/dashboard");
    } else {
      setError(response.message);
    }

    setLoading(false);
  };

  return {
    formData,
    handleInputChange,
    handleLogin,
    loading,
    showPassword,
    setShowPassword,
    error,
  };
};
