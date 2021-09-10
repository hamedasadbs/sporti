import { SHOW_LOGIN } from "./SignActions";

const initialState = {
  isShowing: false,
};

const signReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOGIN:
      return {
        isShowing: !state.isShowing,
      };
    default:
      return state;
  }
};

export default signReducer;
