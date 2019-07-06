import React from 'react';
import UpperRightNavBarContainer from './upper_right_nav_bar_container';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="global-header">
                <div class="content">
                    <h1>Steam Clone (coming from header.jsx)</h1>
                    <div>
                        <UpperRightNavBarContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;