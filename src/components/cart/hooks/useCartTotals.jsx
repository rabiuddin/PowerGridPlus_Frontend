"use client";

import { useState, useEffect } from "react";
import { useCart } from "../../products/hooks/useCart";

export const useCartTotals = () => {
  const { cart } = useCart();
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  // Calculate totals whenever cart changes
  useEffect(() => {
    // Calculate subtotal
    const calculatedSubtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubtotal(calculatedSubtotal);

    // Calculate tax (e.g., 8%)
    const calculatedTax = calculatedSubtotal * 0.08;
    setTax(calculatedTax);

    // Calculate shipping
    // Free shipping for orders over $100, otherwise $10
    const calculatedShipping = calculatedSubtotal > 100 ? 0 : 10;
    setShipping(calculatedShipping);

    // Calculate discount
    // In a real app, this would be based on applied promo codes or other rules
    // For this example, we'll use a fixed 10% discount for orders over $200
    const calculatedDiscount =
      calculatedSubtotal > 200 ? calculatedSubtotal * 0.1 : 0;
    setDiscount(calculatedDiscount);

    // Calculate total
    const calculatedTotal =
      calculatedSubtotal +
      calculatedTax +
      calculatedShipping -
      calculatedDiscount;
    setTotal(calculatedTotal);
  }, [cart]);

  return {
    subtotal,
    tax,
    shipping,
    discount,
    total,
  };
};
