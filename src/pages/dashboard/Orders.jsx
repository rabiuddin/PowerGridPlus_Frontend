"use client";

import { motion } from "framer-motion";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardHeader from "../../components/shared/dashboard/DashboardHeader";
import OrdersList from "../../components/dashboard/orders/OrdersList";
import OrderFilters from "../../components/dashboard/orders/OrderFilters";
import EmptyOrdersState from "../../components/dashboard/orders/EmptyOrdersState";
import { FiShoppingBag, FiRefreshCw } from "react-icons/fi";
import {
  containerVariants,
  itemVariants,
} from "../../variants/dashboard.variants";
import { useOrders } from "../../components/dashboard/orders/hooks/useOrders";

const Orders = () => {
  const {
    orders,
    filteredOrders,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    dateRange,
    setDateRange,
    sortOption,
    setSortOption,
    resetFilters,
    hasActiveFilters,
  } = useOrders();

  // Breadcrumbs for the header
  const breadcrumbs = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "My Orders", href: "/dashboard/orders" },
  ];

  return (
    <DashboardLayout>
      <DashboardHeader
        title="My Orders"
        icon={FiShoppingBag}
        breadcrumbs={breadcrumbs}
      />

      <motion.div
        className="p-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Filters Section */}
        <motion.div variants={itemVariants} className="mb-6">
          <OrderFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            dateRange={dateRange}
            setDateRange={setDateRange}
            sortOption={sortOption}
            setSortOption={setSortOption}
            resetFilters={resetFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </motion.div>

        {/* Orders List or Empty State */}
        <motion.div variants={itemVariants}>
          {isLoading ? (
            <OrdersLoadingSkeleton />
          ) : error ? (
            <OrdersErrorState error={error} />
          ) : filteredOrders.length > 0 ? (
            <OrdersList orders={filteredOrders} />
          ) : (
            <EmptyOrdersState
              hasFilters={hasActiveFilters}
              onResetFilters={resetFilters}
            />
          )}
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

// Loading Skeleton
const OrdersLoadingSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="h-7 bg-gray-200 rounded w-1/4 animate-pulse"></div>
      </div>
      <div className="divide-y divide-gray-100">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="h-5 bg-gray-200 rounded w-32 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-48 animate-pulse"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-5 bg-gray-200 rounded w-24 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
              </div>
              <div className="h-8 bg-gray-200 rounded w-24 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Error State
const OrdersErrorState = ({ error }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 text-center">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          className="w-8 h-8 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        Failed to load orders
      </h3>
      <p className="text-gray-500 mb-4">
        {error || "An unexpected error occurred. Please try again later."}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        <FiRefreshCw className="mr-2 -ml-1 h-4 w-4" />
        Retry
      </button>
    </div>
  );
};

export default Orders;
