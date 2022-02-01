/*INNER COMPONENTS*/
import { useEffect, useState } from "react";
import React from "react";
/*CSS*/
import style from "./busTransactions.module.scss";
import Chart from "chart.js/auto";

export const BusTransactions = () => {
  const [date, setDate] = useState("از روز پیش");

  const dateHandler = (e) => {
    setDate(e.target.text);
  };

  let reqChart = React.createRef();
  let totalTransactionChart = React.createRef();

  useEffect(() => {
    const req = reqChart.current.getContext("2d");
    new Chart(req, {
      type: "bar",
      data: {
        labels: [
          "نرم افزار اول",
          "نرم افزار هشتم",
          "نرم افزار سوم",
          "نرم افزار دوازدهم",
          "نرم افزار چهارم",
          "نرم افزار بیستم",
          "نرم افزار نهم",
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

    const totalTransaction = totalTransactionChart.current.getContext("2d");
    new Chart(totalTransaction, {
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
            text: "مجموع تراکنش ها",
          },
        },
      },
    });
  }, []);

  return (
    <main className={style.requestGraphs}>
      <div className={style.dougnutGraph}>
        <canvas ref={totalTransactionChart} />
        <span>9</span>
      </div>
      <div className={style.barGraph}>
        <canvas ref={reqChart} />
      </div>
      <div class={`container ${style.setDate}`}>
        <h1>انتخاب بازه زمانی</h1>
        <div class={`dropdown ${style.dropdown}`}>
          <button
            class="btn btn-default dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            {date}
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li class="dropdown-header">کوتاه مدت</li>
            <li>
              <a onClick={dateHandler} href="#">
                از روز پیش
              </a>
            </li>
            <li>
              <a onClick={dateHandler} href="#">
                از هفته پیش
              </a>
            </li>
            <li>
              <a onClick={dateHandler} href="#">
                از ماه پیش
              </a>
            </li>
            <li class="divider"></li>
            <li class="dropdown-header">بلند مدت</li>
            <li>
              <a onClick={dateHandler} href="#">
                از 1 سال پیش
              </a>
            </li>
            <li>
              <a onClick={dateHandler} href="#">
                از 2 سال پیش
              </a>
            </li>
            <li>
              <a onClick={dateHandler} href="#">
                از 5 سال پیش
              </a>
            </li>
            <li>
              <a onClick={dateHandler} href="#">
                از 10 سال پیش
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
