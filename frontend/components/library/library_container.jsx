import { connect } from 'react-redux';
import Library from './library';
import { refreshUserInfo } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    history: ownProps.history
})

const mapDispatchToProps = (dispatch) => ({
    refreshUserInfo: (currentUserId) => dispatch(refreshUserInfo(currentUserId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Library);