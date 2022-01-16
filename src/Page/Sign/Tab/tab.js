/*INNER-COMPONENTS*/
import { useState } from "react";
/*CSS*/
import style from "./tab.module.scss";

export const SignTab = (props) => {
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(false);

  function loginHandler() {
    setLogin(true);
    setSignup(false);
    props.activeTab("login");
  }

  function signupHandler() {
    setLogin(false);
    setSignup(true);
    props.activeTab("signup");
  }

  return (
    <div className={style.tab}>
      <span className={style.buttons}>
        <button
          {...(signup
            ? { className: style.activeTab }
            : { className: style.notActiveTab })}
          onClick={signupHandler}
        >
          ثبت نام
        </button>
        <button
          {...(login
            ? { className: style.activeTab }
            : { className: style.notActiveTab })}
          onClick={loginHandler}
        >
          ورود
        </button>
      </span>
    </div>
  );
};
