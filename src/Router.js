import React, {Component, useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Profile} from './components/Profile';
import {GlobalContext} from './context/GlobalState';
import Items from './components/Items';


export const Router = ({stejt}) => {
const {loggedIn} = useContext(GlobalContext);

    return (
        <Switch>
            <Route exact path='/' render = {props => (<Items  {...props} stejt={stejt}/>)}/>
            <PrivateRoute path='/profile' component={Profile} loggedIn={loggedIn}/>
        </Switch>
    )
}


function PrivateRoute ({component: Component ,loggedIn, ...rest}) {
    return (
    <Route
    {...rest}
    render = {props => loggedIn ? (<Component {...props}/>) : (<Redirect to={{pathname: "/"}}/>)} /> );}
export default Router;