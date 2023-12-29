import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    BarElement,
    Tooltip,
    Title,
    LinearScale,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const TemperatureGraph = ({ cityData }) => {
    const cities = Object.keys(cityData);
    const temperatures = cities.map((city) => cityData[city].current.temp_c);
    const data = {
        labels: cities,
        datasets: [
            {
                label: 'Current Temperature',
                data: temperatures,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
            },
        ],
    };

    return (
        <div className='mt-5'>
            <h2>Temperature Comparison Graph</h2>
            <Bar data={data} />
        </div>
    );
};

export default TemperatureGraph;
