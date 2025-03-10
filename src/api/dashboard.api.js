import api from "../config/axios.config";
import { dummyGraphData } from "../data/blogs";

export const getElectricityCostApiCall = async () => {
  try {
    const currentDate = new Date();
    const previousYearDate = new Date();
    previousYearDate.setFullYear(currentDate.getFullYear() - 1);

    // Format the dates to ISO strings with time and proper encoding
    const startDate = previousYearDate.toISOString();
    const endDate = currentDate.toISOString();

    // const response = await api.get(
    //   `https://dashboard.elering.ee/api/nps/price?start=${startDate}&end=${endDate}`
    // );

    const response = { data: dummyGraphData };
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
