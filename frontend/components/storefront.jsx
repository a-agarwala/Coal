import React from 'react';
import { Link } from 'react-router-dom';
import Grid from './storefront/grid';
import GridContainer from './storefront/grid_container';
import StorefrontCarouselOneContainer from './storefront/storefront_carousel_one_container'
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
                {this.props.storefrontData[1] &&
                    <div>
                        <StorefrontCarouselOneContainer history={this.props.history}/>
                        <GridContainer history={this.props.history}/>
                    </div>
                }
            </div>
            
            
        )
        
    }
}

export default Storefront;