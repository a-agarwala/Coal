import {connect} from 'react-redux';
import StorefrontCarouselOne from './storefront_carousel_one';

const mapStateToProps = (state, ownProps) => {
    let gameObjectsArray = [];
    
    ownProps.gameIds.forEach(gameId => {
        let gameObject = {};
        gameObject.id = gameId;
        let photoUrls = state.entities.storefront[gameId].photoUrls;
        let carouselPhoto;
        let refinedPhotoUrls = []
        photoUrls.forEach((photoUrl) => {

            if (photoUrl.includes("carousel")) {
                carouselPhoto = photoUrl;
            } else if (!photoUrl.includes("1.jp")) {
                refinedPhotoUrls.push(photoUrl)
            }

        })

        gameObject.photoUrls = []

        if (refinedPhotoUrls.length <= 6) {
            gameObject.photoUrls = refinedPhotoUrls;
        } else {
            gameObject.photoUrls = refinedPhotoUrls.slice(0, 6);
        }

        gameObject.photoUrls.unshift(carouselPhoto);


        gameObject.price = state.entities.storefront[gameId].price;
        gameObject.title = state.entities.storefront[gameId].title;
        gameObjectsArray.push(gameObject);
    })

    return ({
        gamesArray: gameObjectsArray,
    })
}

export default connect(mapStateToProps, null)(StorefrontCarouselOne);