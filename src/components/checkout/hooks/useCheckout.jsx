import { useState } from "react";
import { toast } from "react-hot-toast";
import { useCart } from "../../products/hooks/useCart";
import { placeOrderApiCall } from "../../../api/orders.api";

export const useCheckout = () => {
  // Current step in checkout process
  const [currentStep, setCurrentStep] = useState(1);
  const lastStep = 3;

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
  const [shippingMethod, setShippingMethod] = useState({
    id: "standard",
    name: "Standard Shipping",
    description: "Delivery in 5-7 business days",
    price: 0,
    type: "standard",
  });

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
  const { clearCart, cart } = useCart();

  // Place order function
  const placeOrder = async () => {
    setIsProcessing(true);

    const body = {
      first_name: shippingInfo.firstName,
      last_name: shippingInfo.lastName,
      email: shippingInfo.email,
      phone: shippingInfo.phone,
      street_address: shippingInfo.address,
      address_line_2: shippingInfo.addressLine2,
      city: shippingInfo.city,
      state_province: shippingInfo.state,
      postal_code: shippingInfo.zipCode,
      country: shippingInfo.country,
      items: cart.map((item) => ({
        product: item.id,
        quantity: item.quantity,
      })),
    };

    const response = await placeOrderApiCall(body);

    if (response.success) {
      setOrderId(response.data.id);

      // Clear the cart
      clearCart();

      // Set order as placed
      setOrderPlaced(true);

      // Move to confirmation step
      setCurrentStep(lastStep);

      // Show success toast
      toast.success("Order placed successfully!");
    } else {
      console.error(response);
    }

    setIsProcessing(false);
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
