import * as ReviewsAPIUtil from '../util/reviews_api_util';

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

export const createReview = review => dispatch => (
    ReviewsAPIUtil.createNewReview(review)
        .then(review => (dispatch(createNewReview(review))))
);

export const editReview = review => dispatch => (
    ReviewsAPIUtil.updateReview(review)
        .then(review => (dispatch(updateReview(review))))
);

export const removeReview = reviewId => dispatch => (
    ReviewsAPIUtil.deleteReview(reviewId)
        .then(()=> (dispatch(deleteReview(reviewId))))
);












