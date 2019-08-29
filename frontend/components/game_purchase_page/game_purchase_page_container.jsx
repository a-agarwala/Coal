import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getGameInfoAndReviews, leaveGamePurchasePage } from '../../actions/game_actions';
import { refreshUserInfo, updateUserWallet, purchaseGame } from '../../actions/session_actions';
import GamePurchasePage from './game_purchase_page';
import { createReview, editReview, removeReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {

    let gameIdNumber = ownProps.match.params.gameId;

    const allReviews = state.entities.viewedGame.gameReviews;
    let thisGameReview = {};
    let hasReviewedGame = !!(state.entities.reviews[gameIdNumber]);
    let ownsGame = false;
    const ownedGameIds = state.entities.ownedGames.map((ownedGame) => {
        return ownedGame.id.toString();
    });

    if (hasReviewedGame || ownedGameIds.includes(gameIdNumber)) {
        ownsGame = true
    };
 
    if (allReviews && hasReviewedGame) {
        thisGameReview = allReviews[`${state.entities.reviews[gameIdNumber]['reviewId']}`]
    }

    return ({
        gameId: gameIdNumber,
        gameInfo: state.entities.viewedGame.gameInfo,
        gamePhotos: state.entities.viewedGame.photoUrls,
        currentUser: state.entities.users[state.session.id],
        ownsGame: ownsGame,
        hasReviewedGame: hasReviewedGame,
        thisGameReview: thisGameReview,
        gameReviewIdsByDate: state.entities.viewedGame.gameReviewIdsByDate,
        allReviews: allReviews,
        location: ownProps.location,
        history: ownProps.history
    })
    
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return ({
        getGameInfoAndReviews: (gameId) => dispatch(getGameInfoAndReviews(gameId)),
        leaveGamePurchasePage: () => dispatch(leaveGamePurchasePage()),
        refreshUserInfo: (currentUserId) => dispatch(refreshUserInfo(currentUserId)),
        createReview: (review) => dispatch(createReview(review)),
        editReview: (review) => dispatch(editReview(review)),
        removeReview: (reviewId) => dispatch(removeReview(reviewId)),
        updateUserWallet: (user) => dispatch(updateUserWallet(user)),
        purchaseGame: (gameOwnership) => dispatch(purchaseGame(gameOwnership)),
    });
    
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePurchasePage);