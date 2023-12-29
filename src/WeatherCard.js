import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Handle the case where data is not available yet
const WeatherCard = ({ weatherData }) => {
    if (!weatherData.current || !weatherData.forecast || !weatherData.forecast.forecastday[0]) {
        return (
            <div className="spinner-border center" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

    const { current, forecast } = weatherData;

    return (
        <div className='container'>
            <div className='card mt-3'>
                <h2>Current Weather</h2>
                <p><FontAwesomeIcon icon="fa-solid fa-temperature-quarter" size="lg" /> Temperature: {current.temp_c}°C</p>
                <p><FontAwesomeIcon icon="fa-solid fa-temperature-arrow-up" size="lg" /> Highest Temperature: {forecast.forecastday[0].day.maxtemp_c}°C</p>
                <p><FontAwesomeIcon icon="fa-solid fa-temperature-arrow-down" size="lg" /> Lowest Temperature: {forecast.forecastday[0].day.mintemp_c}°C</p>
            </div>
        </div>
    );
};

export default WeatherCard;
