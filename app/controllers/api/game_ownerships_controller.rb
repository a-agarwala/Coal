class Api::GameOwnershipsController < ApplicationController

    def show
    end

    def create
        @game_ownership = GameOwnership.new(game_ownership_params)

        if @game_ownership.save
            render "api/users/show"
        else
            render json: @game_ownership.errors.full_messages
        end
    end

    private

    def game_ownership_params
        params.require(:game_ownership).permit(:owner_id, :game_id)
    end

end
