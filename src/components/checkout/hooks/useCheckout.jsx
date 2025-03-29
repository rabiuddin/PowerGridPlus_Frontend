"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { useCart } from "../../products/hooks/useCart";

export const useCheckout = () => {
  // Current step in checkout process
  const [currentStep, setCurrentStep] = useState(1);
  const lastStep = 4;

  // Shipping information
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    saveInfo: false,
  });

  // Selected shipping method
  const [shippingMethod, setShippingMethod] = useState(null);

  // Payment information
  const [paymentInfo, setPaymentInfo] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    sameAsShipping: true,
  });

  // Order status
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Get cart functions
  const { clearCart } = useCart();

  // Place order function
  const placeOrder = async () => {
    setIsProcessing(true);

    try {
      // In a real app, you'd make an API call to create the order
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API delay

      // Generate a random order ID
      const generatedOrderId = Math.floor(
        100000 + Math.random() * 900000
      ).toString();
      setOrderId(generatedOrderId);

      // Clear the cart
      clearCart();

      // Set order as placed
      setOrderPlaced(true);

      // Move to confirmation step
      setCurrentStep(5);

      // Show success toast
      toast.success("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    currentStep,
    setCurrentStep,
    shippingInfo,
    setShippingInfo,
    shippingMethod,
    setShippingMethod,
    paymentInfo,
    setPaymentInfo,
    orderPlaced,
    orderId,
    isProcessing,
    placeOrder,
    lastStep,
  };
};
