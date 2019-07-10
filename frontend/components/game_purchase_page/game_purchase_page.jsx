import React from 'react';
import NewReviewForm from './new_review_form';


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

        if (this.props.currentUser && this.props.ownsGame && !this.props.hasReviewedGame) {
            console.log("hit one");
            secondRow = (
                <div>
                    <NewReviewForm createReview={this.props.createReview} />
                </div>
            );
        } else if (this.props.currentUser && this.props.hasReviewedGame) {
            console.log("hit two");
            secondRow = (
                <div>
                    edit review display
                </div>
            );
        } else {
            console.log("hit three");
            secondRow = (
                <div>
                    purchase display
                </div>
            );
        };
        console.log(this.props.currentUser);
        console.log(this.props.hasReviewedGame);
        console.log(this.props.gameInfo);
        return (
            <div className="body-wrapper">
                <div>Game Display Top Row</div>
                {this.props.gameInfo &&
                <div><NewReviewForm createReview={this.props.createReview} 
                    currentUser={this.props.currentUser}
                    gameTitle={this.props.gameInfo.title}
                    gameId={this.props.gameInfo.id}/></div>}
                <div>Game Further Info</div>
                
                <div>Review List</div>
            </div>
        );
    }
}

export default GamePurchasePage;