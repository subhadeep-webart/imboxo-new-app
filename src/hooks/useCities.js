import { getAllCitiesByState } from "@/server/common/getAllCitiesByState";
import { useState, useEffect } from "react";

export function useCities(stateId) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!stateId) {
      setCities([]);
      return;
    }

    const fetchCities = async () => {
      setLoading(true);
      try {
        const res = await getAllCitiesByState(stateId);
        setCities(res);
      } catch (err) {
        console.error("Error fetching cities", err);
        setCities([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, [stateId]);

  return { cities, loading };
}
