import React from 'react';

class NewReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // author_id: this.props.currentUser.id,
            game_id: this.props.gameId,
            recommended: null,
            body: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
                
    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state);
        this.props.createReview(review);
        this.setState({
            // author_id: this.props.currentUser.id,
            game_id: this.props.gameId,
            recommended: null,
            body: null,
        });
    }

    render() {

        return (
        <div className="center_horizontally">
            <div className="review-top-green-bar">
                {this.props.gameTitle} is already in your Steam library 
            </div>
            <div id="new-review-container1">
                <div id="new-review-container2">
                    <h1>Write a review for {this.props.gameTitle}</h1>
                    <p>Please describe what you liked or disliked about 
                        this game and whether you recommend it 
                        to others. Please remember to be polite. </p>
                <textarea className="review-text-area" value={this.state.body} onChange={this.update('body')}/>
                <span id="recommend-question-text"> Do you recommend this game?</span>
                <div id="recommend-button-area">
                            <div className="recommend-button-container">
                                <button className="recommend-button-unselected yes-unselected"
                                ><div className="recommend-button-text">Yes</div></button>
                            </div>
                    
                </div>
                </div>
            </div>
        </div>
        )
    }
}

export default NewReviewForm;