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

    render() {
        return (
            <div className="body-wrapper">
                <div>
                    <Link to="/">Home</Link>
                </div>

                <div>
                    <h1>Create an Account</h1>
                </div>

                <div>
                    <div className="create-form-box">

                        <form onSubmit={this.handleSubmit}>
                            <br />

                            <div className="create-acc-form">

                                <br />

                                <label>Your email address
                                    <input type="text"
                                        value={this.state.email_address}
                                        onChange={this.update('email_address')}
                                        className="text-input"
                                    />
                                    <p>Your email address is used to confirm 
                                        purchases and help you manage access to 
                                        your Steam account.</p>
                                </label>

                                <br />

                                <label>Create a username
                                    <input type="text"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        className="text-input"
                                    />
                                </label>

                                <br />

                                <label>Create a password
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="text-input"
                                    />
                                </label>

                                <br />

                            </div>
                            <button type="submit" >Create Account</button>

                        </form>

                    </div>
                </div>
            </div>
        )
    }


}

export default CreateAccount;