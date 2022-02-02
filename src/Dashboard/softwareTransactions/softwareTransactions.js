/*INNER COMPONENTS*/
import { useEffect, useState } from "react";
import React from "react";
/*CSS*/
import style from "./softwareTransactions.module.scss";
import Chart from "chart.js/auto";

export const SoftwareTransactions = () => {
  const softwares = [
    "نرم افزار ششم",
    "نرم افزار پنجم",
    "نرم افزار چهارم",
    "نرم افزار سوم",
    "نرم افزار دوم",
    "نرم افزار اول",
  ];
  const [sw, setSW] = useState(softwares[0]);

  const swHandler = (e) => {
    setSW(e.target.text);
  };

  let swReqChart = React.createRef();
  let swResChart = React.createRef();

  useEffect(() => {
    const swRes = swResChart.current.getContext("2d");
    new Chart(swRes, {
      type: "line",
      data: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [
          {
            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
            label: "Asia",
            borderColor: "rgb(126, 33, 126)",
            fill: false,
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
            text: "بیشترین درخواست های ارسال شده از نرم افزار",
          },
        },
      },
    });

    const swReq = swReqChart.current.getContext("2d");
    new Chart(swReq, {
      type: "line",
      data: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [
          {
            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
            label: "Asia",
            borderColor: "rgb(214, 155, 44)",
            fill: false,
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
            text: "بیشترین پاسخ های دریافت شده ی نرم افزار",
          },
        },
      },
    });
  }, []);

  return (
    <>
      <main className={style.softwares}>
        <div className={style.lineGraph}>
          <canvas ref={swResChart} />
        </div>
        <div className={style.lineGraph}>
          <canvas ref={swReqChart} />
        </div>
        <div class={`container ${style.setDate}`}>
          <h1>انتخاب نرم افزار</h1>
          <div class={`dropdown ${style.dropdown}`}>
            <button
              class="btn btn-default dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              {sw}
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li class="dropdown-header">نرم افزارها</li>
              {softwares.map((sw) => (
                <li>
                  <a onClick={swHandler}>{sw}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};
