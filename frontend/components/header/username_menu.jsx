import React from 'react';

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
        return (
            <div>
                <button className="dropdown-menu-button upper-right-nav-bar-text" onClick={this.showDropdownMenu}>
                    {this.props.username}
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
                                    <button className="menu-item"> Placeholder </button>
                                    <button className="menu-item"> Placeholder </button>
                                    <button 
                                        className="menu-item" 
                                        onClick={this.props.logout}>Logout</button>
                                </div>
                                
                            </div>
                        )
                        : (null)
                }
            </div>
        );
    }

}


export default UsernameMenu;