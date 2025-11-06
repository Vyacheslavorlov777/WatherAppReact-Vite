// src/App.jsx
import { useState } from 'react';
import { useWeather } from './hooks/useWeather.js';
// import { getCurrentWeather, getForecast, getWeatherByLocation } from './services/weatherApi';
import styles from './styles/App.module.css';
import citys from './assets/citys';

function App() {
  const [city, setCity] = useState('');
  const {weather, forecast, loading, error, searchWeather, getMyLocationWeather } = useWeather(city);
  

  // const [searchCounter, setSearchCounter] = useState(0);
  // const [weather, setWeather] = useState(null);
  // const [forecast, setForecast] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');

  // const searchWeather = async (cityName) => {
  //   setLoading(true);
  //   setError('');
    
  //   try {
  //     const weatherData = await getCurrentWeather(cityName);
  //     setWeather(weatherData);
      
  //     const forecastData = await getForecast(cityName);
  //     setForecast(forecastData);

  //     searchCliker();
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const searchCliker = () => {
  //   setSearchCounter(searchCounter + 1);
  // }

  // const getMyLocationWeather = async () => {
  //   setLoading(true);
  //   setError('');
    
  //   try {
  //     const weatherData = await getWeatherByLocation();
  //     setWeather(weatherData);
      
  //     const forecastData = await getForecast(weatherData.city);
  //     setForecast(forecastData);
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const createtedBtnCity = (citys) => {
    return citys.map((city) => {
      return (
        <button className={styles.btnCitys} key={city} onClick={() => searchWeather(city)}>
          Погода в городе: {city}
        </button>
      )
    })

  };

  return (
    <div className = {styles.container}>
      {/* <div>
        <h3>Выполнено поисков: {searchCounter}</h3>
      </div> */}
      <div className={styles.inputContainer}>
        <input className={styles.input} type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Введите название города"/>
        <button className={styles.btn} onClick={() => searchWeather(city)}>Показать погоду</button>
      </div>
      
      <div className={styles.watherContainer}>
        {createtedBtnCity(citys)}

        <button className={styles.btnMyLoc} onClick={getMyLocationWeather}>
          Моя геолокация
        </button>

       
      </div>

      <div className={styles.waitingComponent}>
        {loading && <p>Загрузка...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      
      <div className={styles.cardWeather}>
        {weather && (
          <div>
            <h2>{weather.city}, {weather.country}</h2>
            <p>Температура: {weather.temperature}°C</p>
            <p>Ощущается как: {weather.feelsLike}°C</p>
            <p>Условия: {weather.condition}</p>
            <img 
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={weather.condition}
            />
          </div>
        )}

         {forecast.length > 0 && (
          <div>
            <h3>Прогноз на неделю:</h3>
            {forecast.map((day, index) => (
              <div key={index}>
                <p>{day.date}: {day.minTemp}°C - {day.maxTemp}°C</p>
              </div>
            ))}
          </div>
        )}
      </div>
      
      
      
      
     
    </div>
  );
}

export default App;