import React from 'react';
import Snowflake from './SnowFlake.jsx';

const Snowfall = ({ numSnowflakes }) => {
    // Genera un número de copos de nieve
    const snowflakes = [];
    for (let i = 0; i < numSnowflakes; i++) {
        snowflakes.push(<Snowflake key={i} />);
    }

    return <div className="snowfall">{snowflakes}</div>;
};
export default Snowfall