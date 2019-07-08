import React from 'react';
import { Link } from 'react-router-dom';

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email_address: '',
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    render() {

        let error_display = null;

        if (this.props.errors.length !== 0) {
            error_display = (
                <div id="create-error-area">
                    <div id="create-error-display">
                        <ul>
                            {this.props.errors.map((error) => (<li>{error}</li>))}
                        </ul>
                    </div>
                </div>
            );
        }

        return (

            <div className="body-wrapper">
                <div id="create-acc-wrapper">
                    <div id="create-top-content">
                        <div >
                            <Link id="home-button" className="make-brighter" to="/">Home</Link>
                        </div>

                        <div className="game-name">
                            Create an Account
                        </div>
                    </div>

                    {error_display}

                    <div>
                        <div className="signin-create-box">

                            <form onSubmit={this.handleSubmit}>
                                <br />

                                <div className="create-acc-form">

                                    <br />

                                    <div className="create-input-label">Your current email address</div>
                                    <div id="email-address-input" className="create-input-row">
                                        <input type="text"
                                            value={this.state.email_address}
                                            onChange={this.update('email_address')}
                                            className="create-input"
                                        />
                                        <div className="create-input-side-text">
                                        Your email address is used to confirm
                                        purchases and help you manage access to
                                            your Steam account.
                                        </div>
                                    </div> 
                                    

                                    
                                    <div className="create-input-label">Create a username</div>
                                    <div className="create-input-row">
                                        <input type="text"
                                            value={this.state.username}
                                            onChange={this.update('username')}
                                        className="create-input"
                                        />
                                    <div className="create-input-side-text">You must create a unique username.</div>
                                    </div> 
                
                                   
                                    <div className="create-input-label">Create a password</div>
                                    <div className="create-input-row">
                                        <input type="password"
                                            value={this.state.password}
                                            onChange={this.update('password')}
                                        className="create-input"
                                        />
                                    <div className="create-input-side-text">
                                       Your password must be at least eight characters long.
                                        </div>
                                    </div>
                                   
                                    <br />

                                </div>
                                <button id="create-acc-button" className="signin-create-button" type="submit" >Create Account</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default CreateAccount;