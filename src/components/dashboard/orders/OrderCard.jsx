"use client";

import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import OrderStatusBadge from "./OrderStatusBadge";
import { formatOrderDate, formatPrice } from "../../../utils/utils";

const OrderCard = ({ order, isExpanded, onClick }) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.01)" }}
      className="p-6 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Order ID and Date */}
        <div>
          <h3 className="text-lg font-medium text-gray-900">
            Order #{order.orderNumber}
          </h3>
          <p className="text-sm text-gray-500">
            Placed on {formatOrderDate(order.orderDate)}
          </p>
        </div>

        {/* Order Total and Items Count */}
        <div className="text-right sm:text-left">
          <p className="font-medium text-gray-900">
            {formatPrice(order.total)}
          </p>
          <p className="text-sm text-gray-500">
            {order.items.length} {order.items.length === 1 ? "item" : "items"}
          </p>
        </div>

        {/* Order Status and Expand Button */}
        <div className="flex items-center gap-3">
          <OrderStatusBadge status={order.status} />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-1 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
            aria-label={
              isExpanded ? "Collapse order details" : "Expand order details"
            }
          >
            {isExpanded ? (
              <FiChevronUp className="w-5 h-5" />
            ) : (
              <FiChevronDown className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderCard;
