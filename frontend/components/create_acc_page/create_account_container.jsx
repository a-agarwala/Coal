import { connect } from 'react-redux';
import CreateAccount from './create_account';
import { signup, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
        errors: state.errors.session
})

const mapDispatchToProps = (dispatch) => ({
    signup: (newUser) => dispatch(signup(newUser)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);