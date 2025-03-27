"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { toast } from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const loadCart = async () => {
      setIsLoading(true);
      try {
        // In a real app, you might fetch the cart from an API
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
          const parsedCart = JSON.parse(savedCart);
          setCart(parsedCart);
        }
      } catch (error) {
        console.error("Failed to load cart:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCart();
  }, []);

  // Update localStorage and derived state when cart changes
  useEffect(() => {
    if (isLoading) return;

    localStorage.setItem("cart", JSON.stringify(cart));

    // Calculate cart count and total
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    setCartTotal(total);
  }, [cart]);

  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      // Check if product already exists in cart
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + quantity,
        };

        toast.success(`Updated ${product.name} quantity in cart`);
        return updatedCart;
      } else {
        // Add new item to cart
        toast.success(`Added ${product.name} to cart`);
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find((item) => item.id === productId);
      if (itemToRemove) {
        toast.success(`Removed ${itemToRemove.name} from cart`);
      }
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  // Update item quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    toast.success("Cart cleared");
  };

  return (
    <CartContext.Provider
      value={{
        cart,

        cartTotal,
        isLoading,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to use CartContext
export const useCart = () => {
  return useContext(CartContext);
};
