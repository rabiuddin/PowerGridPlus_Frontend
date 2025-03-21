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
          className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3"
          variants={itemVariants}
        >
          {/* Current Price Card */}
          <motion.div
            className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-500 text-sm font-medium mb-1">
                  Current Price
                </h3>
                <div className="flex items-baseline">
                  <span className="text-2xl text-gray-900 font-bold">
                    {isLoading ? (
                      <div className="bg-gray-200 h-8 rounded w-24 animate-pulse"></div>
                    ) : (
                      `€${currentPrice.toFixed(2)}`
                    )}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">per kWh</span>
                </div>
              </div>
              <div className="bg-primary/10 p-2 rounded-lg">
                <FiZap className="h-6 text-primary w-6" />
              </div>
            </div>
          </motion.div>

          {/* Price Change Card */}
          <motion.div
            className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-500 text-sm font-medium mb-1">
                  Price Change
                </h3>
                <div className="flex items-baseline">
                  {isLoading ? (
                    <div className="bg-gray-200 h-8 rounded w-24 animate-pulse"></div>
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
                  <FiTrendingUp className="h-6 text-red-500 w-6" />
                ) : (
                  <FiTrendingDown className="h-6 text-green-500 w-6" />
                )}
              </div>
            </div>
          </motion.div>

          {/* Average Price Card */}
          <motion.div
            className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-500 text-sm font-medium mb-1">
                  Average Price
                </h3>
                <div className="flex items-baseline">
                  {isLoading ? (
                    <div className="bg-gray-200 h-8 rounded w-24 animate-pulse"></div>
                  ) : (
                    <>
                      <span className="text-2xl text-gray-900 font-bold">
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
                      <span className="text-gray-500 text-sm ml-2">
                        per kWh
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div className="bg-blue-100 p-2 rounded-lg">
                <FiInfo className="h-6 text-blue-500 w-6" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
          variants={itemVariants}
        >
          {/* Header */}
          <div className="border-b border-gray-100 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="flex text-gray-800 text-lg font-semibold items-center mb-4 sm:mb-0">
                <FiZap className="h-5 text-primary w-5 mr-2" />
                Electricity Cost Analysis
              </h2>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex bg-primary justify-center rounded-lg text-sm text-white font-medium hover:bg-[#22a196] items-center px-4 py-2 transition-colors"
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
              <div className="flex bg-gray-100 h-80 justify-center rounded-lg w-full animate-pulse items-center">
                <div className="flex flex-col items-center">
                  <div className="border-4 border-primary/20 border-t-primary h-10 rounded-full w-10 animate-spin"></div>
                  <p className="text-gray-600 text-sm mt-3">Loading data...</p>
                </div>
              </div>
            ) : graphData && graphData.length > 0 ? (
              <ElectricityGraph graphData={graphData} />
            ) : (
              <div className="flex bg-gray-50 h-80 justify-center rounded-lg w-full items-center">
                <span className="text-gray-500">No data available</span>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 border-gray-100 border-t px-6 py-4">
            <p className="flex text-gray-500 text-xs items-center">
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
