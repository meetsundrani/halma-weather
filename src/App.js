import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CitySelector from './CitySelector';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

const cities = ['Bangalore', 'Chennai', 'Kolkata', 'Delhi', 'Mumbai'];

const App = () => {
  const [selectedCity, setSelectedCity] = useState('Bangalore');

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=fe91e0c84e794547961190823232812&q=${selectedCity}&days=1`
      );
      console.log(response);
    };

    fetchWeatherData();
  }, [selectedCity]);

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };
  return (
    <div className="container">
    <Navbar/>
      <CitySelector selectedCity={selectedCity} onCityChange={handleCityChange} cities={cities} />
      <button className="btn btn-primary m-3">
        Show Graph //Todo
      </button>
    </div>
  );
};

export default App;
