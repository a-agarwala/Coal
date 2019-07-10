import * as GamesAPIUtil from "../util/games_api_util"

export const FETCH_GAME_INFO_AND_REVIEWS = 'FETCH_GAME_INFO_AND_REVIEWS';
export const LEAVE_GAME_PURCHASE_PAGE = 'LEAVE_GAME_PURCHASE_PAGE';

export const fetchGameInfoAndReviews = (gameInfoAndReviews) => ({
    type: FETCH_GAME_INFO_AND_REVIEWS,
    gameInfoAndReviews
})

export const leaveGamePurchasePage = () => ({
    type: LEAVE_GAME_PURCHASE_PAGE
})

export const getGameInfoAndReviews = gameId => dispatch => (
    GamesAPIUtil.fetchGameInfoAndReviews(gameId)
        .then(gameInfoAndReviews => (dispatch(fetchGameInfoAndReviews(gameInfoAndReviews))))
);


