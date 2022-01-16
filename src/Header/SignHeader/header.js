/*CSS*/
import style from "./header.module.scss";
/*ASSETS*/
import logo from "../../Images/logo.png";

export const SignHeader = () => (
  <div className={style.header}>
    <div className={style.logo}>
      <a href="/boofe/">
        <img src={logo} alt="logo" />
      </a>
    </div>
  </div>
);
