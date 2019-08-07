import React from 'react';
import NewReviewForm from './new_review_form';
import EditReviewForm from './edit_review_form';
import ReviewList from './review_list';
import PurchaseDisplay from './purchase_display';
import GameDisplayTopRow from './game_display_top_row';

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
                    <div className="second-row-purchase-page">
                        <NewReviewForm createReview={this.props.createReview}
                            currentUser={this.props.currentUser}
                            gameTitle={this.props.gameInfo.title}
                            gameId={this.props.gameInfo.id}/>
                    </div>
                );

            } else if (this.props.currentUser && this.props.hasReviewedGame) {

                secondRow = (
                    <div className="second-row-purchase-page">
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
                    <div className="second-row-purchase-page">
                        <PurchaseDisplay currentUser={this.props.currentUser} 
                        updateUserWallet={this.props.updateUserWallet}
                        purchaseGame={this.props.purchaseGame}
                        gameTitle={this.props.gameInfo.title}
                        gamePrice={this.props.gameInfo.price}
                        gameId={this.props.gameInfo.id}
                         />
                        
                    </div>
                );
            };

        }
       
        let gameRating = '';
        let gameRatingCalc = 0;
        if (this.props.allReviews) {
            this.props.allReviews.forEach((review) => {
                if (review.recommended) {
                    gameRatingCalc += 1;
                } 
            });

            if (gameRatingCalc > 0) {
                gameRatingCalc = Math.floor((gameRatingCalc/(this.props.allReviews.length) * 100));
                switch (true) {
                    case (gameRatingCalc < 20):
                        gameRating = 'Very Negative';
                        break
                    case (gameRatingCalc < 40):
                        gameRating = 'Negative';
                        break
                    case (gameRatingCalc < 60):
                        gameRating = 'Mixed';
                        break
                    case (gameRatingCalc < 80):
                        gameRating = 'Positive';
                        break
                    case (gameRatingCalc < 100):
                        gameRating = 'Very Positive';
                        break
                    case (gameRatingCalc === 100):
                        gameRating = 'Overwhelmingly Positive';
                        break
                } 
            } else {
                gameRating = 'Overwhelmingly Negative';
                gameRatingCalc = 0;
            };
        }

        return (
            <div>
            {this.props.gameInfo &&
                <div className="body-wrapper">
                    <div className="first-row-purchase-page">
                        <GameDisplayTopRow 
                        gameTitle={this.props.gameInfo.title}
                        gamePhotos={this.props.gamePhotos}
                        rightInfo={{
                            paragraph: this.props.gameInfo.side_text,
                            rating: gameRating,
                            reviewCount: this.props.allReviews.length,
                            releaseDate: this.props.gameInfo.release_date,
                            developer: this.props.gameInfo.developer,
                            publisher: this.props.gameInfo.publisher
                        }}
                        />
                    </div>
                    
                    
                    {secondRow}

                    <div className="third-row-purchase-page"></div>
                    
                    <div className="fourth-row-purchase-page">
                        <ReviewList allReviews={this.props.allReviews}
                        gameRatingCalc={gameRatingCalc}
                        gameRating={gameRating}
                        getGameInfoAndReviews={this.props.getGameInfoAndReviews}/>
                    </div>
                </div> 
            }

            </div>
        );
    }
}

export default GamePurchasePage;