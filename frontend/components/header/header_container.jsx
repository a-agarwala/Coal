import { connect } from 'react-redux';
import { logout, updateUserWallet } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    updateUserWallet: (user) => dispatch(updateUserWallet(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);