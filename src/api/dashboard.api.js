import api from "../config/axios.config";
import { FRONTEND_URL } from "../config/constants";

export const getElectricityCostApiCall = async () => {
  try {
    const currentDate = new Date();
    const previousYearDate = new Date();
    previousYearDate.setFullYear(currentDate.getFullYear() - 1);

    // Format the dates to ISO strings with time and proper encoding
    const startDate = previousYearDate.toISOString();
    const endDate = currentDate.toISOString();

    const response = await api.get(
      `${FRONTEND_URL}/api/api/nps/price?start=${startDate}&end=${endDate}`
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
