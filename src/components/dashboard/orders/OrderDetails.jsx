"use client";

import { motion } from "framer-motion";
import {
  FiPackage,
  FiMapPin,
  FiCreditCard,
  FiDownload,
  FiExternalLink,
} from "react-icons/fi";
import { formatOrderDate, formatPrice } from "../../../utils/utils";

const OrderDetails = ({ order }) => {
  return (
    <div className="p-6">
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center mb-3">
            <FiMapPin className="w-5 h-5 text-primary mr-2" />
            <h4 className="font-medium text-gray-900">Shipping Information</h4>
          </div>
          <div className="text-sm text-gray-600">
            <p className="font-medium text-gray-800">{order.shipping.name}</p>
            <p>{order.shipping.address}</p>
            <p>
              {order.shipping.city}, {order.shipping.state}{" "}
              {order.shipping.zipCode}
            </p>
            <p>{order.shipping.country}</p>
            <p className="mt-2">
              <span className="font-medium text-gray-800">Method:</span>{" "}
              {order.shipping.method}
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center mb-3">
            <FiCreditCard className="w-5 h-5 text-primary mr-2" />
            <h4 className="font-medium text-gray-900">Payment Information</h4>
          </div>
          <div className="text-sm text-gray-600">
            <p>
              <span className="font-medium text-gray-800">Method:</span>{" "}
              {order.payment.method}
            </p>
            {order.payment.cardLast4 && (
              <p>
                <span className="font-medium text-gray-800">Card:</span> ••••{" "}
                {order.payment.cardLast4}
              </p>
            )}
            <p className="mt-2">
              <span className="font-medium text-gray-800">Subtotal:</span>{" "}
              {formatPrice(order.subtotal)}
            </p>
            <p>
              <span className="font-medium text-gray-800">Shipping:</span>{" "}
              {formatPrice(order.shippingCost)}
            </p>
            <p>
              <span className="font-medium text-gray-800">Tax:</span>{" "}
              {formatPrice(order.tax)}
            </p>
            <p className="font-medium text-gray-800 mt-1">
              Total: {formatPrice(order.total)}
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center mb-3">
            <FiPackage className="w-5 h-5 text-primary mr-2" />
            <h4 className="font-medium text-gray-900">Order Timeline</h4>
          </div>
          <div className="space-y-3">
            {order.timeline.map((event, index) => (
              <div key={index} className="flex">
                <div className="mr-3 relative">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1.5"></div>
                  {index < order.timeline.length - 1 && (
                    <div className="absolute top-3 left-1.5 w-0.5 h-full -ml-px bg-gray-200"></div>
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <p className="text-sm font-medium text-gray-900">
                    {event.status}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatOrderDate(event.date, true)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Order Items */}
      <h4 className="font-medium text-gray-900 mb-3">Order Items</h4>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {order.items.map((item) => (
                <tr key={item.product}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                        <img
                          src={item.image || "https://placehold.co/600x600"}
                          alt={item.product_name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {item.product_name}
                        </div>
                        {/* {item.variant && (
                          <div className="text-xs text-gray-500">
                            {item.variant}
                          </div>
                        )} */}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatPrice(item.price)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {formatPrice(item.price * item.quantity)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 justify-end">
        {order.invoice && (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <FiDownload className="mr-2 -ml-1 h-4 w-4" />
            Download Invoice
          </motion.button>
        )}

        {order.trackingNumber && (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <FiExternalLink className="mr-2 -ml-1 h-4 w-4" />
            Track Package
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
