import { AnimatePresence } from "framer-motion";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../products/hooks/useCart";

const CartIcon = () => {
  const { cart } = useCart();
  return (
    <div className="fixed bottom-4 right-17 sm:bottom-6 sm:right-22 z-20">
      {/* Chat toggle button */}
      <AnimatePresence>
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-primary text-white rounded-full p-3 sm:p-4 shadow-lg flex items-center justify-center"
        >
          <Link to={"/cart"}>
            <FiShoppingCart className="relative h-5 w-5 sm:h-6 sm:w-6" />

            <span className="absolute top-0 right-0 bg-red-600 h-4.5 w-4.5 flex items-center justify-center rounded-full text-xs">
              {cart.length}
            </span>
          </Link>
        </motion.button>
      </AnimatePresence>
    </div>
  );
};

export default CartIcon;
