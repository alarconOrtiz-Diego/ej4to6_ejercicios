import React, { useState, useEffect } from 'react';

const ClockFuncional = () => {

    const state = {
        fecha: new Date(),
        edad: 0,
        nombre: "Martín",
        apellidos: "San José"
    }

    const [edad, setEdad] = useState(0);

    useEffect(() => {
        let timerID = setInterval( () =>  setEdad(edad + 1) , 1000 );

        return () => {
            clearInterval(timerID)
        };
    });

    return (
        <div>
            <h2>
                Hora Actual: {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {edad}</h1>
        </div>
    );

}

export default ClockFuncional;
