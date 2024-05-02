import { useState, useEffect } from "react";
import axios from "axios";
import { adminBaseURL } from "../../utils";

const useGetHero = () => {
  const [heroes, setHeroes] = useState([]);
  const [herosLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.get(`${adminBaseURL}/getHero`, {});

        setHeroes(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.response.data.error || "Something went wrong");
        setLoading(false);
      }
    };

    fetchHeroes();

    // Clean-up function
    return () => {
      // Cleanup code if needed
    };
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return { heroes, herosLoading, error };
};

export default useGetHero;
