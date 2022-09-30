import { SET_ACCOUNT_NAME, SET_OFFLINE, SET_ONLINE } from "./CookieActions";

const initialState = {
  isOnline: false,
  accountName: null,
};

const cookieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ONLINE:
      return {
        ...state,
        isOnline: true,
      };
    case SET_OFFLINE:
      return {
        ...state,
        isOnline: false,
      };
    case SET_ACCOUNT_NAME:
      return {
        ...state,
        accountName: action.payload,
      };
    default:
      return state;
  }
};

export default cookieReducer;
