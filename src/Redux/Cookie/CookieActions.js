export const SET_ONLINE = "setOnline";
export const SET_OFFLINE = "setOffline";
export const SET_ACCOUNT_NAME = "setAccountName";

const setOnline = () => {
  return {
    type: SET_ONLINE,
  };
};

const setOffline = () => {
  return {
    type: SET_OFFLINE,
  };
};

const setAccountName = (username) => {
  return {
    type: SET_ACCOUNT_NAME,
    payload: username,
  };
};

const cookieActions = { setOnline, setOffline, setAccountName };

export default cookieActions;
