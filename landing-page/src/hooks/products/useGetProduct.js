import { useState, useEffect } from "react";
import axios from "axios";
import { adminBaseURL } from "../../utils";

const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${adminBaseURL}/getProducts`, {});

        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.response.data.error || "Something went wrong");
        setLoading(false);
      }
    };

    fetchProducts();

    // Clean-up function
    return () => {
      // Cleanup code if needed
    };
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return { products, productsLoading, error };
};

export default useGetProducts;
