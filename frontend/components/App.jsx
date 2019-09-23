import React from 'react';
import HeaderContainer from './header/header_container';
import SigninAndInfo from './signin_create_page/signin_and_info';
import CreateAccountContainer from './create_acc_page/create_account_container';
import GamePurchasePageContainer from './game_purchase_page/game_purchase_page_container';
import StorefrontContainer from './storefront_container';
import LibraryContainer from './library/library_container';

import ShoppingCart from './shopping_cart/shopping_cart';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App = () => {
    
    let headerRef = React.createRef();

    return (
    <div id="flex-container">
        <header ref={headerRef}>
            <HeaderContainer/>
        </header>
        <Switch>
            <AuthRoute exact path='/login' component={SigninAndInfo} />
            <AuthRoute exact path='/join' component={CreateAccountContainer} />
            <Route exact path='/game/:gameId' render={(props) => <GamePurchasePageContainer {...props} headerRef={headerRef}/>} />
            
            {/* <Route exact path="/cart" component={ShoppingCart}/> */}
            <ProtectedRoute exact path='/library' component={LibraryContainer}/>
            <Route exact path="/" component={StorefrontContainer} />
        </Switch>
        <footer id="global-footer">

        </footer>
    </div>
)};

export default App;

// component = { GamePurchasePageContainer }