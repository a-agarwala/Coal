# json.partial! "api/users/user", user: @user

# json.extract! @user, :id, :username
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

# json.extract! @owned_games, :id

# json.extract! @reviewed_games, :id
