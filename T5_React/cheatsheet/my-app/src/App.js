import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';
// Los default se importan sin llaves, mientras que el resto lleva llaves.

function App() {
  return (
    <div className="App">
      <FirstComponent title='Título enviado desde el padre' date='20 de abril de 2021'/>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />

    </div>
  );
}

export default App;
