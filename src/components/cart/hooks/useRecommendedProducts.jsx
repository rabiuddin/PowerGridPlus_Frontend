import { useState, useEffect } from "react";
import { useCart } from "../../products/hooks/useCart";
import { fetchRecommendedProductsApiCall } from "../../../api/products.api";

export const useRecommendedProducts = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cart } = useCart();

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      setLoading(true);
      setError(null);

      console.log(cart);

      const categories = cart.map((product) => product.category);

      console.log(categories);

      // do no fetch any recommendations if no products are added in the cart
      if (categories.length < 0) {
        setLoading(false);
        return;
      }

      const response = await fetchRecommendedProductsApiCall({
        categories,
      });

      if (response.success) {
        setRecommendedProducts(response.data);
      } else {
        setError("Failed to load related products");
        console.error(response);
      }

      setLoading(false);
    };

    fetchRecommendedProducts();
  }, []);

  return { recommendedProducts, loading, error };
};
