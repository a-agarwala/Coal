json.userinfo do
    json.id @user.id
    json.username @user.username
    json.wallet @user.wallet
end

ownedGames = Array.new

# @user.games.each do |game|
#     ownedGames << game.id
# end

user_review_object = {}

@user.reviews.each do |review|
    user_review_object[review.game_id] = review.id
end

@user.games.each do |game|
    owned_game_object = {}
    owned_game_object['id'] = game.id
    owned_game_object['title_photo'] = url_for(game.photos[0])
    # owned_game_object['has_reviewed'] = !!(user_review_object[game.id])
    ownedGames << owned_game_object
end

json.ownedGames ownedGames
json.reviewedGames user_review_object
