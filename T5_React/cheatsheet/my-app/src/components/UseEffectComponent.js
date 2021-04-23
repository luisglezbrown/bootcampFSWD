import { useEffect, useState } from "react";

export default function UseEffectComponent() {

    const [count, setCount] = useState(0);

    /* console.log('Me ejecuto cada vez que cambia el componente'); */

    useEffect(() => {
        console.log('Acabo de montarme');

        //Esta parte es opcional, el return debe devolver una función que se ejecutará solo al desmontarse
        return () => console.log('Me desmonto');

    }, []);
    // Después de la coma puedo meter estados que, al cambiar, se ejecutará nuestro useEffect.


    return (
        <div>
            <span>{count}</span>
            <button onClick={() => setCount(count+1)}>+</button>
        </div>
    )
}
