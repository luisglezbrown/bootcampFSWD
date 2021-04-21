import { Fragment } from 'react';
import PropTypes from 'prop-types';

// Los props se reciben como argumentos de la función;
export default function FirstComponent(props) {

    // console.log(props, typeof props);
    // console.log(props.title);

    const myFunction = function (bookID) {
        return (evento) => console.log(bookID, evento.target);
    }

    const mySimpleFunction = function (evento) {
        console.log(evento);
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique amet nam aut laudantium ad reiciendis?</p>
            <button onClick={myFunction(1)}>Eliminar Book1</button>
            <button onClick={myFunction(2)}>Eliminar Book2</button>
            <button onClick={mySimpleFunction}>Click me!</button>
            <button onClick={() => evento => console.log(1, evento)}>Toda la gestión inline</button>       
        </div>
    )
}

// defaultProps se recomienda especialmente para los arrays
FirstComponent.defaultProps = {
    // title: 'Sin título',
    date: 'Sin fecha',
    products: [],
}

// propTypes debe ser importado (ver arriba)
// Sirve para definir el tipo de elemento que debe recibir props.
FirstComponent.propTypes = {
    title: PropTypes.string.isRequired, // Ojo, no tiene sentido si la propiedad tiene un defaultProps
    date: PropTypes.string,
    products: PropTypes.array,
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

