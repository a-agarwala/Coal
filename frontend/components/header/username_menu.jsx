import React from 'react';
import { Link } from 'react-router-dom';

class UsernameMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdownMenu: false
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }

    showDropdownMenu(event) {
        event.preventDefault();

        this.setState({ showDropdownMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu(event) {

        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ showDropdownMenu: false }, () => {
                document.removeEventListener('click', this.hideDropdownMenu);
            });
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.hideDropdownMenu);
    }

    render() {

        let userclone = Object.assign({}, this.props.user);
        userclone.wallet = userclone.wallet + 2000;

        return (
             (
            <div>
                    <Link to={'/random'} 
                id="gray-install-button"
                    className="install-button upper-right-nav-bar-text"
                >Random Game</Link>
                <div id="wallet-display" className="upper-right-nav-bar-text">
                    ${((this.props.user.wallet)/100).toFixed(2)}
                </div>
                <button className="dropdown-menu-button upper-right-nav-bar-text" onClick={this.showDropdownMenu}>
                    {this.props.user.username}
                 </button>

                {
                    this.state.showDropdownMenu
                        ? (
                            <div
                                id="username-menu-wrapper"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}>
                                
                                <div id="username-menu-body">
                                    <button className="username-menu-item menu-item"
                                    onClick={() => this.props.updateUserWallet(userclone)}
                                    > Add $20 to Wallet </button>

                                    <button 
                                        className="username-menu-item menu-item" 
                                        onClick={this.props.logout}>Logout</button>
                                </div>
                                
                            </div>
                        )
                        : (null)
                }
            </div>
            )
        );
    }

}


export default UsernameMenu;