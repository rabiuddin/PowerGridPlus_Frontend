"use client";
import { motion } from "framer-motion";
import { FiZap, FiWifi, FiAlertTriangle, FiTrendingUp } from "react-icons/fi";

const DashboardCards = () => {
  // Sample data - in a real app, this would come from an API or state
  const summaryData = {
    activeDevices: 12,
    energyUsage: 245.8,
    alerts: 3,
    savings: 18.5,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Active Devices Card */}
      <motion.div
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Active Devices
            </h3>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-900">
                {summaryData.activeDevices}
              </span>
              <span className="ml-2 text-sm text-gray-500">devices</span>
            </div>
          </div>
          <div className="p-2 bg-blue-100 rounded-lg">
            <FiWifi className="h-6 w-6 text-blue-500" />
          </div>
        </div>
      </motion.div>

      {/* Energy Usage Card */}
      <motion.div
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Energy Usage
            </h3>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-900">
                {summaryData.energyUsage}
              </span>
              <span className="ml-2 text-sm text-gray-500">kWh</span>
            </div>
          </div>
          <div className="p-2 bg-[#0b6a62]/10 rounded-lg">
            <FiZap className="h-6 w-6 text-[#0b6a62]" />
          </div>
        </div>
      </motion.div>

      {/* Alerts Card */}
      <motion.div
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Active Alerts
            </h3>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-900">
                {summaryData.alerts}
              </span>
              <span className="ml-2 text-sm text-gray-500">alerts</span>
            </div>
          </div>
          <div className="p-2 bg-amber-100 rounded-lg">
            <FiAlertTriangle className="h-6 w-6 text-amber-500" />
          </div>
        </div>
      </motion.div>

      {/* Savings Card */}
      <motion.div
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Monthly Savings
            </h3>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-900">
                €{summaryData.savings}
              </span>
              <span className="ml-2 text-sm text-green-500">+12%</span>
            </div>
          </div>
          <div className="p-2 bg-green-100 rounded-lg">
            <FiTrendingUp className="h-6 w-6 text-green-500" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardCards;
