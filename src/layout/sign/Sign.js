/*INNER-COMPONENTS*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
/*CSS*/
import classes from "./Sign.module.scss";
/*CHILD-COMPONENTS*/

/*ASSETS*/
import Checkbox from "@material-ui/core/Checkbox";
import {
  Lock,
  Mail,
  Cancel,
  AccountCircle,
  PersonAdd,
} from "@material-ui/icons";
import allActions from "../../redux/AllActions";

export const Sign = (props) => {
  /*STATES*/
  const [name, setName] = useState(null);
  const [sign, setSign] = useState("login");
  const [signupUsername, setSignupUsername] = useState(null);
  let [loginUsername, setLoginUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [signupPassword, setSignupPassword] = useState(null);
  let [loginPassword, setLoginPassword] = useState(null);
  /*VARIABLES*/
  const loginURL = "http://localhost/bsShop/login.php";
  const signupURL = "http://localhost/bsShop/signup.php";
  const dispatch = useDispatch();
  /*FUNCTIONS*/
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

  const setCookie = (cName, cValue, minutes) => {
    let d = new Date();
    d.setTime(d.getTime() + minutes * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires;
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
            setCookie("isOnline", true, 100);
            setCookie("accountName", res.data[0].username, 100);
            dispatch(allActions.cookieActions.setOnline());
            props.close();
            window.location.href = window.location.href;
          }
        });
    } else {
      alert("لطفا تمام اطلاعات خود را تکمیل کرده سپس ثبت کنید");
    }
  };

  const changeToSignup = () => {
    setSign("signup");
  };

  const changeToLogin = () => {
    setSign("login");
  };

  return (
    <div className={classes.signContainer}>
      <article className={classes.sign}>
        {sign === "login" ? (
          <>
            <span className={classes.title}>
              <h1
                {...(sign === "signup" && {
                  className: classes.activeTab,
                })}
                onClick={changeToSignup}
              >
                ثبت حساب کاربری جدید
              </h1>
              <Cancel onClick={props.close} className={classes.closeSign} />
              <h1
                {...(sign === "login" && {
                  className: classes.activeTab,
                })}
                onClick={changeToLogin}
              >
                ورود به حساب کاربری
              </h1>
            </span>
            <main>
              <div className={classes.loginUser}>
                <input
                  onChange={loginUsernameHandler}
                  placeholder="نام کاربری یا ایمیل"
                />
                <AccountCircle className={classes.i} />
              </div>
              <div className={classes.loginPass}>
                <input
                  onChange={loginPasswordHandler}
                  type="password"
                  placeholder="رمز عبور"
                />
                <Lock className={classes.i} />
              </div>
              <br />
              <h5 className={classes.rememberMe}>
                <Checkbox color="primary" />
                مرا به خاطر بسپار
              </h5>
              <a href="/" className={classes.reUser}>
                نام کاربری یا رمز عبور را فراموش کرده ام
              </a>
              <button onClick={enterToAccount} className={classes.login}>
                ورود
              </button>
            </main>
          </>
        ) : (
          <>
            <span className={classes.title}>
              <h1
                {...(sign === "signup" && {
                  className: classes.activeTab,
                })}
                onClick={changeToSignup}
              >
                ثبت حساب کاربری جدید
              </h1>
              <Cancel onClick={props.close} className={classes.closeSign} />
              <h1
                {...(sign === "login" && {
                  className: classes.activeTab,
                })}
                onClick={changeToLogin}
              >
                ورود به حساب کاربری
              </h1>
            </span>
            <main>
              <div className={classes.name}>
                <input
                  onChange={nameHandler}
                  placeholder="نام و نام خانوادگی"
                />
                <PersonAdd className={classes.i} />
              </div>
              <div className={classes.signupUser}>
                <input
                  onChange={signupUsernameHandler}
                  placeholder="نام کاربری"
                />
                <AccountCircle className={classes.i} />
              </div>
              <div className={classes.email}>
                <input
                  type="email"
                  onChange={emailHandler}
                  placeholder="ایمیل"
                  id="email"
                />
                <Mail className={classes.i} />
              </div>
              <div className={classes.signupPass}>
                <input
                  type="password"
                  onChange={signupPasswordHandler}
                  placeholder="رمز عبور"
                  id="password"
                />
                <Lock className={classes.i} />
              </div>
              <h5 className={classes.notRobot}>
                <input id="notRobot" type="checkbox" />
                من ربات نیستم
              </h5>
              <button onClick={createAccount} className={classes.signup}>
                ثبت
              </button>
            </main>
          </>
        )}
      </article>
    </div>
  );
};
