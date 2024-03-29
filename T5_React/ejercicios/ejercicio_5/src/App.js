import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import Index from './pages/Index';
import Ejercicio1 from './pages/Ejercicio1';
import Ejercicio2 from './pages/Ejercicio2';
import Ejercicio3 from './pages/Ejercicio3';
import Ejercicio4 from './pages/Ejercicio4';

import Error from './pages/Error';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>

        <nav className="navbar navbar-dark bg-dark nav-fill">
          {/* <NavLink exact to='/'>Ir a inicio</NavLink> */}
          <NavLink to='/ejercicio1' className="nav-item nav-link" activeClassName="selected">Ejercicio 1</NavLink>
          <NavLink to='/ejercicio2'className="nav-item nav-link" activeClassName="selected">Ejercicio 2</NavLink>
          <NavLink to='/ejercicio3'className="nav-item nav-link" activeClassName="selected">Ejercicio 3</NavLink>
          <NavLink to='/ejercicio4'className="nav-item nav-link" activeClassName="selected">Ejercicio 4</NavLink>
        </nav>


        <Switch>
            <Route exact path='/' component={Index}/>
            <Route path='/ejercicio1' component={Ejercicio1}/>
            <Route path='/ejercicio2' component={Ejercicio2}/>
            <Route path='/ejercicio3' component={Ejercicio3}/>
            <Route path='/ejercicio4' component={Ejercicio4}/>

            <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
