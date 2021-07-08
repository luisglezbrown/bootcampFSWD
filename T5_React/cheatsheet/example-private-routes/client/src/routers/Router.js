import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Public from "../pages/Public";
import Dashboard from "../pages/Dashboard";
import Admin from "../pages/Admin";
import PrivateRoute from "../pages/PrivateRoute";

import Navbar from "../components/Navbar";

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            
            <Switch>
              <Route exact path="/" component={Public}/>
              <Route path="/login" component={Login}/>
              <PrivateRoute path='/dashboard'><Dashboard /></PrivateRoute> {/* Only for logged in users */}
              <PrivateRoute path='/admin'><Admin /></PrivateRoute> {/* Only for logged in users who are admins */}
              <Route><h3 className="text-center pt-3">Esta página no existe</h3></Route>
          </Switch>
        </BrowserRouter>
    )
}
