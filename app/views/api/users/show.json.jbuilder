json.userinfo do
    json.id @user.id
    json.username @user.username
    json.wallet @user.wallet
end

ownedGames = Array.new

@user.games.each do |game|
    ownedGames << game.id
end

user_review_object = {}

@user.reviews.each do |review|
    user_review_object[review.game_id] = review.id
end

json.ownedGames ownedGames
json.reviewedGames user_review_object
