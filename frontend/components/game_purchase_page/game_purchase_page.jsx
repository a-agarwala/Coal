import React from 'react';
import NewReviewForm from './new_review_form';
import EditReviewForm from './edit_review_form';
import ReviewList from './review_list';

class GamePurchasePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.props.refreshUserInfo(this.props.currentUser.id);
        };
        
        this.props.getGameInfoAndReviews(this.props.gameId);
    }

    componentWillUnmount() {
        this.props.leaveGamePurchasePage();
    }

    render() {
       
        let secondRow = {};
        if (this.props.gameInfo) {
            if (this.props.currentUser && this.props.ownsGame && !this.props.hasReviewedGame) {

                secondRow = (
                    <div>
                        <NewReviewForm createReview={this.props.createReview}
                            currentUser={this.props.currentUser}
                            gameTitle={this.props.gameInfo.title}
                            gameId={this.props.gameInfo.id}/>
                    </div>
                );

            } else if (this.props.currentUser && this.props.hasReviewedGame) {

                secondRow = (
                    <div>
                        <EditReviewForm editReview={this.props.editReview}
                            removeReview={this.props.removeReview}
                            currentUser={this.props.currentUser}
                            gameTitle={this.props.gameInfo.title}
                            gameId={this.props.gameInfo.id}
                            thisGameReview={this.props.thisGameReview} />
                    </div>
                );

            } else {

                secondRow = (
                    <div>
                        purchase display
                    </div>
                );
            };

        }
        console.log(this.props.currentUser);
        console.log(this.props.hasReviewedGame);
        console.log(this.props.gameInfo);
        return (
            <div>
            {this.props.gameInfo &&
                <div className="body-wrapper">
                    <div>Game Display Top Row</div>

                    <div>{secondRow}</div>

                    <div>Game Further Info</div>
                    
                    <div>Review List
                        <ReviewList allReviews={this.props.allReviews}/>
                    </div>
                </div> 
            }

            </div>
        );
    }
}

export default GamePurchasePage;