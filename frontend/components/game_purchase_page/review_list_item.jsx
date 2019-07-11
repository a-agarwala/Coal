import React from 'react';


const ReviewListItem = ({review}) => {
    return (
        <li>
            <div className="review-box-container">
                <div className="review-box-content">
                    <div className="review-box-left-column">
                        {review.author_username}
                    </div >
                    <div className="review-box-right-column">
                        <div className="review-right-column-header">
                        <div className={ review.recommended ? 
                        "review-right-column-header-recommended" 
                        : "review-right-column-header-not-recommended"}>
                        </div>
                        <div className="review-right-column-header-rec">{review.recommended ? "Recommended" : "Not Recommended"}</div>
                        </div>
                        <div className="review-posted-on-info">
                            Posted: {review.created_at.slice(0,10)}
                        </div>
                        <div className="review-updated-on-info">
                            {(review.updated_at.slice(0, 10) !== review.created_at.slice(0, 10)) ?
                            `Updated: ${review.updated_at.slice(0, 10)}` : null }
                        </div>
                        <div className="review-text">
                            {review.body}
                        </div>

                    </div>
                </div>
            </div>
        </li>
    )
}

export default ReviewListItem;