import React from 'react';
import UpperRightNavBar from './upper_right_nav_bar';
import { Link } from 'react-router-dom';

export default function Header(props) {

        return (
            <div id="global-header">
                <div className="content">
                    <Link id="logo" to="/">
                        <img
                            src={window.images.header_logo} />
                    </Link>

                    <div className="header-center-links-wrapper">

                        {props.currentUser ? (
                        
                            <>
                            <Link className="header-center-link" to="/library">
                                Your Games
                            </Link>

                            {/* <Link className="header-center-link" to="/">
                                Wishlist
                            </Link> */}
                            </>

                        ) : <></>
                        }

                        {/* <Link className="header-center-link" to="/">
                            Sales!
                        </Link> */}

                        <a className="header-center-link" href="https://linkedin.com/in/aditya-agarwala">
                            Linkedin
                        </a>

                        <a className="header-center-link" href="https://github.com/a-agarwala">
                            Github
                        </a>

                    </div>

                    <div>
                        <UpperRightNavBar
                            currentUser={props.currentUser}
                            logout={props.logout}
                            updateUserWallet={props.updateUserWallet} />
                    </div>

                </div>
            </div>
        )
}