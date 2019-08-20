import React from 'react';
import { Link } from 'react-router-dom';
import UsernameMenu from './username_menu';

class UpperRightNavBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let display = {};
        

        if (this.props.currentUser) {
            display = (
                <div className="upper-right-nav-bar">
                    < UsernameMenu user={this.props.currentUser} 
                    logout={this.props.logout} 
                    updateUserWallet={this.props.updateUserWallet}
                    history={this.props.history}/>
                
                </div>
            );
        } else {
            display = (
                <div id="upper-right-nav-bar">
                    <Link to={'/random'} id="green-install-button"
                    className="install-button upper-right-nav-bar-text"
                        
                        >Random Game</Link>
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

export default UpperRightNavBar;