import { SET_COOKIE_ONLINE } from "./CookieActions";

const initialState = {
  isOnline: false,
};

const cookieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COOKIE_ONLINE:
      return {
        ...state,
        isOnline: true,
      };
    default:
      return state;
  }
};

export default cookieReducer;
