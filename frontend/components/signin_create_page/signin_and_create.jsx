import React from 'react';
import { Redirect } from 'react-router-dom';

class SignInAndCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signin(user)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentWillUnmount() {

    }

    render() {
        return (
        <div>
            <div className="signin-error-box">
                The account name or password that you have entered is incorrect.
            </div>

            <div>

                <div>
                    <div className="signin-form-box">

                        <h2>Sign In</h2>
                        <p>To an existing Steam account</p>
                        <br/>
                        <form onSubmit={this.handleSubmit}>
                        <br/>
                        
                            <div className="login-form">

                                <br/>

                                <label>Steam account name
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="text-input"
                                />
                                </label>

                                <br/>

                                <label>Password
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="text-input"
                                />
                                </label>

                                <br/>
                                
                            </div>
                            <button type="submit" >Sign In</button>
                        
                        </form>

                    </div>
                </div>


                <div className="create-acc-box">
                    <h2>Create</h2>
                    <p>A new free account</p>
                    <br/>
                    <p>
                    It's free to join and easy to use.  Continue on to create your Steam 
                    account and get Steam, the leading digital solution for PC and Mac 
                    gamers.						
                    </p>
                    <button onClick={() => this.props.history.push('/join')}>Join Steam</button>
                </div>

            </div>
        </div>
        )
    }

}

export default SignInAndCreate;