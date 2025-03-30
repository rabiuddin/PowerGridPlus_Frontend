"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiSearch, FiFilter, FiX, FiChevronDown } from "react-icons/fi"
import DateRangePicker from "./DateRangePicker"

const OrderFilters = ({
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
}) => {
  const [showFilters, setShowFilters] = useState(false)

  // Status options
  const statusOptions = [
    { value: "all", label: "All Statuses" },
    { value: "processing", label: "Processing" },
    { value: "shipped", label: "Shipped" },
    { value: "delivered", label: "Delivered" },
    { value: "cancelled", label: "Cancelled" },
    { value: "refunded", label: "Refunded" },
    { value: "pending", label: "Pending" },
    { value: "completed", label: "Completed" },
  ]

  // Sort options
  const sortOptions = [
    { value: "date-desc", label: "Newest First" },
    { value: "date-asc", label: "Oldest First" },
    { value: "total-desc", label: "Highest Amount" },
    { value: "total-asc", label: "Lowest Amount" },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-grow">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search orders by ID or product..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm("")} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <FiX className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Toggle Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <FiFilter className="mr-2 -ml-1 h-4 w-4" />
            Filters
            <FiChevronDown className={`ml-2 h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </button>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Expanded Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200">
                {/* Status Filter */}
                <div>
                  <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
                    Order Status
                  </label>
                  <select
                    id="status-filter"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                  >
                    {statusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                  <DateRangePicker
                    startDate={dateRange.startDate}
                    endDate={dateRange.endDate}
                    onChange={setDateRange}
                  />
                </div>
              </div>

              {/* Reset Filters Button */}
              {hasActiveFilters && (
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={resetFilters}
                    className="inline-flex items-center px-3 py-1.5 text-sm text-primary hover:text-primary/80 focus:outline-none"
                  >
                    <FiX className="mr-1 h-4 w-4" />
                    Reset Filters
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default OrderFilters

