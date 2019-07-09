import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const ownedGamesReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);
   
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return action.currentUser.ownedGames;
        case LOGOUT_CURRENT_USER:
            newState = {};
            return newState;
        default:
            return state;
    }
}

export default ownedGamesReducer;