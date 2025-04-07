import dayjs from "dayjs";
export const unixToDate = (unixTimestamp) => {
  // Convert to JavaScript Date object (multiply by 1000 to convert seconds to milliseconds)
  const date = new Date(unixTimestamp * 1000);

  // Extract day, month, year, hours, and minutes with padding
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = String(date.getFullYear()).slice(-2); // Get last two digits for year
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  // Combine into the desired format
  const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;
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

// Format date to a readable string
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Format date to readable string
export const formatOrderDate = (dateString, includeTime = false) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  if (includeTime) {
    return date.toLocaleString("en-US", {
      ...options,
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return date.toLocaleDateString("en-US", options);
};

// Format price with currency
export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};
