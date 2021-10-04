import { createStore } from "redux";
import cookieReducer from "./Cookie/CookieReducers";

export const store = createStore(cookieReducer);
