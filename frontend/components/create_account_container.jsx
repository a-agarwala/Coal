import { connect } from 'react-redux';
import CreateAccount from './create_account';
import { signup } from '../actions/session_actions';

const mapDispatchToProps = (dispatch) => ({
    signup: (newUser) => dispatch(signup(newUser))
});

export default connect(null, mapDispatchToProps)(CreateAccount);