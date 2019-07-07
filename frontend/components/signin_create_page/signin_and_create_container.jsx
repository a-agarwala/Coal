import { connect } from 'react-redux';
import { signin, signup } from '../../actions/session_actions';
import SignInAndCreate from './signin_and_create';

const mapStateToProps = (state, ownProps) => ({
    history: ownProps.history
})

const mapDispatchToProps = (dispatch) => ({
    signin: (user) => dispatch(signin(user)),
    signup: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInAndCreate);