"use client";

import { motion } from "framer-motion";
import { FiCheck, FiShoppingBag, FiUser, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const OrderConfirmation = ({ orderId }) => {
  return (
    <div className="p-6 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <FiCheck className="w-10 h-10 text-green-600" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Thank You for Your Order!
        </h2>
        <p className="text-gray-600 mb-6">
          Your order has been placed successfully and is being processed.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-8 inline-block">
          <p className="text-gray-500 text-sm">Order Number</p>
          <p className="text-xl font-bold text-[#0b6a62]">#{orderId}</p>
        </div>

        <p className="text-gray-600 mb-8">
          We've sent a confirmation email to your email address with all the
          details of your order. You can also track your order status in your
          account.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <Link to="/account/orders">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-[#0b6a62] text-white rounded-lg hover:bg-[#22a196] transition-colors"
            >
              <FiShoppingBag className="mr-2" />
              <span>Track Order</span>
            </motion.button>
          </Link> */}

          <Link to="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-[#0b6a62] text-white rounded-lg hover:bg-[#22a196] transition-colors"
            >
              <FiUser className="mr-2" />
              <span>My Account</span>
            </motion.button>
          </Link>

          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FiHome className="mr-2" />
              <span>Continue Shopping</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderConfirmation;
