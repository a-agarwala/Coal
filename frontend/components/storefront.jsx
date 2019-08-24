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

        function shuffle(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }

        let gridAmount = [6,9][Math.floor(Math.random()*2)];
        let carouselAmount = 0;
        let carouselIds = [];
        let gridIds = [];

        if (this.props.storefrontData[1]) {
            let storefrontData = this.props.storefrontData;
            let gameIds = Object.keys(storefrontData);
            carouselAmount = gameIds.length - gridAmount;
            shuffle(gameIds);
            carouselIds = gameIds.slice(0, (carouselAmount));
            gridIds = gameIds.slice(carouselAmount);
        }

        return(
            <div>
                {this.props.storefrontData[1] &&
                    <div className="storefront">
                        <StorefrontCarouselOneContainer 
                        history={this.props.history}
                        gameIds={carouselIds}/>

                        <GridContainer 
                        history={this.props.history}
                        gameIds={gridIds}/>
                    </div>
                }
            </div>
            
            
        )
        
    }
}

export default Storefront;