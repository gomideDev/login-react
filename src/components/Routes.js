import React from 'react'
import { Router, Switch, Route } from "react-router"
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'
import {history} from '../history'
import NotFound from './NotFound'

const Routes = ()=>(
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/login"/>
            <Route component={Register} exact path="/register" />
            <Route component={Home} exact path="/" />
            <Route component={NotFound}/>       
        </Switch>
    </Router>
)

export default Routes;