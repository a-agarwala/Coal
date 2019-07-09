import React from 'react';
import { throws } from 'assert';

class GamePurchasePage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getGameInfoAndReviews(this.props.gameId);
    }

    render() {
        return (
            <div>
                <div>Game Display Top Row</div>
                <div>Purchase Button or Review Form</div>
                <div>Game Further Info</div>
                <div>Review List</div>
            </div>
        );
    }
}

export default GamePurchasePage;