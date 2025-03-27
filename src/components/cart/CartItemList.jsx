"use client";

import { motion, AnimatePresence } from "framer-motion";
import CartItem from "./CartItem";
import { useCart } from "../products/hooks/useCart";
import { Link } from "react-router-dom";

const CartItemList = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  // Animation variants
  const listVariants = {
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
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
      {/* Cart Items */}
      <motion.div variants={listVariants} initial="hidden" animate="visible">
        <AnimatePresence>
          {cart.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              exit="exit"
              layout
              className="border-b border-gray-100 last:border-0"
            >
              <CartItem
                item={item}
                onRemove={() => removeFromCart(item.id)}
                onUpdateQuantity={(quantity) =>
                  updateQuantity(item.id, quantity)
                }
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Cart Actions */}
      <div className="p-6 flex flex-wrap gap-4 justify-between items-center">
        <button
          onClick={clearCart}
          className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
        >
          Clear Cart
        </button>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/products"
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Continue Shopping
          </Link>

          <Link
            href="/checkout"
            className="px-6 py-2 bg-[#0b6a62] text-white rounded-lg hover:bg-[#22a196] transition-colors"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItemList;
