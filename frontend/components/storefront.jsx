import React from 'react';
import { Link } from 'react-router-dom';
import Grid from './storefront/grid';

class Storefront extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.leaveGamePurchasePage();

        if (this.props.currentUser) {
            this.props.refreshUserInfo(this.props.currentUser.id);
        };

        this.props.enterStorefront();
        // this.props.history.push(`/game/${Math.floor(Math.random() * 14) + 1}`)
    }

    render() {
        return(
            <div>
                <h1>Storefront</h1>
                <Grid/>
            </div>
            
        )
        
    }
}

export default Storefront;