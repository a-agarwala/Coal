import * as GamesAPIUtil from "../util/games_api_util"

export const FETCH_GAME_INFO_AND_REVIEWS = 'FETCH_GAME_INFO_AND_REVIEWS';
export const LEAVE_GAME_PURCHASE_PAGE = 'LEAVE_GAME_PURCHASE_PAGE';
export const POPULATE_STOREFRONT = 'POPULATE_STOREFRONT';

export const fetchGameInfoAndReviews = (gameInfoAndReviews) => ({
    type: FETCH_GAME_INFO_AND_REVIEWS,
    gameInfoAndReviews
})

export const leaveGamePurchasePage = () => ({
    type: LEAVE_GAME_PURCHASE_PAGE
})

export const populateStorefront = (storefrontData) => ({
    type: POPULATE_STOREFRONT,
    storefrontData
})

export const getGameInfoAndReviews = gameId => dispatch => (
    GamesAPIUtil.fetchGameInfoAndReviews(gameId)
        .then(gameInfoAndReviews => (dispatch(fetchGameInfoAndReviews(gameInfoAndReviews))))
);

export const enterStorefront = () => dispatch => (
    GamesAPIUtil.populateStorefront()
        .then(storefrontData => (dispatch(populateStorefront(storefrontData))))
);

