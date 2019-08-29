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
    user_review_object[review.game_id] = {}
    user_review_object[review.game_id]['reviewId'] = review.id
    created_date = review.created_at
    updated_date = review.updated_at

    user_review_object[review.game_id]['createdOn'] = created_date
    user_review_object[review.game_id]['updatedOn'] = false
    if created_date != updated_date
        user_review_object[review.game_id]['updatedOn'] = updated_date
    end

end

@user.games.each do |game|
    owned_game_object = {}
    owned_game_object['id'] = game.id
    owned_game_object['title'] = game.title
    owned_game_object['title_photo'] = url_for(game.photos[0])
    owned_game_object['purchase_date'] = @user.game_ownerships.find_by(game_id: [game.id]).created_at.to_s[0..9]
    ownedGames.push(owned_game_object)
end

json.ownedGames ownedGames
json.reviewedGames user_review_object
