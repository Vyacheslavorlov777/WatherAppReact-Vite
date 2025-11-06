import { useEffect, useState } from "react";
import { useFetch } from "./useFetch.js";
import { getForecast, getWeatherByLocation } from '../services/weatherApi.js';
  
/**
 * @param {string} url - адрес запроса
 * @param {object} [options] - дополнительные настройки fetch 
 * @returns {{ data: any, error: string | null, loading: boolean, refetch: Function }}
 */
export function useWeather(cityName) {
	const { data, error, loading } = useFetch(cityName);

	const [weather, setWeather] = useState(null);
	const [forecast, setForecast] = useState([]);
	// const [error, setError] = useState(null);
	// const [loading, setLoading] = useState(false);


	const searchWeather = async () => {
		
		setWeather(data);
		
		const forecastData = await getForecast(cityName);
		setForecast(forecastData);
				
		};

	const getMyLocationWeather = async () => {

		const weatherData = await getWeatherByLocation();
		setWeather(weatherData);

		const forecastData = await getForecast(weatherData.city);
		setForecast(forecastData);
	};

  useEffect(() => {
    searchWeather();
    getMyLocationWeather();
  }, [cityName]);

  return { weather, forecast,  error, loading, searchWeather, getMyLocationWeather };
}