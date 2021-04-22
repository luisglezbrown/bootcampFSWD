import { useState } from 'react';
import Agenda from './components/Agenda'
import Formulario from './components/Formulario'

function App() {

  const initialContactsState = [
    {nombre: 'David', apellidos: 'García Merino', direccion: 'Alcalá, 236', ciudad: 'Madrid', cp: 28028, telefono: 600696969},
    {nombre: 'Jesús', apellidos: 'Contreras Raboso', direccion: 'Virgen del Coro, 16', ciudad: 'Madrid', cp: 28028, telefono: 654321987},
    {nombre: 'Carlos', apellidos: 'Llorente Alonso', direccion: 'Agustín Durán, 28', ciudad: 'Madrid', cp: 28028, telefono: 698745321},
  ];

  const [contactos, setContactos] = useState(initialContactsState);


 
  return (
    <div className="App">
      <Agenda contactos={contactos}/>
      <Formulario setContactos={setContactos}/> 
      {/* Para añadir el nuevo contacto debo hacerlo con setContactos, por eso lo paso como props */}
    </div>
  );
}

export default App;
