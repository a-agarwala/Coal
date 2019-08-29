import { connect } from 'react-redux';
import Grid from './grid';

const mapStateToProps = (state, ownProps) => {
    let gameObjectsArray = [];
    
    ownProps.gameIds.forEach(gameId => {
        let gameObject = {};
        gameObject.id = gameId;

        let photoUrls = state.entities.storefront[gameId].photoUrls;

        photoUrls.forEach((photoUrl) => {
            if (photoUrl.includes("1.jp") && !photoUrl.includes('11.jp') && !photoUrl.includes("carousel")) {
                gameObject.photoUrl = photoUrl;
                return;
            } 
        })
        
        gameObject.price = state.entities.storefront[gameId].price;
        gameObject.title = state.entities.storefront[gameId].title;
        gameObjectsArray.push(gameObject);
    })

    return ({
        gamesArray: gameObjectsArray,
        
    })

}

export default connect(mapStateToProps, null)(Grid);