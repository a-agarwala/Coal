import { connect } from 'react-redux';
import { logout, updateUserWallet } from '../../actions/session_actions';
import UpperRightNavBar from './upper_right_nav_bar'

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    history: ownProps.history
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    updateUserWallet: (user) => dispatch(updateUserWallet(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpperRightNavBar)