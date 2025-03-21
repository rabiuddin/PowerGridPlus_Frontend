"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { FiDownload, FiZoomIn, FiRefreshCw } from "react-icons/fi";
import { unixToDate } from "../../../utils/utils";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function ElectricityGraph({ graphData }) {
  const chartRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [timeRange, setTimeRange] = useState("all"); // all, month, week, day
  const [isLoading, setIsLoading] = useState(false);

  // Filter data based on selected time range
  const getFilteredData = () => {
    if (timeRange === "all" || !graphData) return graphData;

    const now = new Date();
    const filterDate = new Date();

    switch (timeRange) {
      case "month":
        filterDate.setMonth(now.getMonth() - 1);
        break;
      case "week":
        filterDate.setDate(now.getDate() - 7);
        break;
      case "day":
        filterDate.setDate(now.getDate() - 1);
        break;
      default:
        return graphData;
    }

    // Filter data based on date
    // This is a simplified example - adjust based on your actual data structure
    return graphData.filter((item) => {
      const itemDate = new Date(item.timestamp || Date.now());
      return itemDate >= filterDate;
    });
  };

  const filteredData = getFilteredData();

  // Simulate loading when changing time range
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [timeRange]);

  // Animate chart on initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: isAnimated ? 1000 : 0,
      easing: "easeOutQuart",
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "#0b6a62",
        bodyColor: "#333",
        borderColor: "#ddd",
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 13,
        },
        callbacks: {
          title: (tooltipItems) => `${tooltipItems[0].label}`,
          label: (context) => `Price: €${context.raw.toFixed(2)}`,
          labelTextColor: () => "#333",
        },
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(240, 240, 240, 0.8)",
          borderDash: [5, 5],
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 11,
          },
          color: "#666",
        },
        title: {
          display: true,
          text: "Day",
          color: "#666",
          font: {
            size: 12,
            weight: "normal",
          },
          padding: { top: 10 },
        },
      },
      y: {
        grid: {
          color: "rgba(240, 240, 240, 0.8)",
          borderDash: [5, 5],
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 11,
          },
          color: "#666",
          callback: (value) => `€${value.toFixed(2)}`,
        },
        title: {
          display: true,
          text: "Price (EUR)",
          color: "#666",
          font: {
            size: 12,
            weight: "normal",
          },
          padding: { bottom: 10 },
        },
        beginAtZero: true,
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
      point: {
        radius: 4,
        hoverRadius: 6,
        backgroundColor: "#fff",
        borderWidth: 3,
        hoverBorderWidth: 3,
      },
    },
  };

  // Chart data
  const data = {
    labels: filteredData?.map((item) => unixToDate(item.timestamp)) || [],
    datasets: [
      {
        label: "Price",
        data: filteredData?.map((item) => item.price) || [],
        borderColor: "#0b6a62",
        backgroundColor: "#0b6a62",
        pointBackgroundColor: "#fff",
        pointBorderColor: "#0b6a62",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#22a196",
        tension: 0.4,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(34, 161, 150, 0.3)");
          gradient.addColorStop(1, "rgba(34, 161, 150, 0)");
          return gradient;
        },
      },
    ],
  };

  // Handle download as CSV
  const downloadCSV = () => {
    if (!filteredData || filteredData.length === 0) return;

    // Create CSV content
    const headers = ["Week", "Price"];
    const csvContent = [
      headers.join(","),
      ...filteredData.map((item) => `${item.week},${item.price}`),
    ].join("\n");

    // Create download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `electricity_prices_${timeRange}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-lg">
      {/* Chart Controls */}
      <div className="flex flex-col border-b border-gray-100 justify-between items-start pb-6 pt-4 px-6 sm:flex-row sm:items-center">
        {/* Time Range Selector */}
        <div className="flex items-center mb-4 sm:mb-0 space-x-2">
          <span className="text-gray-500 text-sm mr-2">Time Range:</span>
          <div className="flex bg-gray-100 p-1 rounded-lg">
            {["day", "week", "month", "all"].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  timeRange === range
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-primary transition-colors"
            title="Refresh Data"
          >
            <FiRefreshCw className="h-5 w-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-primary transition-colors"
            title="Zoom In"
          >
            <FiZoomIn className="h-5 w-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadCSV}
            className="flex bg-primary rounded-lg text-sm text-white font-medium hover:bg-[#22a196] items-center px-4 py-2 transition-colors"
          >
            <FiDownload className="h-4 w-4 mr-2" />
            Download CSV
          </motion.button>
        </div>
      </div>

      {/* Chart */}
      <div className="p-6">
        <motion.div
          className="h-[400px] w-full relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {!graphData ? (
            <div className="flex bg-gray-50 bg-opacity-75 justify-center rounded-lg absolute inset-0 items-center z-10">
              <div className="flex flex-col items-center">
                <div className="border-4 border-primary/20 border-t-primary h-10 rounded-full w-10 animate-spin"></div>
                <p className="text-gray-600 text-sm mt-3">Loading data...</p>
              </div>
            </div>
          ) : null}

          {filteredData && filteredData.length > 0 ? (
            <Line ref={chartRef} options={options} data={data} />
          ) : (
            <div className="flex bg-gray-50 h-full justify-center rounded-lg w-full items-center">
              <p className="text-gray-500">
                No data available for the selected time range
              </p>
            </div>
          )}
        </motion.div>

        {/* Legend */}
        <div className="flex justify-center items-center mt-4">
          <div className="flex items-center">
            <div className="bg-primary h-3 rounded-full w-3 mr-2"></div>
            <span className="text-gray-600 text-sm">Price (EUR)</span>
          </div>
        </div>
      </div>

      {/* Chart Footer */}
      <div className="bg-gray-50 border-gray-100 border-t rounded-b-lg px-6 py-3">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-xs">
            {filteredData && filteredData.length > 0
              ? `Showing ${filteredData.length} data points`
              : "No data available"}
          </p>
          <p className="text-gray-500 text-xs">
            Last updated: {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
