gamesData = {}

@games.each do |game|
    game_id = game.id
    game_title = game.title
    game_price = game.price
    game_data = {
        'title' => game_title,
        'price' => game_price,
        'photoUrls' => [],
    }
    gamesData[game_id] = game_data

    (0..4).each do |idx|
        gamesData[game_id]['photoUrls'] << url_for(game.photos[idx])
    end
end

json.gamesData gamesData