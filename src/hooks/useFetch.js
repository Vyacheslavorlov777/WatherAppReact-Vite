import { useEffect, useState } from "react";
import { getCurrentWeather } from '../services/weatherApi.js';
  

/**
 * @param {string} cityName - название город по которому делается запроса
 * @param {object} [options] - дополнительные настройки fetch 
 * @returns {{ data: any, error: string | null, loading: boolean, refetch: Function }}
 */

export function useFetch(cityName) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getCurrentWeather(cityName)
      setData(res);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [cityName]);

  return { data, error, loading };
}
