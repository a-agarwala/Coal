export const fetchGameReviews = gameId => (
    $.ajax({
        method: 'GET',
        url: `/api/games/${gameId}`,
    })
)