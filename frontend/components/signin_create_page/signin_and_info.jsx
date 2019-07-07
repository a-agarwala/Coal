import React from 'react';
import SignInAndCreateContainer from './signin_and_create_container';
const SigninAndInfo = (props) => {
    return (
        <div id="signin-info-main" className="body-wrapper">
            < SignInAndCreateContainer history={props.history} />
            
        </div>
    )
}

export default SigninAndInfo;