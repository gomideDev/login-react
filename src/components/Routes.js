import React from 'react'
import { Router, Switch, Route } from "react-router"
import login from '../pages/login/login'
import home from '../pages/home/home'
import register from '../pages/register/register'
import {history} from '../history'
import notFound from './notFound'

const Routes = ()=>(
    <Router history={history}>
        <Switch>
            <Route component={login} exact path="/login"/>
            <Route component={register} exact path="/register" />
            <Route component={home} exact path="/" />
            <Route component={notFound}/>       
        </Switch>
    </Router>
)

export default Routes;