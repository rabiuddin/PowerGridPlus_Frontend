import { useState } from "react";
import { loginApiCall } from "../../../api/users.api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../config/constants";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/slices/userSlice";

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

  const handleLogin = async (e) => {
    setLoading(true);
    setError("");
    e.preventDefault();

    const response = await loginApiCall(formData);

    if (response.success) {
      const { user, tokens } = response.data;
      const { access, refresh } = tokens;
      localStorage.setItem(ACCESS_TOKEN, access);
      localStorage.setItem(REFRESH_TOKEN, refresh);
      dispatch(setUser(user));
      toast.success(response.message);
      navigate(from, { replace: true });
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
