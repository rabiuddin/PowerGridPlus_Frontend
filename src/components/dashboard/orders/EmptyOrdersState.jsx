"use client"

import { motion } from "framer-motion"
import { FiShoppingBag, FiFilter, FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"

const EmptyOrdersState = ({ hasFilters, onResetFilters }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-sm p-8 text-center"
    >
      <div className="max-w-md mx-auto">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <FiShoppingBag className="w-10 h-10 text-primary" />
        </div>

        {hasFilters ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">No matching orders found</h2>
            <p className="text-gray-600 mb-8">
              We couldn't find any orders matching your current filters. Try adjusting your search criteria or reset
              filters to see all orders.
            </p>
            <button
              onClick={onResetFilters}
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <FiFilter className="mr-2 -ml-1 h-5 w-5" />
              Reset Filters
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">No orders yet</h2>
            <p className="text-gray-600 mb-8">
              You haven't placed any orders yet. Browse our products and make your first purchase to see your order
              history here.
            </p>
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Browse Products
                <FiArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </motion.button>
            </Link>
          </>
        )}
      </div>
    </motion.div>
  )
}

export default EmptyOrdersState

