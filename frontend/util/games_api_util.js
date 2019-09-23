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

export const goToRandomGame = function(gameId) {
    let newGameId = gameId;
    while (newGameId === gameId) {
        newGameId = (Math.floor(Math.random() * 14) + 1);
    }
    this.props.history.push(`/game/${newGameId}`)
}