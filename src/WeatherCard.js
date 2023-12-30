import React from 'react';
import Spinner from './Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Handle the case where data is not available yet & blur app
const WeatherCard = ({ weatherData }) => {
    if (!weatherData.current || !weatherData.forecast || !weatherData.forecast.forecastday[0]) {
        return (
            <Spinner/>
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
                <p><FontAwesomeIcon icon="fa-solid fa-wind" size="lg" /> Wind: {current.wind_kph} KPH</p>
                <p><FontAwesomeIcon icon="fa-solid fa-compass" size="lg" /> Wind Direction: {current.wind_dir}</p>
                <p><img src={current.condition.icon} alt="Current Condition img"/>{current.condition.text}</p>
            </div>
        </div>
    );
};

export default WeatherCard;
