import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import {CREATE_NEW_REVIEW, UPDATE_REVIEW, DELETE_REVIEW} from '../actions/review_actions';
import merge from 'lodash/merge';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // action.currentUser.reviews.forEach(review => {
            //     newState[review.id] = review;
            // });
            newState = action.currentUser.reviewedGames
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        case CREATE_NEW_REVIEW:
            newState[action.review.id] = action.review;
            return newState;
        case UPDATE_REVIEW:
            newState[action.review.id] = action.review;
            return newState;
        case DELETE_REVIEW:
            delete newState[action.reviewId];
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer;