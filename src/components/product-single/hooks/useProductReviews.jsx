"use client";

import { useState, useEffect } from "react";

// Mock reviews data
const MOCK_REVIEWS = {
  1: [
    {
      id: 101,
      productId: 1,
      userName: "John Smith",
      rating: 5,
      comment:
        "This smart meter has completely changed how I manage my home's energy usage. The real-time monitoring is incredibly accurate and the app interface is intuitive. I've already seen a reduction in my monthly bills!",
      date: "2023-11-15T14:23:45Z",
    },
    {
      id: 102,
      productId: 1,
      userName: "Sarah Johnson",
      rating: 4,
      comment:
        "Great product overall. Easy to install and the app works well. The only reason I'm not giving 5 stars is because the notifications can be a bit overwhelming at first, but once you adjust the settings it's perfect.",
      date: "2023-10-22T09:15:30Z",
    },
    {
      id: 103,
      productId: 1,
      userName: "Michael Chen",
      rating: 5,
      comment:
        "As an electrical engineer, I'm impressed with the accuracy of this meter. The data it provides has helped me identify several energy-hungry appliances that were driving up my bills.",
      date: "2023-09-18T16:42:10Z",
    },
  ],
  2: [
    {
      id: 201,
      productId: 2,
      userName: "Emily Rodriguez",
      rating: 5,
      comment:
        "This controller has significantly improved the efficiency of my solar setup. The MPPT technology really does make a difference - I'm seeing about 25% more energy production compared to my old controller.",
      date: "2023-11-05T11:30:22Z",
    },
    {
      id: 202,
      productId: 2,
      userName: "David Wilson",
      rating: 4,
      comment:
        "Solid product with excellent build quality. The display is clear and the interface is straightforward. Installation was a bit tricky but the manual was helpful.",
      date: "2023-10-12T15:18:45Z",
    },
  ],
};

export const useProductReviews = (productId) => {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      setError(null);

      try {
        // In a real app, you'd fetch from an API
        await new Promise((resolve) => setTimeout(resolve, 1200)); // Simulate API delay

        const productReviews = MOCK_REVIEWS[productId] || [];
        setReviews(productReviews);

        // Calculate average rating
        if (productReviews.length > 0) {
          const totalRating = productReviews.reduce(
            (sum, review) => sum + review.rating,
            0
          );
          setAverageRating(totalRating / productReviews.length);
        } else {
          setAverageRating(0);
        }
      } catch (err) {
        setError("Failed to load reviews");
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productId]);

  return { reviews, averageRating, loading, error };
};
