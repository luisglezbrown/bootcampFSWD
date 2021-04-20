import { Fragment } from 'react';

// Los props se reciben como argumentos de la función;
export default function FirstComponent(props) {

    console.log(props, typeof props);
    console.log(props.title);

    return (
        <div>
            <h3>{props.title}</h3>
            <small>{props.date ? props.date : 'No hay fecha'}</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique amet nam aut laudantium ad reiciendis?</p>
        </div>
    )
}

// Solo se puede tener un export default por archivo.

function SecondComponent() {
    return (
        <>
            <h1>Soy otro componente</h1>
        </>
    )
}
// Las funciones solo pueden devolver una etiqueta,
// Si no quisieramos un contenedor podemos usar Fragment en
// cualquier de sus versiones. La abreviada no necesita import.

function ThirdComponent() {
    return (
        <Fragment>
            <h1>¡Aquí el tercer componente!</h1>
        </Fragment>
    )
}

export {SecondComponent, ThirdComponent};
// Para exportar se meten los nombres de los componentes en un objeto.

