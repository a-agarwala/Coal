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
            photo_array = game.photos

            game_data = {
                'title' => game_title,
                'price' => game_price,
                'photoUrls' => [],
            }
            
            @games[game_id] = game_data
            
            photo_array.each do |photo|
                @games[game_id]['photoUrls'] << url_for(photo)
            end

    end

    render "api/games/index"

    end

    private

    def game_params
        params.require(:game).permit(:id, photos: [])
    end

end
