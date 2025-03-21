"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiInfo,
  FiAlertTriangle,
  FiChevronRight,
  FiZap,
  FiShield,
  FiTool,
  FiRefreshCw,
} from "react-icons/fi";

// Sample advice data
const adviceData = [
  {
    id: 1,
    type: "tip",
    title: "Energy Saving Tip",
    description:
      "Lower your thermostat by 1°C to save up to 10% on your heating bill.",
    icon: FiZap,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    type: "alert",
    title: "Maintenance Required",
    description:
      "Your Living Room Thermostat battery is below 20%. Consider replacing it soon.",
    icon: FiAlertTriangle,
    color: "text-amber-500",
    bgColor: "bg-amber-100",
  },
  {
    id: 3,
    type: "security",
    title: "Security Recommendation",
    description:
      "Update your Front Door Lock firmware to the latest version for improved security.",
    icon: FiShield,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    id: 4,
    type: "maintenance",
    title: "Scheduled Maintenance",
    description: "Your smart home system is due for a routine check next week.",
    icon: FiTool,
    color: "text-gray-500",
    bgColor: "bg-gray-100",
  },
  {
    id: 5,
    type: "tip",
    title: "Optimize Your Devices",
    description:
      "Schedule your devices to turn off automatically when not in use to save energy.",
    icon: FiZap,
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
];

const AdvicePanel = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Filter advice based on active tab
  const filteredAdvice =
    activeTab === "all"
      ? adviceData
      : adviceData.filter((advice) => advice.type === activeTab);

  return (
    <motion.div
      className="flex flex-col bg-white border border-gray-100 h-full rounded-xl shadow-sm overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="border-b border-gray-100 p-6">
        <div className="flex justify-between items-center">
          <h2 className="flex text-gray-800 text-lg font-semibold items-center">
            <FiInfo className="h-5 text-primary w-5 mr-2" />
            Smart Advice
          </h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-primary transition-colors"
            title="Refresh Advice"
          >
            <FiRefreshCw className="h-5 w-5" />
          </motion.button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-100 pt-4 px-6">
        <div className="flex overflow-x-auto pb-4 scrollbar-thin space-x-2">
          <TabButton
            active={activeTab === "all"}
            onClick={() => setActiveTab("all")}
            label="All"
          />
          <TabButton
            active={activeTab === "tip"}
            onClick={() => setActiveTab("tip")}
            label="Tips"
            icon={<FiZap className="h-4 w-4 mr-1" />}
          />
          <TabButton
            active={activeTab === "alert"}
            onClick={() => setActiveTab("alert")}
            label="Alerts"
            icon={<FiAlertTriangle className="h-4 w-4 mr-1" />}
          />
          <TabButton
            active={activeTab === "security"}
            onClick={() => setActiveTab("security")}
            label="Security"
            icon={<FiShield className="h-4 w-4 mr-1" />}
          />
          <TabButton
            active={activeTab === "maintenance"}
            onClick={() => setActiveTab("maintenance")}
            label="Maintenance"
            icon={<FiTool className="h-4 w-4 mr-1" />}
          />
        </div>
      </div>

      {/* Advice List */}
      <div className="flex-grow overflow-auto">
        {filteredAdvice.length > 0 ? (
          <div className="divide-gray-100 divide-y">
            {filteredAdvice.map((advice) => (
              <AdviceItem key={advice.id} advice={advice} />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center">
            <p className="text-gray-500">
              No advice available in this category
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border-gray-100 border-t p-4">
        <button className="flex justify-center rounded-lg text-primary text-sm w-full font-medium hover:bg-primary/5 items-center py-2 transition-colors">
          View All Recommendations
          <FiChevronRight className="ml-1" />
        </button>
      </div>
    </motion.div>
  );
};

// Tab Button Component
const TabButton = ({ active, onClick, label, icon }) => (
  <motion.button
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
    onClick={onClick}
    className={`px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap flex items-center
      ${
        active
          ? "bg-primary text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
  >
    {icon}
    {label}
  </motion.button>
);

// Advice Item Component
const AdviceItem = ({ advice }) => (
  <motion.div
    className="p-4 hover:bg-gray-50 transition-colors"
    whileHover={{ x: 5 }}
  >
    <div className="flex">
      <div className={`p-2 rounded-lg ${advice.bgColor} mr-4 self-start`}>
        <advice.icon className={`h-5 w-5 ${advice.color}`} />
      </div>

      <div className="flex-1">
        <h3 className="text-gray-900 font-medium">{advice.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{advice.description}</p>

        <div className="flex justify-end mt-3">
          <button className="flex text-primary text-xs hover:underline items-center">
            Learn more
            <FiChevronRight className="h-3 w-3 ml-1" />
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

export default AdvicePanel;
