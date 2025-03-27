"use client";

import { useState, useEffect, useRef } from "react";
import { FiSearch, FiX } from "react-icons/fi";

const ProductSearch = ({ searchQuery, setSearchQuery, className = "" }) => {
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const inputRef = useRef(null);

  // Update local state when prop changes
  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localQuery !== searchQuery) {
        setSearchQuery(localQuery);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [localQuery, searchQuery, setSearchQuery]);

  const handleClear = () => {
    setLocalQuery("");
    setSearchQuery("");
    inputRef.current?.focus();
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />

        <input
          ref={inputRef}
          type="text"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder="Search products..."
          className="bg-white border border-gray-300 rounded-lg py-2 pl-10 pr-10 w-full focus:border-[#0b6a62] focus:ring-2 focus:ring-[#0b6a62]/20 outline-none transition-all"
        />

        {localQuery && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <FiX className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
