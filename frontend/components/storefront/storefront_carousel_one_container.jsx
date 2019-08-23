import {connect} from 'react-redux';
import StorefrontCarouselOne from './storefront_carousel_one';

const mapStateToProps = (state, ownProps) => {
    let gameObjectsArray = [];

    for (let i = 10; i <= 15; i++) {
        let gameObject = {};
        gameObject.id = i;
        gameObject.photoUrls = state.entities.storefront[i].photoUrls;
        gameObject.price = state.entities.storefront[i].price;
        gameObject.title = state.entities.storefront[i].title;
        gameObjectsArray.push(gameObject);
    };

    return ({
        gamesArray: gameObjectsArray,

    })
}

export default connect(mapStateToProps, null)(StorefrontCarouselOne);