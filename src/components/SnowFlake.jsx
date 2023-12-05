import React, { useState, useEffect } from 'react';

const Snowflake = () => {
    // Genera valores aleatorios para la posición, tamaño y velocidad de caída
    const [style, setStyle] = useState({
        left: `${Math.random() * 100}%`,
        fontSize: `${Math.random() * 20}px`,
        animationDuration: `${Math.random() * 3 + 2}s`,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setStyle({
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 5}px`,
                animationDuration: `${Math.random() * 3 + 8}s`,
            });
        }, Math.random() * 3000 + 2000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return <div style={style} className="snowflake">*</div>;
};

export default Snowflake;