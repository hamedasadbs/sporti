/*INNER COMPONENT*/
import { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../logic/Context";
/*CSS*/
import classes from "./Sign.module.scss";
/*MUI*/
import Checkbox from "@material-ui/core/Checkbox";
/*ICON*/
import { Lock, Mail, AccountCircle, PersonAdd } from "@material-ui/icons";
/*LIBRARY*/
import * as cookieLib from "../../logic/Cookie";

export const Sign = () => {
  /*STATE*/
  const [name, setName] = useState(null);
  const [sign, setSign] = useState("login");
  const [signupUsername, setSignupUsername] = useState(null);
  let [loginUsername, setLoginUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [signupPassword, setSignupPassword] = useState(null);
  let [loginPassword, setLoginPassword] = useState(null);
  /*VARIABLE*/
  const setIsSignShown = useContext(Context).signCon[1];
  /*FUNCTION*/
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
            .post("http://localhost:8080/signup", {
              name: name,
              username: signupUsername,
              email: email,
              password: signupPassword,
            })
            .then((res) => {
              cookieLib.setCookie("login", true, 60);
              cookieLib.setCookie("username", signupUsername, 60);
              if (res.status == 200) {
                setLoginUsername(signupUsername);
                loginUsername = signupUsername;
                setLoginPassword(signupPassword);
                loginPassword = signupPassword;
                enterToAccount();
              }
            })
            .catch(() => {
              alert("نام کاربری یا رمز وارد شده اشتباه است");
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
        .post("http://localhost:8080/login", {
          username: loginUsername,
          password: loginPassword,
        })
        .then((res) => {
          cookieLib.setCookie("login", true, 60);
          cookieLib.setCookie("username", loginUsername, 60);
          alert(`شما با نام ${loginUsername} وارد حساب کاربری خود شدید`);
          window.location.href = "/";
        })
        .catch((err) => {
          alert(err);
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

  const notCloseHandler = (e) => {
    e.stopPropagation();
  };
  /*JSX*/
  return (
    <div
      onClick={() => setIsSignShown(false)}
      className={classes.signContainer}
    >
      <article onClick={notCloseHandler} className={classes.sign}>
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
                <Checkbox className={classes.checkbox} />
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
              <span className={classes.notRobot}>
                <Checkbox
                  className={classes.checkbox}
                  id="notRobot"
                  color="primary"
                />
                من ربات نیستم
              </span>
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
