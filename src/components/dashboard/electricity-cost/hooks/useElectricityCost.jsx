import { useEffect, useState } from "react";
import { getElectricityCostApiCall } from "../../../../api/dashboard.api";

export const useElectricityCost = () => {
  // states
  const [graphData, setGraphData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getElectricityCost = async () => {
    setIsLoading(true);
    const response = await getElectricityCostApiCall();

    if (response.success) {
      const { ee } = response.data;
      // const updatedData = await processGraphData(ee);
      setGraphData(ee);
    }
    setIsLoading(false);
  };
  // useEffects
  useEffect(() => {
    getElectricityCost();
  }, []);

  return { graphData, isLoading };
};
