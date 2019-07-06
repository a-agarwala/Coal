import React from 'react';
import SignInAndCreateContainer from './signin_and_create_container';
const SigninAndInfo = (props) => {
    return (
        <div>
            < SignInAndCreateContainer history={props.history} />
            
        </div>
    )
}

export default SigninAndInfo;