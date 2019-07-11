import React from 'react';

class PurchaseDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.buyGame = this.buyGame.bind(this);
    }

    buyGame() {
        let userclone = Object.assign({}, this.props.currentUser);

        if (this.props.currentUser.wallet >= this.props.gamePrice) {
            userclone.wallet = userclone.wallet - this.props.gamePrice;
            this.props.updateUserWallet(userclone);
            this.props.purchaseGame({owner_id: this.props.currentUser.id, game_id: this.props.gameId});
        }
    }

    render() {
        return (
            <div className="center_horizontally">
                <div id="purchase-display-wrapper">
                   <div id= "purchase-display-box">
                        <div id="purchase-display-game-title">
                            <h1>Buy {this.props.gameTitle}</h1>
                        </div>
                        <div id="purchase-button-row">
                            <div id="purchase-price-and-button-box">
                                <div id="price-display">
                                    ${((this.props.gamePrice) / 100).toFixed(2)}
                                </div>
                                <button onClick={() => this.buyGame()}
                                id="purchase-game-button">
                                    Purchase Game
                                </button>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default PurchaseDisplay;