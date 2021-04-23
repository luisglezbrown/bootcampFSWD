import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent } from './components/FirstComponent';
import Counter from './components/Counter'
import UseEffectComponent from './components/UseEffectComponent';
import { useState } from 'react';

// Los default se importan sin llaves, mientras que el resto lleva llaves.

function App() {

  const [show, setShow] = useState(true)

  return (
    <div className="App">
{/*       <Counter />
      <FirstComponent title='Título enviado desde el padre' date='20 de abril de 2021'/>
      <FirstComponent title='Título'/>
      <SecondComponent />
      <ThirdComponent /> */}
      {show && <UseEffectComponent />}
      <button onClick={() => setShow(!show)}>Show component</button>


    </div>
  );
}

export default App;
