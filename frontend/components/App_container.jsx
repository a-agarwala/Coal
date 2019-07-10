import connect from 'react-redux';
import { refreshUserInfo } from '../actions/session_actions';
import App from './App';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    refreshUserInfo: (currentUserId) => dispatch(refreshUserInfo(currentUserId))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);