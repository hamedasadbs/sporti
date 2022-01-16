/*INNER-COMPONENTS*/
import axios from "axios";
import { Redirect } from "react-router-dom";
/*CSS*/
import style from "./section.module.scss";

export const SignSection = (props) => {
  const setCookie = (cName, cValue, minutes) => {
    let d = new Date();
    d.setTime(d.getTime() + minutes * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires;
  };

  const validatePassword = (pass) => {
    if (pass.length > 5) {
      return true;
    } else {
      return false;
    }
  };

  const validateEmail = (emailMobile) => {
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (validEmail.test(emailMobile)) {
      return true;
    } else {
      return false;
    }
  };

  const singupHandler = () => {
    const username = document.getElementById("username").value;
    const emailMobile = document.getElementById("emailMobile").value;
    const password = document.getElementById("password").value;
    const rePassword = document.getElementById("rePassword").value;
    const url = "http://localhost/boofe/account.php";

    if (
      username != "" &&
      emailMobile != "" &&
      password != "" &&
      rePassword != ""
    ) {
      if (document.getElementById("terms").checked) {
        if (validateEmail(emailMobile)) {
          if (password == rePassword) {
            if (validatePassword(password)) {
              axios
                .post(
                  url,
                  JSON.stringify({
                    username,
                    emailMobile,
                    password,
                    goal: "signup",
                  })
                )
                .then((res) => {
                  switch (res.data) {
                    case 3:
                      alert(res.data);
                      window.location.href = "/sign";
                      break;
                    case 2:
                      alert("این ایمیل قبلا ثبت نام شده است");
                      break;
                    case 1:
                      alert(
                        "این نام کاربری معتبر نیست لطفا نام کاربری دیگری انتخاب کنید"
                      );
                      break;
                  }
                });
            } else alert("رمز انتخابی شما قابل قبول نیست");
          } else alert("پسورد خود را به دقت وارد کنید");
        } else alert("ایمیل وارد شده معتبر نیست");
      } else alert("لطفا تیک پذیرش قوانین را فعال کنید");
    } else alert("لطفا تمام اطلاعات خود را تکمیل کنید");
  };

  const loginHandler = () => {
    const loginEmailMobile = document.getElementById("loginEmailMobile").value;
    const loginPassword = document.getElementById("loginPassword").value;
    const url = "http://localhost/boofe/account.php";

    if (loginEmailMobile != "" && loginPassword != "") {
      axios
        .post(
          url,
          JSON.stringify({
            emailMobile: loginEmailMobile,
            password: loginPassword,
            goal: "login",
          })
        )
        .then((res) => {
          if (res.data != "") {
            setCookie("username", res.data[0], 100);
            setCookie("role", res.data[1], 100);
            if (res.data[1] == "0") window.location.href = "/";
            else window.location.href = "/admin";
          } else alert("ایمیل/شماره تلفن یا رمز عبور اشتباه است");
        });
    } else alert("لطفا تمام اطلاعات خود را تکمیل کنید");
  };

  return (
    <section className={style.section}>
      {props.activeTab === "login" ? (
        <div className={style.sign}>
          <h1>ورود</h1>
          <main>
            <div>
              <input id="loginEmailMobile" placeholder="ایمیل یا شماره تلفن" />
              <i className="fa fa-user"></i>
            </div>
            <div>
              <input
                id="loginPassword"
                type="password"
                placeholder="رمز عبور"
              />
              <i className="fa fa-lock"></i>
            </div>
            <div className={style.forget}>
              <a href="/">نام کاربری را فراموش کرده ام</a>
            </div>
            <button onClick={loginHandler}>ورود</button>
          </main>
        </div>
      ) : (
        <div className={style.sign}>
          <h1>ثبت نام</h1>
          <main>
            <div>
              <input id="username" placeholder="نام کاربری" />
              <i className="fa fa-user"></i>
            </div>
            <div>
              <input id="emailMobile" placeholder="ایمیل یا شماره تلفن" />
              <i className="fa fa-envelope"></i>
            </div>
            <div>
              <input id="password" type="password" placeholder="رمز عبور" />
              <i className="fa fa-lock"></i>
            </div>
            <div>
              <input
                id="rePassword"
                type="password"
                placeholder="تکرار رمز عبور"
              />
              <i className="fa fa-lock"></i>
            </div>
            <span className={style.terms}>
              قوانین را میپذیرم
              <input id="terms" type="checkbox" />
            </span>
            <br />
            <button onClick={singupHandler}>ثبت نام</button>
          </main>
        </div>
      )}
    </section>
  );
};
