import React, { useState } from 'react';




export default function Counter() {

    // Aquí hacemos una deconstrucción del array con dos
    // valores que nos devuelve useState.
    const [count, setCount] = useState(0);

    const handleClick = function (evento) {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Has hecho click {count} veces.</p>
            <button onClick={handleClick}>Hazme click y sumo!</button>
            <button onClick={() => setCount(count-1)}>Hazme click y resto!</button>
            <button onClick={() => setCount(0)}>Te llevo a 0</button>
        </div>
    )
}
