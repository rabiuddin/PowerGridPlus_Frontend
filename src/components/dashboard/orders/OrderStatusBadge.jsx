"use client"

const OrderStatusBadge = ({ status }) => {
  // Define styles for different status types
  const statusStyles = {
    processing: {
      bg: "bg-blue-100",
      text: "text-blue-800",
      label: "Processing",
    },
    shipped: {
      bg: "bg-purple-100",
      text: "text-purple-800",
      label: "Shipped",
    },
    delivered: {
      bg: "bg-green-100",
      text: "text-green-800",
      label: "Delivered",
    },
    cancelled: {
      bg: "bg-red-100",
      text: "text-red-800",
      label: "Cancelled",
    },
    refunded: {
      bg: "bg-orange-100",
      text: "text-orange-800",
      label: "Refunded",
    },
    pending: {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
      label: "Pending",
    },
    completed: {
      bg: "bg-green-100",
      text: "text-green-800",
      label: "Completed",
    },
  }

  // Default to pending if status is not recognized
  const style = statusStyles[status.toLowerCase()] || statusStyles.pending

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${style.bg} ${style.text}`}
    >
      {style.label}
    </span>
  )
}

export default OrderStatusBadge

