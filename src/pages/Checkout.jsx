"use client";

import { useEffect } from "react";
import CheckoutHeader from "../components/checkout/CheckoutHeader";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import ShippingForm from "../components/checkout/ShippingForm";
import OrderReview from "../components/checkout/OrderReview";
import OrderConfirmation from "../components/checkout/OrderConfirmation";
import OrderSummary from "../components/checkout/OrderSummary";
import { useCheckout } from "../components/checkout/hooks/useCheckout";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/products/hooks/useCart";
import MainLayout from "../layouts/MainLayout";

export default function Checkout() {
  const {
    currentStep,
    setCurrentStep,
    shippingInfo,
    setShippingInfo,
    shippingMethod,
    paymentInfo,
    placeOrder,
    orderPlaced,
    orderId,
    isProcessing,
    lastStep,
  } = useCheckout();

  const { cart, isLoading: cartLoading } = useCart();
  const navigate = useNavigate();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Redirect to cart if cart is empty
  useEffect(() => {
    if (!cartLoading && cart.length === 0 && !orderPlaced) {
      navigate("/cart");
    }
  }, [cartLoading, cart, orderPlaced, navigate]);

  // Render appropriate step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ShippingForm
            shippingInfo={shippingInfo}
            setShippingInfo={setShippingInfo}
            onNext={() => setCurrentStep(2)}
          />
        );

      case 2:
        return (
          <OrderReview
            shippingInfo={shippingInfo}
            shippingMethod={shippingMethod}
            paymentInfo={paymentInfo}
            onPlaceOrder={placeOrder}
            onBack={() => setCurrentStep(1)}
            setCurrentStep={setCurrentStep}
            isProcessing={isProcessing}
          />
        );
      case 3:
        return <OrderConfirmation orderId={orderId} />;
      default:
        return (
          <ShippingForm
            shippingInfo={shippingInfo}
            setShippingInfo={setShippingInfo}
            onNext={() => setCurrentStep(2)}
          />
        );
    }
  };

  if (cartLoading) {
    return (
      <MainLayout>
        <CheckoutLoadingSkeleton />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#0b6a62]/5 to-[#22a196]/5">
        <div className="container mx-auto px-4 py-8">
          <CheckoutHeader currentStep={currentStep} lastStep={lastStep} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Main checkout form - Takes up 2/3 of the space on large screens */}
            <div className="lg:col-span-2">
              <CheckoutSteps currentStep={currentStep}>
                {renderStepContent()}
              </CheckoutSteps>
            </div>

            {/* Order summary - Takes up 1/3 of the space on large screens */}
            <div className="lg:col-span-1">
              <OrderSummary
                cart={cart}
                shippingMethod={shippingMethod}
                currentStep={currentStep}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

// Loading Skeleton
const CheckoutLoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b6a62]/5 to-[#22a196]/5 p-4">
      <div className="container mx-auto">
        <div className="h-10 w-full max-w-md bg-gray-200 rounded animate-pulse mb-8"></div>

        <div className="h-6 w-3/4 max-w-lg bg-gray-200 rounded animate-pulse mb-8"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
                    <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
                <div className="h-12 bg-gray-200 rounded animate-pulse w-1/3 mt-6"></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2"></div>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex justify-between">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
                    </div>
                  ))}
                </div>
                <div className="h-px bg-gray-200 my-4"></div>
                <div className="flex justify-between">
                  <div className="h-6 bg-gray-200 rounded animate-pulse w-1/4"></div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse w-1/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
