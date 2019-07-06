import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import SignInAndCreate from './signin_and_create';

const mapStateToProps = (state, ownProps) => ({
    history: ownProps.history
})

const mapDispatchToProps = (dispatch) => ({
    signin: (user) => dispatch(signin(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInAndCreate);