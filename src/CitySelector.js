import React from 'react';

const CitySelector = ({ selectedCity, onCityChange, cities }) => {
    return (
        <div>
            <label className='mr-3'>Select City:</label>
            <select value={selectedCity} onChange={(e) => onCityChange(e.target.value)}>
                {cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CitySelector;
