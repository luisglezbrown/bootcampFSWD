import React from 'react'

export default function Formulario() {
    return (
        <div className="container mt-3">
            <h2 className='my-4'>Lista de Contactos</h2>
            <form>
                <input type="text" className="form-control my-3" id="exampleFormControlInput1" placeholder="Introduce un nombre" />
                <input type="text" className="form-control my-3" id="exampleFormControlInput1" placeholder="Introduce los apellidos" />
                <input type="text" className="form-control my-3" id="exampleFormControlInput1" placeholder="Introduce la dirección" />
                <input type="text" className="form-control my-3" id="exampleFormControlInput1" placeholder="Introduce la provincia" />
                <input type="number" className="form-control my-3" id="exampleFormControlInput1" placeholder="Introduce el código postal" />
                <input type="tel" className="form-control my-3" id="exampleFormControlInput1" placeholder="Introduce el número de teléfono" />
                <button type="submit" class="btn btn-success float-right px-5">Registrar</button>
            </form>
        </div>
    )
}
