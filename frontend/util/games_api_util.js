export const fetchGameInfoAndReviews = gameId => (
    $.ajax({
        method: 'GET',
        url: `/api/games/${gameId}`,
    })
)

export const populateStorefront = () => (
    $.ajax({
        method: 'GET',
        url: '/api/games',
    })
)