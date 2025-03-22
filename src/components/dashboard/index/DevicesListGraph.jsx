"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiWifi,
  FiFilter,
  FiRefreshCw,
  FiCalendar,
  FiDownload,
  FiZoomIn,
  FiInfo,
} from "react-icons/fi";
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

// Sample device data - in a real app, this would come from an API
const deviceData = [
  {
    id: 1,
    name: "Living Room Thermostat",
    type: "Thermostat",
    location: "Living Room",
    color: "#0b6a62",
    data: [5, 7, 4, 6, 8, 7, 9],
  },
  {
    id: 2,
    name: "Front Door Lock",
    type: "Smart Lock",
    location: "Front Door",
    color: "#22a196",
    data: [3, 4, 2, 5, 4, 6, 5],
  },
  {
    id: 3,
    name: "Kitchen Smart Display",
    type: "Display",
    location: "Kitchen",
    color: "#3498db",
    data: [8, 6, 7, 5, 9, 8, 7],
  },
  {
    id: 4,
    name: "Bedroom Smart Light",
    type: "Light",
    location: "Bedroom",
    color: "#e74c3c",
    data: [4, 5, 6, 7, 5, 4, 6],
  },
];

const DevicesListGraph = () => {
  const [timeRange, setTimeRange] = useState("week");
  const [selectedDevices, setSelectedDevices] = useState(
    deviceData.map((device) => device.id)
  );
  const [isLoading, setIsLoading] = useState(false);

  // Handle time range change
  const handleTimeRangeChange = (range) => {
    setIsLoading(true);
    setTimeRange(range);

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  // Toggle device selection
  const toggleDeviceSelection = (deviceId) => {
    setSelectedDevices((prev) => {
      if (prev.includes(deviceId)) {
        return prev.filter((id) => id !== deviceId);
      } else {
        return [...prev, deviceId];
      }
    });
  };

  // Filter devices based on selection
  const filteredDevices = deviceData.filter((device) =>
    selectedDevices.includes(device.id)
  );

  // Prepare chart data
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const chartData = {
    labels: days,
    datasets: filteredDevices.map((device) => ({
      label: device.name,
      data: device.data,
      borderColor: device.color,
      backgroundColor: `${device.color}20`,
      pointBackgroundColor: device.color,
      borderWidth: 2,
      tension: 0.4,
      fill: true,
    })),
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 12,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "#0b6a62",
        bodyColor: "#333",
        borderColor: "#ddd",
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        displayColors: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Power Usage (kWh)",
          color: "#666",
        },
        grid: {
          color: "rgba(240, 240, 240, 0.8)",
          borderDash: [5, 5],
        },
        ticks: {
          callback: (value) => `${value} kWh`,
        },
      },
      x: {
        grid: {
          color: "rgba(240, 240, 240, 0.8)",
          borderDash: [5, 5],
        },
        title: {
          display: true,
          text: "Day",
          color: "#666",
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center mb-4 sm:mb-0">
            <FiWifi className="w-5 h-5 mr-2 text-primary" />
            IoT Devices Power Usage
          </h2>

          <div className="flex space-x-2">
            <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors flex items-center">
              <FiFilter className="mr-2" />
              Filter
            </button>
            <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors flex items-center">
              <FiRefreshCw className="mr-2" />
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="p-4 bg-gray-50 border-b border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          {/* Time Range Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 mr-2 flex items-center">
              <FiCalendar className="mr-1" /> Time Range:
            </span>
            <div className="flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              {["day", "week", "month", "year"].map((range) => (
                <button
                  key={range}
                  onClick={() => handleTimeRangeChange(range)}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                    timeRange === range
                      ? "bg-primary text-white shadow-sm"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {range.charAt(0).toUpperCase() + range.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors">
              <FiZoomIn className="w-5 h-5" />
            </button>
            <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              <FiDownload className="w-4 h-4 mr-2" />
              Export Data
            </button>
          </div>
        </div>
      </div>

      {/* Device Selection */}
      <div className="p-4 border-b border-gray-100">
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Select Devices:
        </h3>
        <div className="flex flex-wrap gap-2">
          {deviceData.map((device) => (
            <button
              key={device.id}
              onClick={() => toggleDeviceSelection(device.id)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center ${
                selectedDevices.includes(device.id)
                  ? "bg-primary/10 text-primary border border-primary/30"
                  : "bg-gray-100 text-gray-700 border border-transparent hover:bg-gray-200"
              }`}
            >
              <span
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: device.color }}
              ></span>
              {device.name}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="p-6">
        <div className="relative h-[400px]">
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                <p className="mt-3 text-sm text-gray-600">Loading data...</p>
              </div>
            </div>
          ) : null}

          {selectedDevices.length === 0 ? (
            <div className="h-full w-full flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">
                Please select at least one device to display data
              </p>
            </div>
          ) : (
            <Line data={chartData} options={chartOptions} />
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center">
          <FiInfo className="mr-2" />
          Data is updated every hour. Last updated:{" "}
          {new Date().toLocaleTimeString()}
        </div>
        <div>
          Showing data for: <span className="font-medium">{timeRange}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default DevicesListGraph;
