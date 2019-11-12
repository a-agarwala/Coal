import React from 'react';
import NewReviewForm from './new_review_form';
import EditReviewForm from './edit_review_form';
import ReviewList from './review_list';
import PurchaseDisplay from './purchase_display';
import GameDisplayTopRow from './game_display_top_row';

class GamePurchasePage extends React.Component {
    constructor(props) {
        super(props);
    
    this.setReviewRef = this.setReviewRef.bind(this); 
    this.enterThisGamePurchasePage = this.enterThisGamePurchasePage.bind(this)
    }

    setReviewRef(node) {
        this.reviewRef = node;
    }

    enterThisGamePurchasePage() {
        this.props.getGameInfoAndReviews(this.props.gameId);
    }

    componentDidMount() {
        this.enterThisGamePurchasePage();
        if (this.props.currentUser) {
            this.props.refreshUserInfo(this.props.currentUser.id);
        }; 
        if (this.reviewRef && this.props.location.hash.includes('#review')) {
            this.reviewRef.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth" });
        } else { this.props.headerRef.current.scrollIntoView(true); }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.props.getGameInfoAndReviews(this.props.gameId);
        }
    }

    componentWillUnmount() {
        this.props.leaveGamePurchasePage();
    }

    render() {

        let secondRow = {};
        
            if (this.props.currentUser && this.props.ownsGame && !this.props.hasReviewedGame) {

                secondRow = (
                    <div className="second-row-purchase-page" ref={this.setReviewRef}>
                        <NewReviewForm createReview={this.props.createReview}
                            currentUser={this.props.currentUser}
                            gameTitle={this.props.gameInfo.title}
                            gameId={this.props.gameId} 
                            enterThisGamePurchasePage={this.enterThisGamePurchasePage} />
                    </div>
                );

            } else if (this.props.currentUser && this.props.hasReviewedGame) {

                secondRow = (
                    <div className="second-row-purchase-page" ref={this.setReviewRef}>
                        <EditReviewForm editReview={this.props.editReview}
                            removeReview={this.props.removeReview}
                            currentUser={this.props.currentUser}
                            gameTitle={this.props.gameInfo.title}
                            gameId={this.props.gameId}
                            thisGameReview={this.props.thisGameReview} 
                            enterThisGamePurchasePage={this.enterThisGamePurchasePage} />
                    </div>
                );

            } else {

                secondRow = (
                    <div className="second-row-purchase-page" ref={this.setReviewRef}>
                        <PurchaseDisplay currentUser={this.props.currentUser} 
                        updateUserWallet={this.props.updateUserWallet}
                        purchaseGame={this.props.purchaseGame}
                        gameTitle={this.props.gameInfo.title}
                        gamePrice={this.props.gameInfo.price}
                        gameId={this.props.gameId}
                        history={this.props.history}/>
                    </div>
                );
            };

       
        let gameRating = '';
        let gameRatingCalc = 0;
        if (this.props.allReviews) {
            this.props.gameReviewIdsByDate.forEach((reviewId) => {
                if (this.props.allReviews[reviewId].recommended) {
                    gameRatingCalc += 1;
                } 
            });

            if (gameRatingCalc > 0) {
                gameRatingCalc = Math.floor((gameRatingCalc/(Object.keys(this.props.allReviews).length) * 100));
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

                    <div id="background-image-purchase-page">
                        <img src={this.props.gamePhotos[1]}></img>
                    </div>

                    <div className="game-name-purchase-page">
                        <h2>{this.props.gameInfo.title}</h2>
                    </div>

                    <div className="first-row-purchase-page">
                        <GameDisplayTopRow 
                        gamePhotos={this.props.gamePhotos}
                        rightInfo={{
                            paragraph: this.props.gameInfo.side_text,
                            rating: gameRating,
                            reviewCount: Object.keys(this.props.allReviews).length,
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
                        gameReviewIdsByDate={this.props.gameReviewIdsByDate}
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

GamePurchasePage.defaultProps = {
    gameInfo: {},
    gamePhotos: [],
    allReviews: [],
    gameReviewIdsByDate: []
}

export default GamePurchasePage;