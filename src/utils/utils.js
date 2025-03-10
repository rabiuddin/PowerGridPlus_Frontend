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
