import React from 'react';

class LanguageMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {

        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    render() {
        return (
            <div>
                <button className="upper-right-nav-bar-text" onClick={this.showMenu}>
                    language
                 </button>

                {
                    this.state.showMenu
                        ? (
                            <div
                                id="language-menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <button className="upper-right-nav-bar-text"> English </button>
                                <br/>
                                <button className="upper-right-nav-bar-text"> Sorry </button>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }

}


export default LanguageMenu;