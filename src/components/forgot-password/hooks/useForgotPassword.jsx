import { useState } from "react";
import { resetPasswordMailApiCall } from "../../../api/emails.api";

export const useForgotPassword = () => {
  //states
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // API call
    const response = await resetPasswordMailApiCall({ email });

    if (response.success) {
      setIsSuccess(true);
      console.log(response.message);
    } else {
      console.error(response.message);
      setError(response.message);
    }

    setIsSubmitting(false);
  };
  return { handleSubmit, setEmail, email, error, isSubmitting, isSuccess };
};
