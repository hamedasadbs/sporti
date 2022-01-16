/*CSS*/
import style from "./dashboard.module.scss";
import { Bar } from "react-chartjs-2";

export const Dashboard = (props) => {
  const navHandler = (e) => {
    const nav = document.getElementById(e.target.id);
    const otherId = `:not([id^='${e.target.id}'])`;
    const others = document.querySelectorAll(otherId);
    for (let i = 0; i < others.length; i++) {
      others[i].classList.remove(style.activeNav);
    }
    nav.classList.add(style.activeNav);
  };

  return (
    <article className={style.dashboard}>
      <header>
        <div className={style.search}>
          <input placeholder="جست و جو" />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <h1>{props.dashboard}</h1>
      </header>
      <nav className={style.setDate}>
        <button id="custom" onClick={navHandler}>
          فیلتر بازه زمانی به صورت دستی
        </button>
        <button id="year" onClick={navHandler}>
          از یک سال پیش
        </button>
        <button id="month" onClick={navHandler}>
          از یک ماه پیش
        </button>
        <button id="day" onClick={navHandler}>
          از یک روز پیش
        </button>
        <button id="hour" onClick={navHandler} className={style.activeNav}>
          از یک ساعت پیش
        </button>
      </nav>
      <div>
        <Bar
          height={400}
          width={600}
          data={{
            labels: ["red", "blue", "green"],
            datasets: [0],
          }}
        />
      </div>
    </article>
  );
};
