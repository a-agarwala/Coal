import React from 'react';

class EditReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author_id: this.props.currentUser.id,
            game_id: this.props.gameId,
            recommended: (this.props.thisGameReview ? this.props.thisGameReview.recommended : undefined),
            body: (this.props.thisGameReview ? this.props.thisGameReview.body : undefined),
            id: (this.props.thisGameReview ? this.props.thisGameReview.id : undefined),
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.recommend = this.recommend.bind(this);
        this.notrecommend = this.notrecommend.bind(this);
        this.deleteReview = this.deleteReview.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if ((state.body === undefined || state.recommended === undefined || state.id === undefined) && props.thisGameReview) {
            return {body: props.thisGameReview.body,
                    recommended: props.thisGameReview.recommended,
                    id: props.thisGameReview.id}
        } else {
            return null;
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    
    recommend(e) {
        e.preventDefault();
        this.setState({
            recommended: true
        })
    }

    notrecommend(e) {
        e.preventDefault();
        this.setState({
            recommended: false
        })
    }

    deleteReview(e) {
        e.preventDefault();
        this.props.removeReview({
            id: this.state.id,
            authorId: this.state.author_id,
            gameId: this.state.game_id
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state);
        this.props.editReview(review);
        // this.props.enterThisGamePurchasePage();
    }

    render() {
        console.log("Edit Review Form:");
        console.log(this.state);
        console.log(this.props);
        return (
        <div className="center_horizontally">
            
            <div className="review-top-green-bar">
                    <div id="review-top-green-bar-image"><div id="in-library">IN LIBRARY</div></div>
                {this.props.gameTitle} is already in your Steam library 
            
            </div>
            <div id="new-review-container1">
                <div id="new-review-container2">
                    <h1>You have already reviewed this game.</h1>
                    <p>You have reviewed this game already. You can edit your review,
                        change your rating, or delete it. </p>
            <form onSubmit={this.handleSubmit}>
                <textarea className="review-text-area" value={this.state.body} onChange={this.update('body')}/>

                <span id="recommend-question-text"> Do you recommend this game?</span>
                <div id="recommend-button-area">
                                <button onClick={(e) => this.recommend(e)}
                                className={(this.state.recommended === null || this.state.recommended === false) ?
                                    "recommend-button-container-unselected" : "recommend-button-container-selected"}>
                                    <div id={(this.state.recommended === null || this.state.recommended === false) ?
                                        "yes-unselected" : "yes-selected"}>  </div>  
                                <div className="recommend-button-text">Yes</div>
                                </button>

                            <button onClick={(e) => this.notrecommend(e)}
                                className={(this.state.recommended === null || this.state.recommended === true) ?
                                    "recommend-button-container-unselected" : "recommend-button-container-selected"}>
                                    <div id={(this.state.recommended === null || this.state.recommended === true) ?
                                        "no-unselected" : "no-selected"}>  </div>
                                    <div className="recommend-button-text">No</div>
                                </button>                      
                </div>
                        <button 
                            className="review-form-submit-button" 
                            type="submit" >
                            <div className="review-submit-button-text">Update review</div>
                        </button>  

                        <button
                                className="review-form-submit-button"
                                onClick={(e) => this.deleteReview(e)}
                                id="delete-review-button" >
                                <div className="review-submit-button-text">Delete review</div>
                        </button>   
                </form>   
                </div>
            </div>
        </div>
        )
    }
}

export default EditReviewForm;