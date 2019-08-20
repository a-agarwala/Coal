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
                <div class="content">
                    <Link id="logo" to="/">COAL</Link>
                    {/* <div id="logo" onClick={()=> this.props.history.push('/')}>COAL</div> */}
                    <div>
                        <UpperRightNavBarContainer history={this.props.history} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;