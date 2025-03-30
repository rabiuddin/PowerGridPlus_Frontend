"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCalendar, FiX } from "react-icons/fi";
import { formatOrderDate } from "../../../utils/utils";

const DateRangePicker = ({ startDate, endDate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localStartDate, setLocalStartDate] = useState(startDate || "");
  const [localEndDate, setLocalEndDate] = useState(endDate || "");
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update local state when props change
  useEffect(() => {
    setLocalStartDate(startDate || "");
    setLocalEndDate(endDate || "");
  }, [startDate, endDate]);

  const handleApply = () => {
    onChange({ startDate: localStartDate, endDate: localEndDate });
    setIsOpen(false);
  };

  const handleClear = () => {
    setLocalStartDate("");
    setLocalEndDate("");
    onChange({ startDate: "", endDate: "" });
    setIsOpen(false);
  };

  const displayText = () => {
    if (startDate && endDate) {
      return `${formatOrderDate(startDate)} - ${formatOrderDate(endDate)}`;
    } else if (startDate) {
      return `From ${formatOrderDate(startDate)}`;
    } else if (endDate) {
      return `Until ${formatOrderDate(endDate)}`;
    }
    return "Select date range";
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full inline-flex justify-between items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        <span className="flex items-center">
          <FiCalendar className="mr-2 h-4 w-4 text-gray-500" />
          {displayText()}
        </span>
        {(startDate || endDate) && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleClear();
            }}
            className="ml-2 text-gray-400 hover:text-gray-500"
          >
            <FiX className="h-4 w-4" />
          </button>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md p-4"
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="start-date"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="start-date"
                  value={localStartDate}
                  onChange={(e) => setLocalStartDate(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="end-date"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  End Date
                </label>
                <input
                  type="date"
                  id="end-date"
                  value={localEndDate}
                  onChange={(e) => setLocalEndDate(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={handleClear}
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={handleApply}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Apply
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DateRangePicker;
