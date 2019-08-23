class Api::GamesController < ApplicationController

    def show
        @game = Game.with_attached_photos.find(params[:id])
        render "api/games/show"
    end

    def index
        @games = {}
        Game.with_attached_photos.all.each do |game|
            game_id = game.id
            game_title = game.title
            game_price = game.price

            game_data = {
                'title' => game_title,
                'price' => game_price,
                'photoUrls' => [],
            }
            
            @games[game_id] = game_data
            
            photo_array = game.photos

            lastidx = (photo_array.length <= 6 ? photo_array.length : 7)

            (0...lastidx).each do |idx|
                @games[game_id]['photoUrls'] << url_for(game.photos[idx])
            end
    end

    render "api/games/index"

    end

    private

    def game_params
        params.require(:game).permit(:id, photos: [])
    end

end
