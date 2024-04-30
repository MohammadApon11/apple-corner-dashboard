import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../utils";

const useGetEvent = () => {
  const [events, setEvents] = useState([]);
  const [eventsLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`${baseURL}/posts/getEvents`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.response.data.error || "Something went wrong");
        setLoading(false);
      }
    };

    fetchEvents();

    // Clean-up function
    return () => {
      // Cleanup code if needed
    };
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return { events, eventsLoading, error };
};

export default useGetEvent;
