"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardHeader from "../../components/shared/dashboard/DashboardHeader";
import { FiHome, FiList, FiBarChart2 } from "react-icons/fi";
import DashboardCards from "../../components/dashboard/index/DashboardCards";
import DevicesList from "../../components/dashboard/index/DevicesList";
import DevicesListGraph from "../../components/dashboard/index/DevicesListGraph";
import AdvicePanel from "../../components/dashboard/index/AdvicePanel";
import {
  containerVariants,
  itemVariants,
} from "../../variants/dashboard.variants";

const Dashboard = () => {
  // State to toggle between list and graph view
  const [viewMode, setViewMode] = useState("list"); // "list" or "graph"

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  return (
    <DashboardLayout>
      <DashboardHeader
        title="Dashboard"
        icon={FiHome}
        breadcrumbs={breadcrumbs}
      />

      <motion.div
        className="p-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Summary Cards */}
        <motion.div variants={itemVariants}>
          <DashboardCards />
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6"
          variants={itemVariants}
        >
          {/* IoT Devices Section - Takes up 2/3 of the space on large screens */}
          <div className="lg:col-span-2">
            {/* View Toggle Buttons */}
            <div className="mb-4 flex justify-end">
              <div className="bg-white rounded-lg shadow-sm p-1 inline-flex">
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-4 py-2 rounded-md flex items-center text-sm font-medium transition-colors ${
                    viewMode === "list"
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <FiList className="mr-2" />
                  List View
                </button>
                <button
                  onClick={() => setViewMode("graph")}
                  className={`px-4 py-2 rounded-md flex items-center text-sm font-medium transition-colors ${
                    viewMode === "graph"
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <FiBarChart2 className="mr-2" />
                  Graph View
                </button>
              </div>
            </div>

            {/* Conditional rendering based on view mode */}
            <motion.div
              key={viewMode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {viewMode === "list" ? <DevicesList /> : <DevicesListGraph />}
            </motion.div>
          </div>

          {/* Advice Panel - Takes up 1/3 of the space on large screens */}
          <div className="lg:col-span-1">
            <AdvicePanel />
          </div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Dashboard;
