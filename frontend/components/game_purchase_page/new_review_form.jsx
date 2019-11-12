import React from 'react';

class NewReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author_id: this.props.currentUser.id,
            game_id: this.props.gameId,
            recommended: null,
            body: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.recommend = this.recommend.bind(this);
        this.notrecommend = this.notrecommend.bind(this)
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

    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state);
        if (this.state.recommended === null || this.state.body === null) return        
        this.props.createReview(review);

        this.setState({
            author_id: this.props.currentUser.id,
            game_id: this.props.gameId,
            recommended: null,
            body: null,
        });
    }

    render() {

        return (
        <div className="center_horizontally">
            
            <div className="review-top-green-bar">
                    <div id="review-top-green-bar-image"><div id="in-library">IN LIBRARY</div></div>
                {this.props.gameTitle} is already in your Steam library 
            
            </div>
            <div id="new-review-container1">
                <div id="new-review-container2">
                    <h1>Write a review for {this.props.gameTitle}</h1>
                    <p>Please describe what you liked or disliked about 
                        this game and whether you recommend it 
                        to others. Please remember to be polite. </p>
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
                            <div className="review-submit-button-text">Post review</div>
                        </button>    
                </form>   
                </div>
            </div>
        </div>
        )
    }
}

export default NewReviewForm;