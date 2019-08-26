
json.gameInfo do
    json.merge! @game.attributes
end

gameReviews = {}
gameReviewIdsByDate = Array.new
@game.reviews.each do |review|
    gameReviews[review.id] = review
    gameReviewIdsByDate.unshift(review.id)
end

json.gameReviews gameReviews
json.gameReviewIdsByDate gameReviewIdsByDate
json.photoUrls @game.photos.map {|file| url_for(file)}