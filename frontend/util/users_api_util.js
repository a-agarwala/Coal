export const walletUtil = user => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${user.id}`,
        data : { user }
    })
)

export const purchaseGame = gameOwnership => (
    $.ajax({
        method: 'POST',
        url: '/api/gameownerships',
        data: { gameOwnership }
    })
)