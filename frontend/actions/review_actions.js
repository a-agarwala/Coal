import * as ReviewsAPIUtil from '../util/reviews_api_util';
import {getGameInfoAndReviews} from './game_actions';
import {refreshUserInfo} from './session_actions';
export const CREATE_NEW_REVIEW = 'CREATE_NEW_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

export const createNewReview = review => ({
    type: CREATE_NEW_REVIEW,
    review
})

export const updateReview = review => ({
    type: UPDATE_REVIEW,
    review
})

export const deleteReview = reviewId => ({
    type: DELETE_REVIEW,
    reviewId
})

export const createReview = review => dispatch => {
    const authorId = review.author_id;
    const gameId = review.game_id;

    return (
        ReviewsAPIUtil.createNewReview(review)
            .then(() => (dispatch(refreshUserInfo(authorId))))

            .then(() => {
                dispatch(getGameInfoAndReviews(gameId));
            })
    )
};

// export const createReview = review => dispatch => (
//     ReviewsAPIUtil.createNewReview(review)
//         .then(review => (dispatch(createNewReview(review))))
// );

export const editReview = review => dispatch => {
    const authorId = review.author_id;
    const gameId = review.game_id;

    return (
        ReviewsAPIUtil.updateReview(review)
            .then(() => (dispatch(refreshUserInfo(authorId))))

            .then(() => {
                dispatch(getGameInfoAndReviews(gameId));
            })
    )
    
};

export const removeReview = ({id, authorId, gameId}) => dispatch => {

    return (
        ReviewsAPIUtil.deleteReview(id)
            .then(() => (dispatch(refreshUserInfo(authorId))))

            .then(() => {
                dispatch(getGameInfoAndReviews(gameId));
            })
    )

    // ReviewsAPIUtil.deleteReview(reviewId)
    //     .then(()=> (dispatch(deleteReview(reviewId))))
};












