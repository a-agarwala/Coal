import { connect } from 'react-redux';
import { getGameInfoAndReviews } from '../../actions/game_actions';
import GamePurchasePage from './game_purchase_page';

const mapStateToProps = (state, ownProps) => {
    const gameId = ownProps.match.params.gameId

    const reviews = Object.values(state.entities.reviews);

    let hasReviewedGame = false;
    
    if (reviews) {
        reviews.forEach ((review) => {
            if (review.game_id === gameId) {
                hasReviewedGame = true;
            }
        })
    }

    return ({
        gameId: gameId,
        currentUser: state.entities.users[state.session.id],
        ownedGames: state.entities.ownedGames,
        hasReviewedGame: hasReviewedGame,
    })
    
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const gameId = ownProps.match.params.gameId;

    return ({
        getGameInfoAndReviews: (gameId) => dispatch(getGameInfoAndReviews(gameId))
    });
    
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePurchasePage);