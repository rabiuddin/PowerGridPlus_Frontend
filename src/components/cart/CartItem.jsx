"use client";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleQuantityChange = (newQuantity) => {
    // Ensure quantity is between 1 and 99
    const quantity = Math.max(1, Math.min(99, newQuantity));
    onUpdateQuantity(quantity);
  };

  // Format price with currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  // Calculate item total
  const itemTotal = item.price * item.quantity;

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Product Image */}
        <Link
          href={`/products/${item.id}`}
          className="flex-shrink-0 w-full sm:w-20 h-20 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </Link>

        <div className="flex flex-1 flex-col sm:flex-row gap-4">
          {/* Product Info */}
          <div className="flex-1">
            <Link
              href={`/products/${item.id}`}
              className="text-lg font-medium text-gray-900 hover:text-[#0b6a62] transition-colors"
            >
              {item.name}
            </Link>

            {item.variant && (
              <p className="text-sm text-gray-500 mt-1">
                Variant: {item.variant}
              </p>
            )}

            <div className="text-sm text-gray-500 mt-1">
              {formatPrice(item.price)} each
            </div>

            {/* Mobile Price - Only visible on small screens */}
            <div className="sm:hidden text-lg font-bold text-gray-900 mt-2">
              {formatPrice(itemTotal)}
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => handleQuantityChange(item.quantity - 1)}
                disabled={item.quantity <= 1}
                className="px-3 py-1 text-gray-600 hover:text-[#0b6a62] disabled:text-gray-400 transition-colors"
                aria-label="Decrease quantity"
              >
                <FiMinus className="w-4 h-4" />
              </button>

              <input
                type="number"
                min="1"
                max="99"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(Number.parseInt(e.target.value) || 1)
                }
                className="w-12 text-center border-x border-gray-300 py-1 focus:outline-none"
                aria-label="Quantity"
              />

              <button
                onClick={() => handleQuantityChange(item.quantity + 1)}
                disabled={item.quantity >= 99}
                className="px-3 py-1 text-gray-600 hover:text-[#0b6a62] disabled:text-gray-400 transition-colors"
                aria-label="Increase quantity"
              >
                <FiPlus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onRemove}
              className="ml-3 p-2 text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Remove item"
            >
              <FiTrash2 className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Price - Hidden on small screens */}
          <div className="hidden sm:block text-right">
            <div className="text-lg font-bold text-gray-900">
              {formatPrice(itemTotal)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
