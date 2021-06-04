import { useForm } from '../hooks/useForm';

export default function Form({setContacts}){

    const initialFormState = {name: "", lastname: "", address: "", city: "", postalCode: "", phoneNumber: ""};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook

    const handleSubmit = e => {
        e.preventDefault();
        setContacts(contacts => [...contacts, form])
    };

    return(
        <form onSubmit={handleSubmit} className="form-group">
            <h1 className="my-4">Nuevo contacto</h1>
            <input onChange={handleInputChange} value={form.name} name="name"  className="form-control mb-3" type="text" placeholder="Introduce un nombre" />
            <input onChange={handleInputChange} value={form.lastname} name="lastname" className="form-control mb-3" type="text" placeholder="Introduce los apellidos" />
            <input onChange={handleInputChange} value={form.address} name="address" className="form-control mb-3" type="text" placeholder="Introduce la dirección" />
            <input onChange={handleInputChange} value={form.city} name="city" className="form-control mb-3" type="text" placeholder="Introduce la provincia" />
            <input onChange={handleInputChange} value={form.postalCode} name="postalCode" className="form-control mb-3" type="text" placeholder="Introduce el código postal" />
            <input onChange={handleInputChange} value={form.phoneNumber} name="phoneNumber" className="form-control mb-3" type="text" placeholder="Introduce el número de teléfono" />
            <input className="form-control mb-3 w-25 ml-auto btn-success" type="submit" value="Registrar" />
        </form>
    )
}