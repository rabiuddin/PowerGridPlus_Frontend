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
          {!filteredOrders ? (
            <OrdersLoadingSkeleton />
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

export default Orders;
