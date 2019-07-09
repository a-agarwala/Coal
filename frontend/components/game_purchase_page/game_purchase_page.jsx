import React from 'react';

class GamePurchasePage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getGameInfoAndReviews(this.props.gameId);
    }

    componentWillUnmount() {
        this.props.leaveGamePurchasePage();
    }

    render() {
       
        let secondRow = {};

        if (this.props.currentUser && this.props.ownsGame && !this.props.hasReviewedGame) {
            secondRow = (
                <div>
                    write review form
                </div>
            )
        } else if (this.props.currentUser && this.props.hasReviwedGame) {
            secondRow = (
                <div>
                    edit review display
                </div>
            )
        } else {
            secondRow = (
                <div>
                    purchase display
                </div>
            )
        };

        return (
            <div className="body-wrapper">
                <div>Game Display Top Row</div>
                <div>{secondRow}</div>
                <div>Game Further Info</div>
                <div>Review List</div>
            </div>
        );
    }
}

export default GamePurchasePage;