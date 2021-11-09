import { combineReducers } from 'redux';
import cookieReducer from './Cookie/CookieReducers';
import pageReducer from './Page/PageReducers';

export default combineReducers({
    cookieReducer,
    pageReducer
});