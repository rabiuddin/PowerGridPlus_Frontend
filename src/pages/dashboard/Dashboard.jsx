"use client";
import { motion } from "framer-motion";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardHeader from "../../components/shared/dashboard/DashboardHeader";
import { FiHome } from "react-icons/fi";
import DashboardCards from "../../components/dashboard/index/DashboardCards";
import DevicesList from "../../components/dashboard/index/DevicesList";
import AdvicePanel from "../../components/dashboard/index/AdvicePanel";

const Dashboard = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

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
          {/* IoT Devices List - Takes up 2/3 of the space on large screens */}
          <div className="lg:col-span-2">
            <DevicesList />
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
