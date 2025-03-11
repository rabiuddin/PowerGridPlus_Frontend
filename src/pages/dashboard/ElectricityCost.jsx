"use client";
import { motion } from "framer-motion";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardFilters from "../../components/dashboard/electricity-cost/DashboardFilters";
import ElectricityGraph from "../../components/dashboard/electricity-cost/ElectricityGraph";
import DashboardHeader from "../../components/shared/dashboard/DashboardHeader";
import { FiZap, FiTrendingUp, FiTrendingDown, FiInfo } from "react-icons/fi";
import { useElectricityCost } from "../../components/dashboard/electricity-cost/hooks/useElectricityCost";

const ElectricityCost = () => {
  const { graphData, isLoading } = useElectricityCost();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Electricity Cost", href: "/dashboard/electricity-cost" },
  ];

  // Calculate if current price is higher or lower than previous
  const currentPrice =
    graphData && graphData.length > 0
      ? graphData[graphData.length - 1].price
      : 0;
  const previousPrice =
    graphData && graphData.length > 1
      ? graphData[graphData.length - 2].price
      : 0;
  const priceChange = currentPrice - previousPrice;
  const priceChangePercent = previousPrice
    ? (priceChange / previousPrice) * 100
    : 0;
  const isPriceUp = priceChange > 0;

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
        title="Electricity Cost"
        icon={FiZap}
        breadcrumbs={breadcrumbs}
      />

      <motion.div
        className="p-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Summary Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
          variants={itemVariants}
        >
          {/* Current Price Card */}
          <motion.div
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Current Price
                </h3>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900">
                    {isLoading ? (
                      <div className="h-8 w-24 bg-gray-200 animate-pulse rounded"></div>
                    ) : (
                      `€${currentPrice.toFixed(2)}`
                    )}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">per kWh</span>
                </div>
              </div>
              <div className="p-2 bg-[#0b6a62]/10 rounded-lg">
                <FiZap className="h-6 w-6 text-[#0b6a62]" />
              </div>
            </div>
          </motion.div>

          {/* Price Change Card */}
          <motion.div
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Price Change
                </h3>
                <div className="flex items-baseline">
                  {isLoading ? (
                    <div className="h-8 w-24 bg-gray-200 animate-pulse rounded"></div>
                  ) : (
                    <>
                      <span
                        className={`text-2xl font-bold ${
                          isPriceUp ? "text-red-500" : "text-green-500"
                        }`}
                      >
                        {isPriceUp ? "+" : ""}€
                        {Math.abs(priceChange).toFixed(2)}
                      </span>
                      <span
                        className={`ml-2 text-sm ${
                          isPriceUp ? "text-red-500" : "text-green-500"
                        }`}
                      >
                        ({isPriceUp ? "+" : ""}
                        {priceChangePercent.toFixed(1)}%)
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div
                className={`p-2 rounded-lg ${
                  isPriceUp ? "bg-red-100" : "bg-green-100"
                }`}
              >
                {isPriceUp ? (
                  <FiTrendingUp className="h-6 w-6 text-red-500" />
                ) : (
                  <FiTrendingDown className="h-6 w-6 text-green-500" />
                )}
              </div>
            </div>
          </motion.div>

          {/* Average Price Card */}
          <motion.div
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Average Price
                </h3>
                <div className="flex items-baseline">
                  {isLoading ? (
                    <div className="h-8 w-24 bg-gray-200 animate-pulse rounded"></div>
                  ) : (
                    <>
                      <span className="text-2xl font-bold text-gray-900">
                        €
                        {graphData && graphData.length > 0
                          ? (
                              graphData.reduce(
                                (sum, item) => sum + item.price,
                                0
                              ) / graphData.length
                            ).toFixed(2)
                          : "0.00"}
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        per kWh
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div className="p-2 bg-blue-100 rounded-lg">
                <FiInfo className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          variants={itemVariants}
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center mb-4 sm:mb-0">
                <FiZap className="w-5 h-5 mr-2 text-[#0b6a62]" />
                Electricity Cost Analysis
              </h2>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-[#0b6a62] text-white rounded-lg text-sm font-medium hover:bg-[#22a196] transition-colors flex items-center justify-center"
              >
                Download Report
              </motion.button>
            </div>
          </div>

          {/* Filters */}
          {/* <DashboardFilters /> */}

          {/* Graph */}
          <div className="p-6">
            {isLoading ? (
              <div className="h-80 w-full bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Loading data...</span>
              </div>
            ) : graphData && graphData.length > 0 ? (
              <ElectricityGraph graphData={graphData} />
            ) : (
              <div className="h-80 w-full bg-gray-50 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">No data available</span>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-500 flex items-center">
              <FiInfo className="mr-2" />
              Data is updated every hour. Last updated:{" "}
              {new Date().toLocaleTimeString()}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default ElectricityCost;
