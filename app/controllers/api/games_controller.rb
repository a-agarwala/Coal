class Api::GamesController < ApplicationController

    def show
        @game = Game.find(params[:id])
        render "api/games/show"
    end

    private

    def game_params
        params.require(:game).permit(:id)
    end

end
