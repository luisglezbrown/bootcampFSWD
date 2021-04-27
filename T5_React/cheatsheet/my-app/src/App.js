// Los default se importan sin llaves, mientras que el resto lleva llaves.
import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent } from './components/FirstComponent';
import Counter from './components/Counter'

import UseEffectComponent from './components/UseEffectComponent';
import UseContextComponent from './components/UseContextComponent';

import { useState, createContext } from 'react';
import Router from './Router'

// Los UseContext se realizan fuera de la función principal
export const GlobalContext = createContext();

function App() {

  const [show, setShow] = useState(true)

  return (
    <div className="App">
      {/* <Counter />
      <FirstComponent title='Título enviado desde el padre' date='20 de abril de 2021'/>
      <FirstComponent title='Título'/>
      <SecondComponent />
      <ThirdComponent />
      {show && <UseEffectComponent />}
      <button onClick={() => setShow(!show)}>Show component</button> 
      
      <GlobalContext.Provider value='Soy un string guardado en un contexto'>
        <UseContextComponent />
      </GlobalContext.Provider>*/}
      
      <Router />
    </div>
  );
}

export default App;
