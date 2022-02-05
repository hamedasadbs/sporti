/*CSS*/
import style from "./lineChart.module.scss";
/*INNER COMPONENTS*/
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

export const LineChart = (props) => {
  let [date, setDate] = useState("minute" + props.id);
  const [chart, setChart] = useState(null);

  const yearDate = [1400, 1399, 1398, 1397, 1396, 1395, 1394, 1393];
  const monthDate = [
    "اسفند",
    "بهمن",
    "دی",
    "آذر",
    "آبان",
    "مهر",
    "شهریور",
    "مرداد",
    "تیر",
    "خرداد",
    "اردیبهشت",
    "فروردین",
  ];
  const dayDate = [...Array(32).keys()];
  const hourDate = [...Array(26).keys()];
  const minuteDate = [...Array(62).keys()];

  const btnStyling = () => {
    const btn = document.getElementsByClassName("btn" + props.id);
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove(style.activeDate);
    }
    document.getElementById(date).classList.add(style.activeDate);
  };

  useEffect(() => {
    btnStyling();
    const line = document.getElementById("myCanvas" + props.id);
    setChart(
      new Chart(line, {
        type: "line",
        data: {
          labels: minuteDate,
          datasets: [
            {
              data: [
                947, 1402, 3700, 5267, 2500, 300, 1260, 1000, 380, 590, 1500,
                1300, 4300,
              ],
              borderColor: props.color,
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
              text: props.title,
            },
          },
          backgroundColor: props.color,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "(" + props.xName + " (" + "دقیقه",
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

  const dateHandler = (e) => {
    setDate(e.target.id);
    date = e.target.id;
    btnStyling();
    props.date(e.target.name);
    chart.options.scales.x.title.text =
      "(" + props.xName + " (" + e.target.name;

    switch (e.target.name) {
      case "دقیقه":
        chart.data.labels = minuteDate;
        break;
      case "ساعت":
        chart.data.labels = hourDate;
        break;
      case "روز":
        chart.data.labels = dayDate;
        break;
      case "ماه":
        chart.data.labels = monthDate;
        break;
      case "سال":
        chart.data.labels = yearDate;
        break;
    }
    chart.update();
  };

  return (
    <div className={style.lineChart}>
      <canvas id={`myCanvas${props.id}`} />
      <div className={style.setDate}>
        <button
          onClick={dateHandler}
          className={`btn${props.id}`}
          id={`yearly${props.id}`}
          name="سال"
        >
          سالانه
        </button>
        <button
          onClick={dateHandler}
          className={`btn${props.id}`}
          id={`monthly${props.id}`}
          name="ماه"
        >
          ماهانه
        </button>
        <button
          onClick={dateHandler}
          className={`btn${props.id}`}
          id={`daily${props.id}`}
          name="روز"
        >
          روزانه
        </button>
        <button
          onClick={dateHandler}
          className={`btn${props.id}`}
          id={`hourly${props.id}`}
          name="ساعت"
        >
          ساعتی
        </button>
        <button
          onClick={dateHandler}
          className={`btn${props.id}`}
          id={`minute${props.id}`}
          name="دقیقه"
        >
          دقیقه
        </button>
      </div>
    </div>
  );
};
