import dayjs from "dayjs";
export const unixToDate = (unixTimestamp) => {
  // Convert to JavaScript Date object (multiply by 1000 to convert seconds to milliseconds)
  const date = new Date(unixTimestamp * 1000);

  // Extract day, month, and year with padding
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = String(date.getFullYear()).slice(-2); // Get last two digits for year

  // Combine into the desired format
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

export const processGraphData = async (data) => {
  // Object to hold the latest price per week
  const weeklyData = {};

  data.forEach((item) => {
    // Convert timestamp to the start of the week
    const week = dayjs
      .unix(item.timestamp)
      .startOf("week")
      .format("YYYY-MM-DD");

    // If no entry or current item is later, update it
    if (!weeklyData[week] || item.timestamp > weeklyData[week].timestamp) {
      weeklyData[week] = { timestamp: item.timestamp, price: item.price };
    }
  });

  // Prepare final data (latest price by week)
  return Object.keys(weeklyData).map((week) => ({
    week,
    price: weeklyData[week].price,
  }));
};
