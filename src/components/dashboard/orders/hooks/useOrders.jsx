"use client"

import { useState, useEffect } from "react"

// Mock orders data
const MOCK_ORDERS = [
  {
    id: "ord-001",
    orderNumber: "PGP-10045",
    orderDate: "2023-10-15T14:23:45Z",
    status: "delivered",
    total: 329.97,
    subtotal: 299.97,
    tax: 30.0,
    shippingCost: 0,
    items: [
      {
        id: 1,
        name: "Smart Energy Meter",
        price: 129.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 2,
        name: "Solar Panel Controller",
        price: 169.98,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    shipping: {
      name: "John Doe",
      address: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "United States",
      method: "Standard Shipping (Free)",
    },
    payment: {
      method: "Credit Card",
      cardLast4: "4242",
    },
    timeline: [
      { status: "Order Placed", date: "2023-10-15T14:23:45Z" },
      { status: "Payment Confirmed", date: "2023-10-15T14:25:12Z" },
      { status: "Processing", date: "2023-10-16T09:12:33Z" },
      { status: "Shipped", date: "2023-10-17T11:45:20Z" },
      { status: "Delivered", date: "2023-10-20T15:30:00Z" },
    ],
    invoice: true,
    trackingNumber: "TRK123456789",
  },
  {
    id: "ord-002",
    orderNumber: "PGP-10046",
    orderDate: "2023-09-28T10:15:30Z",
    status: "shipped",
    total: 249.99,
    subtotal: 229.99,
    tax: 20.0,
    shippingCost: 0,
    items: [
      {
        id: 3,
        name: "Smart Thermostat",
        price: 179.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 5,
        name: "Energy Usage Analyzer",
        price: 50.0,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    shipping: {
      name: "John Doe",
      address: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "United States",
      method: "Express Shipping ($9.99)",
    },
    payment: {
      method: "PayPal",
    },
    timeline: [
      { status: "Order Placed", date: "2023-09-28T10:15:30Z" },
      { status: "Payment Confirmed", date: "2023-09-28T10:17:22Z" },
      { status: "Processing", date: "2023-09-29T08:45:10Z" },
      { status: "Shipped", date: "2023-09-30T14:20:15Z" },
    ],
    invoice: true,
    trackingNumber: "TRK987654321",
  },
  {
    id: "ord-003",
    orderNumber: "PGP-10047",
    orderDate: "2023-08-12T16:42:10Z",
    status: "cancelled",
    total: 1299.99,
    subtotal: 1199.99,
    tax: 100.0,
    shippingCost: 0,
    items: [
      {
        id: 4,
        name: "Home Battery System",
        price: 1299.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    shipping: {
      name: "John Doe",
      address: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "United States",
      method: "Standard Shipping (Free)",
    },
    payment: {
      method: "Credit Card",
      cardLast4: "1234",
    },
    timeline: [
      { status: "Order Placed", date: "2023-08-12T16:42:10Z" },
      { status: "Payment Confirmed", date: "2023-08-12T16:45:33Z" },
      { status: "Processing", date: "2023-08-13T09:30:45Z" },
      { status: "Cancelled", date: "2023-08-14T11:20:18Z" },
    ],
    invoice: false,
  },
  {
    id: "ord-004",
    orderNumber: "PGP-10048",
    orderDate: "2023-11-05T11:30:22Z",
    status: "processing",
    total: 59.99,
    subtotal: 49.99,
    tax: 5.0,
    shippingCost: 5.0,
    items: [
      {
        id: 6,
        name: "Smart Power Strip",
        price: 59.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    shipping: {
      name: "John Doe",
      address: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "United States",
      method: "Standard Shipping ($5.00)",
    },
    payment: {
      method: "Credit Card",
      cardLast4: "5678",
    },
    timeline: [
      { status: "Order Placed", date: "2023-11-05T11:30:22Z" },
      { status: "Payment Confirmed", date: "2023-11-05T11:32:45Z" },
      { status: "Processing", date: "2023-11-06T09:15:30Z" },
    ],
    invoice: false,
  },
  {
    id: "ord-005",
    orderNumber: "PGP-10049",
    orderDate: "2023-07-20T15:30:00Z",
    status: "refunded",
    total: 349.99,
    subtotal: 329.99,
    tax: 20.0,
    shippingCost: 0,
    items: [
      {
        id: 7,
        name: "Wind Turbine Monitor",
        price: 349.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    shipping: {
      name: "John Doe",
      address: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "United States",
      method: "Express Shipping (Free)",
    },
    payment: {
      method: "Credit Card",
      cardLast4: "9012",
    },
    timeline: [
      { status: "Order Placed", date: "2023-07-20T15:30:00Z" },
      { status: "Payment Confirmed", date: "2023-07-20T15:32:18Z" },
      { status: "Processing", date: "2023-07-21T09:45:30Z" },
      { status: "Shipped", date: "2023-07-22T11:20:15Z" },
      { status: "Delivered", date: "2023-07-25T14:15:22Z" },
      { status: "Return Requested", date: "2023-07-28T10:30:45Z" },
      { status: "Return Approved", date: "2023-07-29T09:15:30Z" },
      { status: "Refunded", date: "2023-08-02T14:20:10Z" },
    ],
    invoice: true,
    trackingNumber: "TRK456789123",
  },
]

export const useOrders = () => {
  // State for orders and loading status
  const [orders, setOrders] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Filter states
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" })
  const [sortOption, setSortOption] = useState("date-desc")

  // Fetch orders on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true)
      setError(null)

      try {
        // In a real app, you would fetch from an API
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay

        setOrders(MOCK_ORDERS)
      } catch (err) {
        setError("Failed to load orders. Please try again.")
        console.error("Error fetching orders:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchOrders()
  }, [])

  // Apply filters and sorting whenever filter states change
  useEffect(() => {
    if (!orders.length) return

    let result = [...orders]

    // Apply search filter
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase()
      result = result.filter(
        (order) =>
          order.orderNumber.toLowerCase().includes(lowercasedTerm) ||
          order.items.some((item) => item.name.toLowerCase().includes(lowercasedTerm)),
      )
    }

    // Apply status filter
    if (statusFilter !== "all") {
      result = result.filter((order) => order.status === statusFilter)
    }

    // Apply date range filter
    if (dateRange.startDate) {
      const startDate = new Date(dateRange.startDate)
      result = result.filter((order) => new Date(order.orderDate) >= startDate)
    }

    if (dateRange.endDate) {
      const endDate = new Date(dateRange.endDate)
      endDate.setHours(23, 59, 59, 999) // End of day
      result = result.filter((order) => new Date(order.orderDate) <= endDate)
    }

    // Apply sorting
    switch (sortOption) {
      case "date-asc":
        result.sort((a, b) => new Date(a.orderDate) - new Date(b.orderDate))
        break
      case "date-desc":
        result.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
        break
      case "total-asc":
        result.sort((a, b) => a.total - b.total)
        break
      case "total-desc":
        result.sort((a, b) => b.total - a.total)
        break
      default:
        // Default sort by date descending
        result.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
    }

    setFilteredOrders(result)
  }, [orders, searchTerm, statusFilter, dateRange, sortOption])

  // Check if any filters are active
  const hasActiveFilters =
    searchTerm !== "" || statusFilter !== "all" || dateRange.startDate !== "" || dateRange.endDate !== ""

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("")
    setStatusFilter("all")
    setDateRange({ startDate: "", endDate: "" })
    setSortOption("date-desc")
  }

  return {
    orders,
    filteredOrders,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    dateRange,
    setDateRange,
    sortOption,
    setSortOption,
    resetFilters,
    hasActiveFilters,
  }
}

