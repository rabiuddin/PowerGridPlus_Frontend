import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../config/constants";
import { jwtDecode } from "jwt-decode";
import { getCurrentUserApiCall, refreshTokenApiCall } from "../api/users.api";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";

const ProtectedRoutes = ({ children }) => {
  // states
  const [isAuthorized, setIsAuthorized] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();

  // functions
  const getUser = async () => {
    try {
      const response = await getCurrentUserApiCall();

      if (response.success) {
        dispatch(setUser(response.data.user));
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.log(error);
      setIsAuthorized(false);
    }
  };

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const response = await refreshTokenApiCall({ refresh: refreshToken });
      if (response.success) {
        console.log(response.message);
        localStorage.setItem(ACCESS_TOKEN, response.data.tokens.access);
        dispatch(setUser(response.data.user));
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.log(error);
      setIsAuthorized(false);
    }
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (!token) {
      setIsAuthorized(false);
      return;
    }

    // check if token has expired
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;

    if (tokenExpiration < now) {
      await refreshToken();
    } else {
      await getUser();
    }
  };

  // use effects
  useEffect(() => {
    auth().catch((error) => {
      console.log(error);
      setIsAuthorized(false);
    });
  }, []);

  if (isAuthorized === null) {
    return <>Loading...</>;
  }

  return isAuthorized ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
