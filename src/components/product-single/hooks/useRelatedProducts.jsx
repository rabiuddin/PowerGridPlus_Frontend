import { useState, useEffect } from "react";
import { fetchRecommendedProductsApiCall } from "../../../api/products.api";

export const useRelatedProducts = (product) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!product) return;

    const fetchRelatedProducts = async () => {
      setLoading(true);
      setError(null);

      const response = await fetchRecommendedProductsApiCall({
        categories: [product.category],
      });

      if (response.success) {
        setRelatedProducts(response.data);
      } else {
        setError("Failed to load related products");
        console.error(response);
      }

      setLoading(false);
    };

    fetchRelatedProducts();
  }, [product]);

  return { relatedProducts, loading, error };
};
