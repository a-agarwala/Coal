export const fetchGameInfoAndReviews = gameId => (
    $.ajax({
        method: 'GET',
        url: `/api/games/${gameId}`,
    })
)
