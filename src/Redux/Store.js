import { createStore } from "redux";
import signReducer from "./Sign/SignReducers";

export const store = createStore(signReducer);
