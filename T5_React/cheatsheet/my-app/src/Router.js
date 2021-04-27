import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import Index from './pages/Index';
import Dashboard from './pages/Dashboard';
import Record from './pages/Records';
import Error from './pages/Error';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <NavLink to='/' style={{marginRight: '10px'}}>Ir a inicio</NavLink>
                <NavLink to='/dashboard' style={{marginRight: '10px'}}>Panel de control</NavLink>
                <NavLink to='/record/5'>Record</NavLink>

                <Switch>
                    <Route exact path='/' component={Index}/>
                    <Route path='/dashboard' component={Dashboard}/>
                    <Route path='/record/:user' component={Record}/>

                    <Route component={Error}/>
                </Switch>

                <h2>Footer que no cambia</h2>
            </BrowserRouter>
        </div>
    )
}
