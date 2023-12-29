import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CitySelector from './CitySelector';
import WeatherCard from './WeatherCard';
import TemperatureGraph from './TemperatureGraph';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

const cities = ['Bangalore', 'Chennai', 'Kolkata', 'Delhi', 'Mumbai'];

const App = () => {
  const [selectedCity, setSelectedCity] = useState('Bangalore');
  const [weatherData, setWeatherData] = useState({});
  const [showGraph, setShowGraph] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [cityData, setCityData] = useState({});

  useEffect(() => {
    const fetchWeatherData = async () => {
      setisLoading(true);
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=fe91e0c84e794547961190823232812&q=${selectedCity}&days=1`
      );
      setWeatherData(response.data);
      setisLoading(false);
    };

    fetchWeatherData();
  }, [selectedCity]);

  if (isLoading === true) {
    <div className="spinner-border center" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  }

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleShowGraph = async () => {
    const data = {};
    for (const city of cities) {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=fe91e0c84e794547961190823232812&q=${city}&days=1`
      );
      data[city] = response.data;
    }
    setCityData(data);
    setShowGraph(true);
  };

  return (
    <div className="container">
      <Navbar />
      <CitySelector selectedCity={selectedCity} onCityChange={handleCityChange} cities={cities} />
      <WeatherCard weatherData={weatherData} />
      <button className="btn btn-primary m-3" onClick={handleShowGraph}>
        Show Graph
      </button>
      {showGraph && <TemperatureGraph cityData={cityData} />}
    </div>
  );
};

export default App;
