
json.gameInfo do
    json.merge! @game.attributes
end

gameReviews = {}
gameReviewIdsByDate = Array.new
@game.reviews.each do |review|
    gameReviews[review.id] = review
    gameReviewIdsByDate.unshift(review.id)
end

purchase_page_photos = @game.photos.first(@game.photos.length - 1)

json.gameReviews gameReviews
json.gameReviewIdsByDate gameReviewIdsByDate
json.photoUrls purchase_page_photos.map {|file| url_for(file)}
