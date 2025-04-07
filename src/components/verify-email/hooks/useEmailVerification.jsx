import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { verifyEmailApiCall } from "../../../api/users.api";

export const useEmailVerification = () => {
  const [loading, setLoading] = useState(true);
  const { uidb64, token } = useParams();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Function to verify email with token
  const verifyEmail = async () => {
    setError(null);
    if (!token || !uidb64) {
      setError("Verification token and uid is required");
      setLoading(false);
      return;
    }

    const response = await verifyEmailApiCall(uidb64, token);

    if (response.success) {
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } else {
      setError(response.detail || response.message || "An Error occured");
      console.error(response);
    }

    setLoading(false);
  };

  return {
    verifyEmail,
    loading,
    error,
  };
};
