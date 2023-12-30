import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CitySelector from './CitySelector';
import WeatherCard from './WeatherCard';
import TemperatureGraph from './TemperatureGraph';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Spinner from './Spinner';
import './App.css'
import { apiUrl } from './Constants';

const cities = ['Bangalore', 'Chennai', 'Kolkata', 'Delhi', 'Mumbai'];

const App = () => {
  const [selectedCity, setSelectedCity] = useState('Bangalore');
  const [weatherData, setWeatherData] = useState({});
  const [showGraph, setShowGraph] = useState(false);
  const [cityData, setCityData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        console.log(process.env.WEATHER_API_KEY)
        const response = await axios.get(
          `${apiUrl}&q=${selectedCity}`
          );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [selectedCity]);

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleShowGraph = async () => {
    const data = {};
    try {
      setLoading(true);
      for (const city of cities) {
        const response = await axios.get(
          `${apiUrl}&q=${city}`
        );
        data[city] = response.data;
      }
      setCityData(data);
      setShowGraph(true);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`container mt-5 ${loading ? 'blur' : ''}`}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center mb-4"><Navbar/></h1>
          <CitySelector selectedCity={selectedCity} onCityChange={handleCityChange} cities={cities} />
          <WeatherCard weatherData={weatherData} />
          <button className="btn btn-primary btn-block mt-3 ms-3" onClick={handleShowGraph}>
            Show graph
          </button>
          {loading ? <Spinner /> : null}
          {showGraph && <TemperatureGraph cityData={cityData} />}
        </div>
      </div>
    </div>
  );
};

export default App;
