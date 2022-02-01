/*INNER COMPONENTS*/
import { useEffect } from "react";
import React from "react";
/*CSS*/
import style from "./softwareTransactions.module.scss";
import Chart from "chart.js/auto";

export const SoftwareTransactions = () => {
  let swReqChart = React.createRef();
  let swResChart = React.createRef();

  useEffect(() => {
    const swRes = swResChart.current.getContext("2d");
    new Chart(swRes, {
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
            text: "مجموع پاسخ ها",
          },
        },
      },
    });

    const swReq = swReqChart.current.getContext("2d");
    new Chart(swReq, {
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
    <>
      <h1 className={style.title}>sf</h1>
      <main className={style.softwares}>
        <div className={style.dougnutGraph}>
          <canvas ref={swResChart} />
          <span>14</span>
        </div>
        <div className={style.chooseSW}>
          <select>
            <option value="sw1">نرم افزار اول</option>
            <option value="sw2">نرم افزار دوم</option>
            <option value="sw3">نرم افزار سوم</option>
            <option value="sw4">نرم افزار چهارم</option>
          </select>
        </div>
        <div className={style.dougnutGraph}>
          <canvas ref={swReqChart} />
          <span>9</span>
        </div>
      </main>
    </>
  );
};
