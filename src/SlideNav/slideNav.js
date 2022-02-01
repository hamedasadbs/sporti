/*CSS*/
import style from "./slideNav.module.scss";

export const SlideNav = (props) => {
  const navHandler = (e) => {
    const nav = document.getElementById(e.target.id);
    const otherId = `:not([id^='${e.target.id}'])`;
    const others = document.querySelectorAll(otherId);
    for (let i = 0; i < others.length; i++) {
      others[i].classList.remove(style.activeNav);
    }
    nav.classList.add(style.activeNav);
    props.dashboard(e.target.id);
  };

  return (
    <nav className={style.slideNav}>
      <h1>
        مدیریت <i className="fa fa-user-plus"></i>
      </h1>
      <button onClick={navHandler} className={style.activeNav} id="داشبورد">
        داشبورد<i className="fa fa-tachometer"></i>
      </button>
      <button onClick={navHandler} id="پروفایل">
        پروفایل<i className="fa fa-user-circle"></i>
      </button>
      <button onClick={navHandler} id="تنظیمات">
        تنظیمات<i className="fa fa-cog"></i>
      </button>
    </nav>
  );
};
