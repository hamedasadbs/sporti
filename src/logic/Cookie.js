export const setCookie = (cName, cValue, minutes) => {
  let d = new Date();
  d.setTime(d.getTime() + minutes * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires;
};

export const getCookie = (cName) => {
  const nameString = cName + "=";
  const value = document.cookie.split("; ").filter((item) => {
    return item.includes(nameString);
  });
  if (value.length) {
    return value[0].substring(nameString.length, value[0].length);
  } else {
    return "";
  }
};
