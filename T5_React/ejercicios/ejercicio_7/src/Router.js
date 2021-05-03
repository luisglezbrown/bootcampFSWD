import { BrowserRouter, Route, Switch } from "react-router-dom";
import Film from "./pages/Film";
import Results from './pages/Results.js';
import Index from './pages/Index';


export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route path='/film/:id' component={Film}/>
                <Route path='/results/:search' component={Results}/>
                {/* <Route component={Error}/> */}
            </Switch>
        </BrowserRouter>
    )
}
