import * as GamesAPIUtil from "../util/games_api_util"

export const FETCH_GAME_REVIEWS = 'FETCH_GAME_REVIEWS';

export const fetchGameReviews = (gameReviews) => ({
    type: FETCH_GAME_REVIEWS,
    gameReviews
})

export const getAllGameReviews = gameId => dispatch => (
    GamesAPIUtil.fetchGameReviews(gameId)
        .then(reviews => (dispatch(fetchGameReviews(reviews))))
);
