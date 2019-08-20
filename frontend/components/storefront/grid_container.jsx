import { connect } from 'react-redux';
import Grid from './grid';

const mapStateToProps = (state, ownProps) => {
    let gameObjectsArray = [];
    
    for (let i=1; i<=9; i++) {
        let gameObject = {};
        gameObject.id = i;
        gameObject.photoUrl = state.entities.storefront[i].photoUrls[0];
        gameObject.price = state.entities.storefront[i].price;
        gameObjectsArray.push(gameObject);
    };

    return ({
        gamesArray: gameObjectsArray,
        
    })

}

export default connect(mapStateToProps, null)(Grid);