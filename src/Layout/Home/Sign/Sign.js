import React, { useState, useEffect } from "react";
import classes from "./Sign.module.scss";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faUser,
  faEnvelope,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Sign = (props) => {
  const url = "http://localhost/fantasima/index.php";
  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const createAccount = () => {
    if (name != null && username != null && email != null && password != null) {
      axios
        .post(
          url,
          JSON.stringify({
            method: "insert",
            table: "account",
            name: name,
            username: username,
            email: email,
            password: password,
          })
        )
        .then((res) => {
          alert(res.data);
        });
    } else {
      alert("لطفا تمام اطلاعات خود را تکمیل کرده سپس ثبت کنید");
    }
  };

  const main =
    props.type === "signIn" ? (
      <>
        <span className={classes.title}>
          <FontAwesomeIcon
            onClick={props.close}
            icon={faTimes}
            className={classes.closeHiddenMenu}
          />
          ورود به حساب کاربری
        </span>
        <main>
          <div className={classes.signInUser}>
            <input placeholder="نام کاربری" />
            <FontAwesomeIcon icon={faUser} className={classes.i} />
          </div>
          <div className={classes.signInPass}>
            <input type="password" placeholder="رمز عبور" />
            <FontAwesomeIcon icon={faKey} className={classes.i} />
          </div>
          <br />
          <button>ورود</button>
          <h5 className={classes.rememberMe}>
            <input type="checkbox" />
            مرا به خاطر بسپار
          </h5>
          <a href="/" className={classes.reUser}>
            نام کاربری را فراموش کرده ام
          </a>
          <a href="/" className={classes.rePass}>
            رمز عبور را فراموش کرده ام
          </a>
        </main>
      </>
    ) : (
      <>
        <span className={classes.title}>
          <FontAwesomeIcon
            onClick={props.close}
            icon={faTimes}
            className={classes.closeHiddenMenu}
          />
          ایجاد حساب کاربری
        </span>
        <main>
          <div className={classes.name}>
            <input onChange={nameHandler} placeholder="نام و نام خانوادگی" />
            <FontAwesomeIcon icon={faUser} className={classes.i} />
          </div>
          <div className={classes.signUpUser}>
            <input onChange={usernameHandler} placeholder="نام کاربری" />
            <FontAwesomeIcon icon={faUser} className={classes.i} />
          </div>
          <div className={classes.email}>
            <input type="email" onChange={emailHandler} placeholder="ایمیل" />
            <FontAwesomeIcon icon={faEnvelope} className={classes.i} />
          </div>
          <div className={classes.signUpPass}>
            <input
              type="password"
              onChange={passwordHandler}
              placeholder="رمز عبور"
            />
            <FontAwesomeIcon icon={faKey} className={classes.i} />
          </div>
          <h5 className={classes.rememberMe}>
            <input type="checkbox" />
            من ربات نیستم
          </h5>
          <button onClick={createAccount}>ثبت</button>
        </main>
      </>
    );

  return (
    <>
      <article className={classes.sign}>{main}</article>
    </>
  );
};

export default Sign;
