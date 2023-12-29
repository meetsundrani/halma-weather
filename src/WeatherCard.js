import React from 'react';

const WeatherCard = ({ weatherData }) => {
    const { current, forecast } = weatherData;
    return (
        <div className='container'>
        <div className='card mt-3'>
            <h2>Current Weather</h2>
                <p>Temperature: {current.temp_c}°C</p>
                <p>Highest Temperature: {forecast.forecastday[0].day.maxtemp_c}°C</p>
                <p>Lowest Temperature: {forecast.forecastday[0].day.mintemp_c}°C</p>
        </div>
        </div>
    );
};

export default WeatherCard;
