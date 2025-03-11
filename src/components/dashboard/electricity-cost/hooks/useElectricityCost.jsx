import { useEffect, useState } from "react";
import { getElectricityCostApiCall } from "../../../../api/dashboard.api";
import { dummyGraphData } from "../../../../data/blogs";
import { processGraphData } from "../../../../utils/utils";

export const useElectricityCost = () => {
  // states
  const [graphData, setGraphData] = useState(null);

  const getElectricityCost = async () => {
    const response = await getElectricityCostApiCall();

    if (response.success) {
      const { ee } = response.data;
      const updatedData = await processGraphData(ee);
      setGraphData(updatedData);
      console.log(updatedData);
    }
  };
  // useEffects
  useEffect(() => {
    getElectricityCost();
  }, []);

  return { graphData };
};
