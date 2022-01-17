import { useEffect } from "react";
import React from "react";
/*CSS*/
import style from "./dashboard.module.scss";
import Chart from "chart.js/auto";

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

  let reqChart = React.createRef();
  let totalReqChart = React.createRef();
  let totalResChart = React.createRef();

  useEffect(() => {
    const req = reqChart.current.getContext("2d");
    new Chart(req, {
      type: "bar",
      data: {
        labels: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        datasets: [
          {
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [10, 20, 30, 40, 50, 60, 70],
            backgroundColor: "lightsalmon",
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "center",
          },
          title: {
            display: true,
            text: "BUS بیشترین درخواست های ارسال شده از",
          },
        },
      },
    });

    const totalReq = totalReqChart.current.getContext("2d");
    new Chart(totalReq, {
      type: "doughnut",
      data: {
        labels: ["ناموفق", "موفق"],
        datasets: [
          {
            data: [30, 70],
            backgroundColor: ["rgb(223, 75, 75)", "rgb(60, 145, 60)"],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "مجموع پاسخ ها",
          },
        },
      },
    });

    const totalRes = totalResChart.current.getContext("2d");
    new Chart(totalRes, {
      type: "doughnut",
      data: {
        labels: ["ناموفق", "موفق"],
        datasets: [
          {
            label: "My First Dataset",
            data: [30, 70],
            backgroundColor: ["rgb(223, 75, 75)", "rgb(60, 145, 60)"],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "مجموع درخواست ها",
          },
        },
      },
    });
  }, []);

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
      <main className={style.requestGraphs}>
        <div className={style.dougnutGraph}>
          <canvas ref={totalReqChart} />
          <span>9</span>
        </div>
        <div className={style.barGraph}>
          <canvas ref={reqChart} />
        </div>
        <div className={style.dougnutGraph}>
          <canvas ref={totalResChart} />
          <span>14</span>
        </div>
      </main>
    </article>
  );
};
