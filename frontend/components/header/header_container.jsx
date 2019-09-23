import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout, updateUserWallet } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    viewedGameId: (state.entities.viewedGame.gameInfo ?
        state.entities.viewedGame.gameInfo.id 
        : undefined)
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    updateUserWallet: (user) => dispatch(updateUserWallet(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));