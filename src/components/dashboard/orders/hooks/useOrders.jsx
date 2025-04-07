import { useState, useEffect } from "react";
import { getUserOrdersApiCall } from "../../../../api/orders.api";

export const useOrders = () => {
  // State for orders and loading status
  const [orders, setOrders] = useState(null);
  const [filteredOrders, setFilteredOrders] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });
  const [sortOption, setSortOption] = useState("date-desc");

  // Fetch orders on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      setError(null);

      const response = await getUserOrdersApiCall();

      if (response.success) {
        setOrders(
          response.data.map((order) => ({
            ...order,
            total: order.items.reduce((acc, item) => {
              return acc + item.price * item.quantity;
            }, 0),
          }))
        );
      } else {
        setError("Failed to load orders. Please try again.");
        console.error("Error fetching orders:", response);
      }

      setIsLoading(false);
    };

    fetchOrders();
  }, []);

  // Apply filters and sorting whenever filter states change
  useEffect(() => {
    if (!orders) return;

    let result = [...orders];

    // Apply search filter
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      result = result.filter(
        (order) =>
          order.id.toString().toLowerCase().includes(lowercasedTerm) ||
          order.items.some((item) =>
            item.product_name.toLowerCase().includes(lowercasedTerm)
          )
      );
    }

    // Apply status filter
    if (statusFilter !== "all") {
      result = result.filter((order) => order.status === statusFilter);
    }

    // Apply date range filter
    if (dateRange.startDate) {
      const startDate = new Date(dateRange.startDate);
      result = result.filter(
        (order) => new Date(order.created_at) >= startDate
      );
    }

    if (dateRange.endDate) {
      const endDate = new Date(dateRange.endDate);
      endDate.setHours(23, 59, 59, 999); // End of day
      result = result.filter((order) => new Date(order.created_at) <= endDate);
    }

    // Apply sorting
    switch (sortOption) {
      case "date-asc":
        result.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        break;
      case "date-desc":
        result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        break;
      case "total-asc":
        result.sort((a, b) => a.total - b.total);
        break;
      case "total-desc":
        result.sort((a, b) => b.total - a.total);
        break;
      default:
        // Default sort by date descending
        result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    setFilteredOrders(result);
  }, [orders, searchTerm, statusFilter, dateRange, sortOption]);

  // Check if any filters are active
  const hasActiveFilters =
    searchTerm !== "" ||
    statusFilter !== "all" ||
    dateRange.startDate !== "" ||
    dateRange.endDate !== "";

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setStatusFilter("all");
    setDateRange({ startDate: "", endDate: "" });
    setSortOption("date-desc");
  };

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
  };
};
