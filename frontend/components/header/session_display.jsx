import React from 'react';
import { Link } from 'react-router-dom';

class SessionDisplay extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        let display = {};

        if (this.props.currentUser) {
            display = (
                <div>
                    <button>{this.props.currentUser.username}</button>
                    <button onClick={this.props.logout}>Logout</button>
                </div>
            );
        } else {
            display = (
                <div>
                    <Link to='/login'>login</Link>
                </div>
            )
        };

        return display;
    }
}

export default SessionDisplay;