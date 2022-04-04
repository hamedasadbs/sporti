/*CSS*/
import style from "./doughnutChart.module.scss";
/*INNER COMPONENTS*/
import { useEffect, createRef } from "react";
import Chart from "chart.js/auto";

export const DoughnutChart = (props) => {
  let doughnutChart = createRef();

  useEffect(() => {
    const doughnut = doughnutChart.current.getContext("2d");
    new Chart(doughnut, {
      type: "doughnut",
      data: {
        labels: ["ناموفق", "موفق"],
        datasets: [
          {
            data: [30, 70],
            backgroundColor: ["rgb(255, 43, 43)", "rgb(34, 131, 34)"],
            border: "1px solid black",
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
    <div className={style.dougnutChart}>
      <canvas ref={doughnutChart} />
      <span>9</span>
    </div>
  );
};
