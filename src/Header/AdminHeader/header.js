/*INNER-COMPONENTS*/
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
/*CSS*/
import style from "./header.module.scss";
/*ASSETS*/
import logo from "../../Images/logo.png";

export const AdminHeader = () => {
  const [username, setUsername] = useState("");

  const getCookie = (cName) => {
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

  const checkStation = () => {
    setUsername(getCookie("username"));
  };

  useEffect(() => {
    checkStation();
  }, []);

  const setCookie = (cName, cValue, minutes) => {
    let d = new Date();
    d.setTime(d.getTime() + minutes * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires;
  };

  const logoutHandler = () => {
    if (window.confirm("آیا از حساب خود خارج می شوید؟")) {
      setCookie("username", "", -100);
      setCookie("role", "", -100);
      checkStation();
      window.location.href = "/";
    }
  };
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <img src={logo} alt="logo" />
      </div>
      {username ? (
        <div className={style.account} onClick={logoutHandler}>
          <h1>{username}</h1>
          <i className="fa fa-user-plus"></i>
        </div>
      ) : (
        <Link className={style.account} to="/sign">
          <h1></h1>
          <i className="fa fa-user-plus"></i>
        </Link>
      )}
    </div>
  );
};
