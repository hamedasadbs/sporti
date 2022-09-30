import { combineReducers } from "redux";
import cookieReducer from "./cookie/CookieReducers";
import pageReducer from "./page/PageReducers";

export default combineReducers({
  cookieReducer,
  pageReducer,
});
