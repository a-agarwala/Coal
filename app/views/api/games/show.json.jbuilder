
json.gameInfo do
    json.merge! @game.attributes
end

gameReviews = Array.new

@game.reviews.each do |review|
    gameReviews << review
end

json.gameReviews gameReviews