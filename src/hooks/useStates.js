import { getAllStatesByCountry } from "@/server/common/getAllStatesByCountry";
import { useState, useEffect } from "react";

export function useStates(countryId) {
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!countryId) {
      setStates([]);
      return;
    }

    const fetchStates = async () => {
      setLoading(true);
      try {
        const res = await getAllStatesByCountry(countryId);
        setStates(res);
      } catch (err) {
        console.error("Error fetching states", err);
        setStates([]);
      } finally {
        setLoading(false);
      }
    };

    fetchStates();
  }, [countryId]);

  return { states, loading };
}
