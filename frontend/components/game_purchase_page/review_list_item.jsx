import React from 'react';


const ReviewListItem = ({review}) => {
    return (
        <li>
            <p>{review.author_username}</p>
        </li>
    )
}

export default ReviewListItem;