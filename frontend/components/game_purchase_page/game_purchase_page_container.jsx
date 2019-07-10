import { connect } from 'react-redux';
import { getGameInfoAndReviews, leaveGamePurchasePage } from '../../actions/game_actions';
import { refreshUserInfo } from '../../actions/session_actions';
import GamePurchasePage from './game_purchase_page';
import {createReview} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {

    let gameIdNumber = Number(ownProps.match.params.gameId);

    const reviews = Object.values(state.entities.reviews);

    let hasReviewedGame = false;
    let ownsGame = false;
    
    if (state.entities.ownedGames.includes(gameIdNumber)) {

        ownsGame = true
    }
   
        reviews.forEach ((review) => {
            if (review.game_id === gameIdNumber) {
                return hasReviewedGame = true;
            }
        })

    return ({
        gameId: gameIdNumber,
        gameInfo: state.entities.viewedGame.gameInfo,
        currentUser: state.entities.users[state.session.id],
        ownsGame: ownsGame,
        hasReviewedGame: hasReviewedGame,
    })
    
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const gameId = ownProps.match.params.gameId;

    return ({
        getGameInfoAndReviews: (gameId) => dispatch(getGameInfoAndReviews(gameId)),
        leaveGamePurchasePage: () => dispatch(leaveGamePurchasePage()),
        refreshUserInfo: (currentUserId) => dispatch(refreshUserInfo(currentUserId)),
        createReview: (review) => dispatch(createReview(review))
    });
    
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePurchasePage);