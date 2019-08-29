import { connect } from 'react-redux';
import Grid from './grid';

const mapStateToProps = (state, ownProps) => {
    let gameObjectsArray = [];
    
    ownProps.gameIds.forEach(gameId => {
        let gameObject = {};
        gameObject.id = gameId;
        gameObject.photoUrl = state.entities.storefront[gameId].gridPhoto;
        gameObject.price = state.entities.storefront[gameId].price;
        gameObject.title = state.entities.storefront[gameId].title;
        gameObjectsArray.push(gameObject);
    })

    return ({
        gamesArray: gameObjectsArray,
        
    })

}

export default connect(mapStateToProps, null)(Grid);