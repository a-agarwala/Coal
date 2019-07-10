import React from 'react';
import ReviewListItem from './review_list_item';

class ReviewList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let reviewListDisplay = {}

        if (this.props.allReviews.length === 0) {
            reviewListDisplay = (
                <h1>Sorry, there are no reviews for this game yet.</h1>
            );
        } else {
            reviewListDisplay = this.props.allReviews.map(review => {
                return (
                    <ReviewListItem
                    key={review.id}
                    review={review} />
                )
            } );
        }

        return (
            <div className="center_horizontally">
                <ul>
                    {reviewListDisplay}
                </ul>
            </div>
        )
    }
}

export default ReviewList;