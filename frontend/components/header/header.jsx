import React from 'react';
import UpperRightNavBarContainer from './upper_right_nav_bar_container';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        return(
            <div id="global-header">
                <div className="content">
                    <Link id="logo" to="/">
                        <img 
                        src={window.images.header_logo}/>
                    </Link>
                    {/* <div id="logo" onClick={()=> this.props.history.push('/')}>COAL</div> */}
                    <div className="header-center-links-wrapper">
                        Your Games
                    </div>
                    <div>
                        <UpperRightNavBarContainer history={this.props.history} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;