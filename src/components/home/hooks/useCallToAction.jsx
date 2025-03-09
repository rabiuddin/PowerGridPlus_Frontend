import { useState } from "react";
import { getYourDeviceNowApiCall } from "../../../api/emails.api";
import toast from "react-hot-toast";

export const useCallToAction = () => {
  // use states
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
  };
  const [formData, setFormData] = useState(initialFormState);
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

    const response = await getYourDeviceNowApiCall(formData);

    if (response.success) {
      toast.success(response.message);
      setFormData(initialFormState);
    } else {
      console.error(response.message);
    }

    setLoading(false);
  };

  return { formData, handleInputChange, handleFormSubmit, loading };
};
