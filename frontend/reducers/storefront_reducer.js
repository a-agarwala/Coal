import {POPULATE_STOREFRONT} from '../actions/game_actions';

const storefrontReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);

    switch(action.type) {
        case POPULATE_STOREFRONT:
            newState = action.storefrontData.gamesData;
            return newState;
        default:
            return state;
    }
}

export default storefrontReducer;