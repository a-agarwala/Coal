import { connect } from 'react-redux';
import { signin, clearSessionErrors } from '../../actions/session_actions';
import SignInAndCreate from './signin_and_create';

const mapStateToProps = (state, ownProps) => {
    let error_message = '';

    if (state.errors.session.length > 0) {
        error_message = state.errors.session[state.errors.session.length - 1]
    };

    return ({
        history: ownProps.history,
        error: error_message
    }); 
    
}

const mapDispatchToProps = (dispatch) => ({
    signin: (user) => dispatch(signin(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInAndCreate);