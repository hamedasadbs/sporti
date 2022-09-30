import { createStore } from "redux";
import combineReducer from "./CombineReducer";

export const store = createStore(combineReducer);
