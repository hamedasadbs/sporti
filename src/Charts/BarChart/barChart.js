/*CSS*/
import style from "./barChart.module.scss";
/*INNER COMPONENTS*/
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

export const BarChart = (props) => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const bar = document.getElementById("myCanvas" + props.id);
    setChart(
      new Chart(bar, {
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
              barThickness: 15,
              maxBarThickness: 25,
              minBarLength: 2,
              data: [10, 20, 30, 40, 50, 60, 70],
              backgroundColor: props.color,
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
              text: props.title,
            },
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: props.xName,
                color: props.color,
                font: {
                  style: "bold",
                  size: "20px",
                },
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: props.yName,
                color: props.color,
                font: {
                  style: "bold",
                  size: "20px",
                },
              },
            },
          },
        },
      })
    );
  }, []);

  return (
    <div className={style.barChart}>
      <canvas id={`myCanvas${props.id}`} />
      <div className={style.setDate}>
        <div className={style.time}>
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2018-01-01"
            max="2018-12-31"
          />
          <input
            type="time"
            id="appt"
            name="appt"
            min="09:00"
            max="18:00"
            required
          />
        </div>
        <h1>تا</h1>
        <div className={style.time}>
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2018-01-01"
            max="2018-12-31"
          />
          <input
            type="time"
            id="appt"
            name="appt"
            min="09:00"
            max="18:00"
            required
          />
        </div>
        <h1>از</h1>
      </div>
    </div>
  );
};
