import React from 'react';
import { Link } from 'react-router-dom';
import LanguageMenu from './language_menu';

class UpperRightNavBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let display = {};

        if (this.props.currentUser) {
            display = (
                <div className="upper-right-nav-bar">
                    <button className="upper-right-nav-bar-text">{this.props.currentUser.username}</button>
                    <button className="upper-right-nav-bar-text" onClick={this.props.logout}>Logout</button>
                </div>
            );
        } else {
            display = (
                <div id="upper-right-nav-bar">
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