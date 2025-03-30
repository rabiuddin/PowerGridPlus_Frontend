"use client";
import { motion } from "framer-motion";
import { FiZap, FiWifi, FiAlertTriangle, FiTrendingUp } from "react-icons/fi";

const DashboardCards = () => {
  // Sample data - in a real app, this would come from an API or state
  const summaryData = {
    activeDevices: 12,
    energyUsage: 24.8,
    alerts: 3,
    savings: 1.5,
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-2">
      {/* Active Devices Card */}
      <motion.div
        className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">
              Active Devices
            </h3>
            <div className="flex items-baseline">
              <span className="text-2xl text-gray-900 font-bold">
                {summaryData.activeDevices}
              </span>
              <span className="text-gray-500 text-sm ml-2">devices</span>
            </div>
          </div>
          <div className="bg-blue-100 p-2 rounded-lg">
            <FiWifi className="h-6 text-blue-500 w-6" />
          </div>
        </div>
      </motion.div>

      {/* Energy Usage Card */}
      <motion.div
        className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">
              Energy Usage
            </h3>
            <div className="flex items-baseline">
              <span className="text-2xl text-gray-900 font-bold">
                {summaryData.energyUsage}
              </span>
              <span className="text-gray-500 text-sm ml-2">kWh</span>
            </div>
          </div>
          <div className="bg-primary/10 p-2 rounded-lg">
            <FiZap className="h-6 text-primary w-6" />
          </div>
        </div>
      </motion.div>

      {/* Alerts Card */}
      <motion.div
        className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">
              Active Alerts
            </h3>
            <div className="flex items-baseline">
              <span className="text-2xl text-gray-900 font-bold">
                {summaryData.alerts}
              </span>
              <span className="text-gray-500 text-sm ml-2">alerts</span>
            </div>
          </div>
          <div className="bg-amber-100 p-2 rounded-lg">
            <FiAlertTriangle className="h-6 text-amber-500 w-6" />
          </div>
        </div>
      </motion.div>

      {/* Savings Card */}
      <motion.div
        className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">
              Monthly Savings
            </h3>
            <div className="flex items-baseline">
              <span className="text-2xl text-gray-900 font-bold">
                €{summaryData.savings}
              </span>
              <span className="text-green-500 text-sm ml-2">+12%</span>
            </div>
          </div>
          <div className="bg-green-100 p-2 rounded-lg">
            <FiTrendingUp className="h-6 text-green-500 w-6" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardCards;
