import * as SessionAPIUtil from '../util/session_api_util';
import * as UsersAPIUtil from '../util/users_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS";'

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user)
        .then(user => (dispatch(receiveCurrentUser(user))),
        err => (dispatch(receiveErrors(err.responseJSON))))
);

export const signin = user => dispatch => (
    SessionAPIUtil.login(user)
        .then(user => (dispatch(receiveCurrentUser(user))),
        err => (dispatch(receiveErrors(err.responseJSON))))
);

export const logout = () => dispatch => (
    SessionAPIUtil.logout()
        .then(() => (dispatch(logoutCurrentUser())),
        err => (dispatch(receiveErrors(err.responseJSON))))
);

export const refreshUserInfo = (currentUserId) => dispatch => {
    // debugger
    return(
    SessionAPIUtil.refresh(currentUserId)
        .then(user => (dispatch(receiveCurrentUser(user)))))
};

export const updateUserWallet = (user) => dispatch => (
    UsersAPIUtil.walletUtil(user)
        .then(user => (dispatch(receiveCurrentUser(user))))
);

export const purchaseGame = (gameOwnership) => dispatch => (
    UsersAPIUtil.purchaseGame(gameOwnership)
        .then(user => (dispatch(receiveCurrentUser(user))))
)