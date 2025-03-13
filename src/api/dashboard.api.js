import api from "../config/axios.config";

const path = "/api/dashboard";

export const getElectricityCostApiCall = async () => {
  try {
    const currentDate = new Date();
    const previousYearDate = new Date();
    previousYearDate.setDate(currentDate.getDate() - 2);

    // Format the dates to ISO strings with time and proper encoding
    const startDate = previousYearDate.toISOString();
    const endDate = currentDate.toISOString();

    const response = await api.post(`${path}/electricity-costs/`, {
      url: `https://dashboard.elering.ee/api/nps/price?start=${startDate}&end=${endDate}`,
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
