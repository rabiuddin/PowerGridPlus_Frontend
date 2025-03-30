import { useState, useEffect } from "react";
import { fetchProductApiCall } from "../../../api/products.api";

export const useProductDetails = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      const response = await fetchProductApiCall(productId);

      if (response.success) {
        setProduct(response.data);
        setReviews(response.data.reviews);

        // calculate average rating
        if (response.data.reviews.length > 0) {
          const totalRating = response.data.reviews.reduce(
            (sum, review) => sum + review.rating,
            0
          );
          setAverageRating(totalRating / response.data.reviews.length);
        } else {
          setAverageRating(0);
        }
      } else {
        console.error(response);
        setError(response.detail || response.message);
      }

      setLoading(false);
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error, averageRating, reviews };
};
