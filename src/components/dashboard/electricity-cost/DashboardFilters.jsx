import { useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiDollarSign,
  FiEye,
  FiEyeOff,
  FiMap,
} from "react-icons/fi";

export default function DashboardFilters() {
  const [showFilters, setShowFilters] = useState(true);
  const [selectedArea, setSelectedArea] = useState("Living Room");

  const areas = ["Living Room", "Kitchen", "Bedroom", "Office"];
  const timeIntervals = ["Daily", "Weekly", "Monthly", "Yearly"];
  const currencies = ["EUR", "USD", "GBP", "JPY"];

  return (
    <div className="bg-white p-6 space-y-6">
      {showFilters && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Current Interval */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <FiCalendar className="mr-2 text-primary" />
                Current interval
              </label>
              <div className="relative">
                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2.5 bg-white focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                  <input
                    type="date"
                    defaultValue="2024-10-11"
                    className="outline-none w-full text-gray-700"
                    aria-label="Select date"
                  />
                </div>
              </div>
            </div>

            {/* Time Interval Dropdown */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <FiClock className="mr-2 text-primary" />
                Time interval
              </label>
              <div className="relative">
                <select
                  className="appearance-none w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  aria-label="Select time interval"
                >
                  {timeIntervals.map((interval) => (
                    <option key={interval} value={interval}>
                      {interval}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Currency Dropdown */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <FiDollarSign className="mr-2 text-primary" />
                Currency
              </label>
              <div className="relative">
                <select
                  className="appearance-none w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  aria-label="Select currency"
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Hide Filters Button */}
            <div className="flex items-end">
              <button
                onClick={() => setShowFilters(false)}
                className="w-full px-4 py-2.5 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                aria-label="Hide filters"
              >
                <FiEyeOff className="mr-2" />
                Hide filters
              </button>
            </div>
          </div>

          {/* Areas Section */}
          <div className="space-y-3">
            <div className="flex items-center">
              <h3 className="text-sm font-medium text-gray-700 flex items-center">
                <FiMap className="mr-2 text-primary" />
                Areas
              </h3>
              <div className="ml-auto">
                <span className="text-xs text-gray-500">
                  Select an area to view specific data
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <button
                  key={area}
                  onClick={() => setSelectedArea(area)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    selectedArea === area
                      ? "bg-primary text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {!showFilters && (
        <button
          onClick={() => setShowFilters(true)}
          className="ms-auto px-4 py-2.5 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
          aria-label="Show filters"
        >
          <FiEye className="mr-2" />
          Show filters
        </button>
      )}
    </div>
  );
}
