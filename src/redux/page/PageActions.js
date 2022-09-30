export const SET_PAGE = "setPage";

const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};

const pageActions = { setPage };

export default pageActions;
