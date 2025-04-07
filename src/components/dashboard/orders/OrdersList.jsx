"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import OrderCard from "./OrderCard"
import OrderDetails from "./OrderDetails"
import Pagination from "./Pagination"

const OrdersList = ({ orders }) => {
  const [expandedOrderId, setExpandedOrderId] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const ordersPerPage = 5

  // Calculate pagination
  const indexOfLastOrder = currentPage * ordersPerPage
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder)
  const totalPages = Math.ceil(orders.length / ordersPerPage)

  const handleOrderClick = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Order History</h2>
      </div>

      <div className="divide-y divide-gray-100">
        {currentOrders.map((order) => (
          <div key={order.id}>
            <OrderCard
              order={order}
              isExpanded={expandedOrderId === order.id}
              onClick={() => handleOrderClick(order.id)}
            />

            <AnimatePresence>
              {expandedOrderId === order.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden bg-gray-50"
                >
                  <OrderDetails order={order} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="p-4 border-t border-gray-100">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      )}
    </div>
  )
}

export default OrdersList

