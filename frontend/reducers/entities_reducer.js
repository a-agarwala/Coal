import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import ownedGamesReducer from './owned_games_reducer';
import reviewsReducer from './reviews_reducer';
import viewedGameReducer from './viewed_game_info_reducer';
import storefrontReducer from './storefront_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    ownedGames: ownedGamesReducer,
    reviews: reviewsReducer,
    viewedGame: viewedGameReducer,
    storefront: storefrontReducer
});

export default entitiesReducer;