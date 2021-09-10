import React, { useState } from "react";
import classes from "./Sign.module.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faUser,
  faEnvelope,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { showLogin } from "../../Redux/Sign/SignActions";

const Sign = (props) => {
  const loginURL = "http://localhost/bsShop/login.php";
  const signupURL = "http://localhost/bsShop/signup.php";

  const isShowing = useSelector((state) => state.isShowing);
  const dispatch = useDispatch();

  const [name, setName] = useState(null);
  const [signupUsername, setSignupUsername] = useState(null);
  let [loginUsername, setLoginUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [signupPassword, setSignupPassword] = useState(null);
  let [loginPassword, setLoginPassword] = useState(null);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const signupUsernameHandler = (e) => {
    setSignupUsername(e.target.value);
  };

  const loginUsernameHandler = (e) => {
    setLoginUsername(e.target.value);
  };

  const emailHandler = (e) => {
    document.getElementById("password").style.backgroundColor = "white";
    setEmail(e.target.value);
  };

  const signupPasswordHandler = (e) => {
    document.getElementById("password").style.backgroundColor = "white";
    setSignupPassword(e.target.value);
  };

  const loginPasswordHandler = (e) => {
    setLoginPassword(e.target.value);
  };

  const validatePassword = (pass) => {
    if (pass.length > 5) {
      return true;
    } else {
      alert("رمز وارد شده باید بیش از 5 کاراکتر داشته باشد");
      document.getElementById("password").style.backgroundColor =
        "rgb(250, 134, 134)";
      return false;
    }
  };

  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    } else {
      alert("ایمیل وارد شده معتبر نیست");
      document.getElementById("email").style.backgroundColor =
        "rgb(250, 134, 134)";
      return false;
    }
  };

  const createAccount = () => {
    if (
      name != null &&
      signupUsername != null &&
      email != null &&
      signupPassword != null
    ) {
      if (document.getElementById("notRobot").checked) {
        if (validateEmail(email) && validatePassword(signupPassword)) {
          axios
            .post(
              signupURL,
              JSON.stringify({
                name: name,
                username: signupUsername,
                email: email,
                password: signupPassword,
              })
            )
            .then((res) => {
              alert(res.data);
              setLoginUsername(signupUsername);
              loginUsername = signupUsername;
              setLoginPassword(signupPassword);
              loginPassword = signupPassword;
              enterToAccount();
            });
        }
      } else alert("لطفا تیک من ربات نیستم را بزنید");
    } else {
      alert("لطفا تمام اطلاعات خود را تکمیل کرده سپس ثبت کنید");
    }
  };

  const enterToAccount = () => {
    if (loginUsername != null && loginPassword != null) {
      axios
        .post(
          loginURL,
          JSON.stringify({
            username: loginUsername,
            password: loginPassword,
          })
        )
        .then((res) => {
          if (res.data[0] == null)
            alert("نام کاربری یا رمز عبور شما اشتباه است");
          else {
            alert(
              `شما با نام ${res.data[0].username} وارد حساب کاربری خود شدید`
            );
            props.online(true);
            props.accountName(res.data[0].username);
            props.close(true);
          }
        });
    } else {
      alert("لطفا تمام اطلاعات خود را تکمیل کرده سپس ثبت کنید");
    }
  };

  const main =
    props.type === "login" ? (
      <>
        <span className={classes.title}>
          <FontAwesomeIcon
            onClick={props.close}
            icon={faTimes}
            className={classes.closeSign}
          />
          ورود به حساب کاربری
        </span>
        <main>
          <div className={classes.loginUser}>
            <input
              onChange={loginUsernameHandler}
              placeholder="نام کاربری یا ایمیل"
            />
            <FontAwesomeIcon icon={faUser} className={classes.i} />
          </div>
          <div className={classes.loginPass}>
            <input
              onChange={loginPasswordHandler}
              type="password"
              placeholder="رمز عبور"
            />
            <FontAwesomeIcon icon={faKey} className={classes.i} />
          </div>
          <br />
          <Button onClick={enterToAccount} variant="contained" color="primary">
            ورود
          </Button>
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
        <button onClick={() => alert(isShowing)} id="show">
          show
        </button>
        <button
          onClick={() => {
            dispatch(showLogin());
          }}
          id="change"
        >
          change
        </button>
      </>
    ) : (
      <>
        <span className={classes.title}>
          <FontAwesomeIcon
            onClick={props.close}
            icon={faTimes}
            className={classes.closeSign}
          />
          ایجاد حساب کاربری
        </span>
        <main>
          <div className={classes.name}>
            <input onChange={nameHandler} placeholder="نام و نام خانوادگی" />
            <FontAwesomeIcon icon={faUser} className={classes.i} />
          </div>
          <div className={classes.signupUser}>
            <input onChange={signupUsernameHandler} placeholder="نام کاربری" />
            <FontAwesomeIcon icon={faUser} className={classes.i} />
          </div>
          <div className={classes.email}>
            <input
              type="email"
              onChange={emailHandler}
              placeholder="ایمیل"
              id="email"
            />
            <FontAwesomeIcon icon={faEnvelope} className={classes.i} />
          </div>
          <div className={classes.signupPass}>
            <input
              type="password"
              onChange={signupPasswordHandler}
              placeholder="رمز عبور"
              id="password"
            />
            <FontAwesomeIcon icon={faKey} className={classes.i} />
          </div>
          <h5 className={classes.rememberMe}>
            <input id="notRobot" type="checkbox" />
            من ربات نیستم
          </h5>
          <Button onClick={createAccount} variant="contained" color="primary">
            ثبت
          </Button>
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
