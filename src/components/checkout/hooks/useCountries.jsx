"use client";

import { useState, useEffect } from "react";

// Mock countries data
const MOCK_COUNTRIES = [
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "GB", name: "United Kingdom" },
  { code: "AU", name: "Australia" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "JP", name: "Japan" },
  { code: "CN", name: "China" },
  { code: "BR", name: "Brazil" },
  { code: "IN", name: "India" },
  { code: "MX", name: "Mexico" },
  { code: "IT", name: "Italy" },
  { code: "ES", name: "Spain" },
  { code: "NL", name: "Netherlands" },
  { code: "SE", name: "Sweden" },
];

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // In a real app, you'd fetch from an API
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay

        setCountries(MOCK_COUNTRIES);
      } catch (err) {
        setError("Failed to load countries");
        console.error("Error fetching countries:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, isLoading, error };
};
