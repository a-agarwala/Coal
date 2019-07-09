export const createNewReview = review => (
    $.ajax({
        method: 'POST',
        url: '/api/reviews',
        data: { review }
    })
);

export const showReview = reviewId => (
    $.ajax({
        method: 'GET',
        url: `api/reviews/${reviewId}`
    })
);

export const updateReview = review => (
    $.ajax({
        method: 'PATCH',
        url: `api/reviews/${review.id}`,
        data : {review}
    })
);

export const deleteReview = reviewId => (
    $.ajax({
        method: 'DELETE',
        url: `api/reviews/${reviewId}`
    })
);

