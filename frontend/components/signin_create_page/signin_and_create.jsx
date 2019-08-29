import React from 'react';


class SignInAndCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signin(user);
        this.setState({
            username: '',
            password: ''
        })
    }

    demoUser() {
        const user = {username: 'DemoUser', password: 'demopassword'};
        this.props.signin(user);
   
        this.setState({
            username: '',
            password: ''
        })
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

        let error_message = null
        
        if (this.props.error !== '') {
            error_message = (
                <div id="signin-error-area">
                    <div id="signin-error-box">
                        {this.props.error}
                    </div>
                </div>
            );
        }

        return (
        <div>
            
            {error_message}

            <div className="signin-create-box">
                <div id="signin-create-box-content">
                    <div id="signin-form-box">

                        <h2 className="signin-create-header">SIGN IN</h2>
                        <p>To an existing Steam account</p>
                        <br/>
                        <form onSubmit={this.handleSubmit}>
                        
                            <div className="login-form">


                                <label> Steam account name
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="signin-input"
                                />
                                </label>

                                <br/>

                                <label> Password
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="signin-input"
                                />
                                </label>

                                <br/>
                                
                            </div>
                            <button id="actual-signin-button" className="signin-create-button" type="submit" >Sign In</button>
                            <button className="signin-create-button" 
                            id="demo-user-button" 
                            onClick={() => this.demoUser()}
                            >Demo User</button>

                        </form>

                    </div>

                    <div id="signin-create-box-separator"></div>

                    <div id="create-acc-box">
                        <h2 className="signin-create-header">CREATE</h2>
                        <p>A new free account</p>
                        <br/>
                        <br/>
                        <div id="create-paragraph">
                            <p>
                            It's free to join and easy to use.  Continue on to create your Steam 
                            account and get Steam, the leading digital solution for PC and Mac 
                            gamers.						
                            </p>
                        </div>
                      
                            <button id="join-steam-button" className="signin-create-button" onClick={() => this.props.history.push('/join')}>Join Steam</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}

export default SignInAndCreate;