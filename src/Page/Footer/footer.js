/*CSS*/
import style from "./footer.module.scss";

export const Footer = () => (
  <footer className={style.footer}>
    <div className={style.icons}>
      <i className={`fa fa-facebook-square ${style.facebook}`}></i>
      <i className={`fa fa-twitter-square ${style.twitter}`}></i>
      <i className={`fa fa-linkedin-square ${style.linkedin}`}></i>
      <i className={`fa fa-pinterest-square ${style.pinterest}`}></i>
      <i className={`fa fa-instagram ${style.instagram}`}></i>
    </div>
    <div className={style.shortcuts}>
      <h1>تماس با ما</h1>
      <h1>قوانین و مقررات</h1>
      <h1>بلاگ</h1>
      <h1>درباره ما</h1>
      <h1>سوالات متداول</h1>
    </div>
  </footer>
);
