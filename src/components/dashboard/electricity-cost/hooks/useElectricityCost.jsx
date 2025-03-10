import { useEffect, useState } from "react";
import { getElectricityCostApiCall } from "../../../../api/dashboard.api";
import { dummyGraphData } from "../../../../data/blogs";

export const useElectricityCost = () => {
  // states
  const [graphData, setGraphData] = useState(null);

  const getElectricityCost = async () => {
    const response = await getElectricityCostApiCall();

    if (response.success) {
      const { ee } = response.data;
      //   const toSkip = ee.length / 52;
      //   let count = 0;
      //   ee.filter((item) => {
      //     console.log("sad");
      //     if (count == toSkip) {
      //       count = 0;
      //       return item;
      //     }
      //     count++;
      //   });
      setGraphData(ee);
    }
  };
  // useEffects
  useEffect(() => {
    getElectricityCost();
  }, []);

  return { graphData };
};
