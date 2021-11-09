import { SET_PAGE } from "./PageActions";

const initialState = {
  page: window.location.href,
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default pageReducer;
