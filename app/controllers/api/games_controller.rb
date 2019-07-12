class Api::GamesController < ApplicationController

    def show
        @game = Game.with_attached_photos.find(params[:id])
        render "api/games/show"
    end

    private

    def game_params
        params.require(:game).permit(:id, photos: [])
    end

end
