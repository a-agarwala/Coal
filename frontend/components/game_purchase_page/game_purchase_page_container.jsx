import { connect } from 'react-redux';
import { getGameInfoAndReviews, leaveGamePurchasePage } from '../../actions/game_actions';
import { refreshUserInfo, updateUserWallet, purchaseGame } from '../../actions/session_actions';
import GamePurchasePage from './game_purchase_page';
import {createReview, editReview, removeReview} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {

    let gameIdNumber = ownProps.match.params.gameId;

    const reviewedGameIds = Object.keys(state.entities.reviews);
    const allReviews = state.entities.viewedGame.gameReviews;
    let thisGameReview = {};
    let hasReviewedGame = false;
    let ownsGame = false;
    
    if (state.entities.ownedGames.includes(gameIdNumber)) {

        ownsGame = true
    }
    
    if (allReviews) {
        reviewedGameIds.forEach ((reviewedGameId) => {
            if (reviewedGameId === gameIdNumber) {
                console.log(allReviews);
                thisGameReview = allReviews[`${state.entities.reviews[reviewedGameId]}`];
                return hasReviewedGame = true;
            }
        })
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
    })
    
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const gameId = ownProps.match.params.gameId;

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