import React from 'react';
import SessionDisplayContainer from './session_display_container';
import SigninAndInfo from './signin_and_info';
import CreateAccountContainer from './create_account_container';
import Storefront from './storefront';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

const App = () => (
    <HashRouter>
    <div>
        <header>
            <h1>Steam Clone (coming from App.jsx)</h1>
            <SessionDisplayContainer />
        </header>
        <Switch>
            <Route exact path='/login' component={SigninAndInfo} />
            <Route exact path='/join' component={CreateAccountContainer} />
            <Route exact path="/" component={Storefront} />
        </Switch>
    </div>
    </HashRouter>
);

export default App;