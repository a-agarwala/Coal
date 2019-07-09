import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout } from './actions/session_actions';
import {getAllGameReviews} from './actions/game_actions';
import {createReview, editReview, removeReview} from './actions/review_actions';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.getAllGameReviews = getAllGameReviews;
    window.createReview = createReview;
    window.editReview = editReview;
    window.removeReview = removeReview;
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});