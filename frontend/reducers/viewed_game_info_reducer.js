import { FETCH_GAME_INFO_AND_REVIEWS, LEAVE_GAME_PURCHASE_PAGE } from '../actions/game_actions';

const viewedGameReducer = (state ={}, action) => {
    Object.freeze(state);

    let newState = {};

    switch(action.type) {
        case FETCH_GAME_INFO_AND_REVIEWS:
            newState = action.gameInfoAndReviews;
            return newState;
        case LEAVE_GAME_PURCHASE_PAGE:
            return newState;
        default:
            return state;
    }
}

export default viewedGameReducer;