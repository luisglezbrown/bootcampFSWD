import React from 'react'

export default function Agenda({contactos}) {
    return (
        
        <div className="container mt-3">
            <h2 className='my-4'>Lista de Contactos</h2>
            <div className='row row-cols-1 row-cols-md-3'>
            
                {contactos.map(({nombre, apellidos, direccion, ciudad, cp, telefono}, index) => {
                    return   (
                    <ul class="list-group col mb-4">
                        <li class="list-group-item active h5" aria-current="true">Contacto {index}</li>
                        <li class="list-group-item">{nombre}</li>
                        <li class="list-group-item">{apellidos}</li>
                        <li class="list-group-item">{telefono}</li>
                        <li class="list-group-item">{direccion}, {cp}, {ciudad}</li>
                        <li class="list-group-item">
                            <button type="button" class="btn btn-warning">Eliminar</button>
                        </li>
                    </ul>)
                    })
                }
            
            </div>
        </div>
    )
}
