import { Route, Switch } from "react-router-dom";

import React from 'react'
import Login from "./Login";
import Public from "./Public";
import Dashboard from "./Dashboard";
import Error from "./Error";

export default function Pages() {
    return (
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/public' component={Public}/>
            <Route path='/dashboard' component={Dashboard}/>

            <Route component={Error}/>
      </Switch>

    )
}
