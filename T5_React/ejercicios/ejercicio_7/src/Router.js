import { BrowserRouter, Route, Switch } from "react-router-dom";
import FilmDetails from "./components/FilmDetails";
import UpcomingFilms from './components/UpcomingFilms';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={UpcomingFilms}/>
                <Route path='/film/:id' component={FilmDetails}/>
                {/* <Route component={Error}/> */}
            </Switch>
        </BrowserRouter>
    )
}
