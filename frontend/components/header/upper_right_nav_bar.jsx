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
                    < UsernameMenu username={this.props.currentUser.username} logout={this.props.logout}/>
                
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