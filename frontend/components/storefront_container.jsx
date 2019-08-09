import {connect} from 'react-redux';
import { leaveGamePurchasePage, enterStorefront } from '../actions/game_actions';
import { refreshUserInfo } from '../actions/session_actions';
import Storefront from './storefront';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    history: ownProps.history
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    leaveGamePurchasePage: () => dispatch(leaveGamePurchasePage()),
    refreshUserInfo: (currentUserId) => dispatch(refreshUserInfo(currentUserId)),
    enterStorefront: () => dispatch(enterStorefront()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Storefront);

