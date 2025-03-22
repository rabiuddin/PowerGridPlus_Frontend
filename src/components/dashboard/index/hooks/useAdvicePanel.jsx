import { useEffect, useState } from "react";
import { FiAlertTriangle, FiShield, FiTool, FiZap } from "react-icons/fi";
import { getAdviceDataApiCall } from "../../../../api/dashboard.api";
import { useNavigate } from "react-router-dom";

export const useAdvicePanel = () => {
  const [adviceData, setAdviceData] = useState(null);
  const navigate = useNavigate();

  const getAdviceData = async () => {
    const response = await getAdviceDataApiCall();
    if (response.success) {
      setAdviceData(
        response.data.map((advice) => ({
          id: Date.now().toString,
          type: "tip",
          title: "New Advice",
          description: advice,
          icon: FiZap,
          color: "text-green-500",
          bgColor: "bg-green-100",
        }))
      );
    } else {
      console.error(response);
    }
  };

  const handleLearnMore = (description) => {
    navigate("/dashboard/chatbot", {
      state: `Give me advice on this: ${description}`,
    });
  };

  useEffect(() => {
    getAdviceData();
  }, []);
  return { adviceData, handleLearnMore };
};
