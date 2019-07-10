class Api::ReviewsController < ApplicationController
    def show
        @review = Review.find(params[:id])
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render "api/reviews/create"
        else
            render json: @review.errors.full_messages, status: 422
        end

    end

    def index
    end

    def update
        @review = Review.find(params[:id])

        if @review.update_attributes(review_params)
            render "api/reviews/show"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
    end

    private

    def review_params
        params.require(:review).permit(:author_id, :game_id, :recommended, :body)
    end


end
