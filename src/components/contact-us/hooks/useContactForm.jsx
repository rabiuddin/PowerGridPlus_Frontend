import { useState } from "react";
import { contactUsApiCall } from "../../../api/emails.api";
import toast from "react-hot-toast";

export const useContactForm = () => {
  // use states
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  // functions
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const response = await contactUsApiCall(formData);

    if (response.success) {
      toast.success(response.message);
      setFormData(initialState);
    } else {
      console.error(response.message);
    }

    setLoading(false);
  };

  return { formData, handleInputChange, handleFormSubmit, loading };
};
