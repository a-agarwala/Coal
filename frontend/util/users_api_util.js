export const walletUtil = user => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${user.id}`,
        data : { user }
    })
)

export const purchaseGame = game_ownership => (
    $.ajax({
        method: 'POST',
        url: '/api/gameownerships',
        data: { game_ownership }
    })
)