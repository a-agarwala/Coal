import React from 'react';
import Header from './header/header';
import SigninAndInfo from './signin_create_page/signin_and_info';
import CreateAccountContainer from './create_acc_page/create_account_container';
import GamePurchasePageContainer from './game_purchase_page/game_purchase_page_container';
import StorefrontContainer from './storefront_container';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App = () => (
    <div id="flex-container">
        <header>
            <Header/>
        </header>
        <Switch>
            <AuthRoute exact path='/login' component={SigninAndInfo} />
            <AuthRoute exact path='/join' component={CreateAccountContainer} />
            <Route exact path='/game/:gameId' component={GamePurchasePageContainer} />
            <Route exact path="/" component={StorefrontContainer} />
        </Switch>
        <footer id="global-footer">

        </footer>
    </div>
);

export default App;