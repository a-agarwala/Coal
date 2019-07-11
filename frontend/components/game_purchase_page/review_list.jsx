import React from 'react';
import ReviewListItem from './review_list_item';

class ReviewList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getGameInfoAndReviews;
    }

    render() {

        let reviewListDisplay = {};
        

        if (this.props.allReviews.length === 0) {
            reviewListDisplay = (
                <h1>Sorry, there are no reviews for this game yet.</h1>
            );
        } else {
            reviewListDisplay = (
            <div>
                <div id="customer-reviews-title" className="caps-white-header">Customer Reviews</div>
                    <div id="review-summary-bar">
                        <div id="review-summary-bar-content">
                            <h3> Overall Reviews: </h3>
                            <div id="game-rating-review-list"
                                className={(this.props.gameRatingCalc > 49) ?
                                    "positive-rating" : "negative-rating"} >
                                {this.props.gameRating}</div>
                            <div id="game-calc-dsiplay-review-list"> ({this.props.gameRatingCalc}% of players gave this game a positive review.) </div>
                        </div>
                    </div>

                    <div>
                        <ul>
                            {this.props.allReviews.map(review => {
                                return (
                                    <ReviewListItem
                                        key={review.id}
                                        review={review} />
                                )
                            })}
                        </ul>
                    </div>
            </div>
            );
        }

        return (
            <div id="review-list-whole" className="center_horizontally">
                {reviewListDisplay}
            </div>
        )
    }
}

export default ReviewList;