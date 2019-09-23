import React from 'react';
import { Link } from 'react-router-dom';
import { goToRandomGame } from '../../util/games_api_util';
import UsernameMenu from './username_menu';

class UpperRightNavBar extends React.Component {

    constructor(props) {
        super(props);

        this.goToRandomGame = goToRandomGame.bind(this);
    }

    render() {

        let display = {};
        console.log(this.props.viewedGameId);

        if (this.props.currentUser) {
            display = (
                <div className="upper-right-nav-bar">
                    < UsernameMenu user={this.props.currentUser} 
                    logout={this.props.logout} 
                    updateUserWallet={this.props.updateUserWallet}
                    history={this.props.history}
                    viewedGameId={this.props.viewedGameId}/>
                
                </div>
            );
        } else {
            display = (
                <div id="upper-right-nav-bar">
                    <div  id="green-install-button"
                    className="install-button upper-right-nav-bar-text"
                        onClick={() => this.goToRandomGame(this.props.viewedGameId)}
                        >Random Game</div>
                    <Link id="login" className="upper-right-nav-bar-text" to='/login'>login</Link> 
                </div>
            )
        };

        return (
            <div id="upper-right-nav-bar-wrapper">
                {display}
            </div>
            
        )
    }
}

UpperRightNavBar.defaultProps = {
    viewedGameId: 0
}

export default UpperRightNavBar;