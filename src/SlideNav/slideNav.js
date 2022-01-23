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
        داشبورد <i className="fa fa-tachometer"></i>
      </h1>
      <button onClick={navHandler} className={style.activeNav} id="BUS">
        BUS<i className={`fa fa-usb ${style.busIcon}`}></i>
      </button>
      <button onClick={navHandler} id="PROFILE">
        پروفایل<i className="fa fa-user-circle"></i>
      </button>
      <button onClick={navHandler} id="SETTINGS">
        تنظیمات<i className="fa fa-cog"></i>
      </button>
    </nav>
  );
};
