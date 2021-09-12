import { createStore } from "redux";
import loginReducer from "./Cookie/CookieReducers";

export const store = createStore(loginReducer);
