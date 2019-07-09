json.userinfo do
    json.id @user.id
    json.username @user.username
end

ownedGames = Array.new

reviews = Array.new

@user.games.each do |game|
    ownedGames << game.id
end

@user.reviews.each do |review|
    reviews << review
end

json.ownedGames ownedGames
json.reviews reviews
