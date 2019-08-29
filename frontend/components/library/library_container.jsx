import { connect } from 'react-redux';
import Library from './library';
import { refreshUserInfo } from '../../actions/session_actions';

    

const mapStateToProps = (state, ownProps) => {

    let ownedGames = state.entities.ownedGames;

    ownedGames.forEach((ownedGame, index) => {
        if (state.entities.reviews[ownedGame.id]) {
            ownedGames[index]['hasReviewed'] = true;
        } else {
            ownedGames[index]['hasReviewed'] = false;
        }
    })

    return ({
        history: ownProps.history,
        currentUserId: state.session.id,
        ownedGames: state.entities.ownedGames,
        reviews: state.entities.reviews
    })
}

const mapDispatchToProps = (dispatch) => ({
    refreshUserInfo: (currentUserId) => dispatch(refreshUserInfo(currentUserId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Library);