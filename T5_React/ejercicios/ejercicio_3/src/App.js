import Agenda from './components/Agenda'
import Formulario from './components/Formulario'

let contactos = [
  {nombre: 'David', apellidos: 'García Merino', direccion: 'Alcalá, 236', ciudad: 'Madrid', cp: 28028, telefono: 600696969},
  {nombre: 'Jesús', apellidos: 'Contreras Raboso', direccion: 'Virgen del Coro, 16', ciudad: 'Madrid', cp: 28028, telefono: 654321987},
  {nombre: 'Carlos', apellidos: 'Llorente Alonso', direccion: 'Agustín Durán, 28', ciudad: 'Madrid', cp: 28028, telefono: 698745321},
]

function App() {
  return (
    <div className="App">
      <Agenda contactos={contactos}/>
      <Formulario />
    </div>
  );
}

export default App;
