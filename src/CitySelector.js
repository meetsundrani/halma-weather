import React from 'react';

const CitySelector = ({ selectedCity, onCityChange, cities }) => {
    return (
        <div>
            <label className="mt-3 ms-3">Select City:</label>
            <select className="ms-1" value={selectedCity} onChange={(e) => onCityChange(e.target.value)}>
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
