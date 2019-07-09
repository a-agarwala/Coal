import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import ownedGamesReducer from './owned_games_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    ownedGames: ownedGamesReducer,
    reviews: reviewsReducer
});

export default entitiesReducer;