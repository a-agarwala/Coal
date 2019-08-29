import {connect} from 'react-redux';
import StorefrontCarouselOne from './storefront_carousel_one';

const mapStateToProps = (state, ownProps) => {
    let gameObjectsArray = [];
    
    ownProps.gameIds.forEach(gameId => {
        let gameObject = {};
        gameObject.id = gameId;
        gameObject.photoUrls = state.entities.storefront[gameId].photoUrls;
        gameObject.photoUrls.unshift(state.entities.storefront[gameId].carouselPhoto)
        gameObject.price = state.entities.storefront[gameId].price;
        gameObject.title = state.entities.storefront[gameId].title;
        gameObjectsArray.push(gameObject);
    })

    return ({
        gamesArray: gameObjectsArray,
    })
}

export default connect(mapStateToProps, null)(StorefrontCarouselOne);