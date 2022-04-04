/*CSS*/
import style from "./barChart.module.scss";
/*INNER COMPONENTS*/
import { useState, useEffect } from "react";
import Chart, {
  ArgumentAxis,
  Series,
  ZoomAndPan,
  Legend,
  ScrollBar,
  Tooltip,
  Size,
} from "devextreme-react/chart";
/*CHILD COMPONENTS*/
import { dynamicData } from "../../../Config/Dataset/dynamicData";

export const BarChart = (props) => {
  const [chartColor, setChartColor] = useState(props.color);
  const dateType = dynamicData.software;
  const visualRange = {
    length: 5,
  };

  useEffect(() => {
    const barCharts = document.getElementsByClassName(style.barChart);
    if (props.darkMode == 1) {
      setChartColor(props.darkColor);
      for (let i = 0; i < barCharts.length; i++) {
        barCharts[i].classList.add(style.barChart_dark);
      }
    } else {
      setChartColor(props.color);
      for (let i = 0; i < barCharts.length; i++) {
        barCharts[i].classList.remove(style.barChart_dark);
      }
    }
  }, [props.darkMode]);

  let newArray = dateType.sort(function (a, b) {
    let valueA, valueB;
    valueA = a.data;
    valueB = b.data;
    if (valueA < valueB) {
      return -1;
    } else if (valueA > valueB) {
      return 1;
    }
    return 0;
  });

  return (
    <div className={style.barChart}>
      <h1>{props.title}</h1>
      <Chart id="chart" palette="Harmony Light" dataSource={newArray}>
        <Series
          type="bar"
          argumentField="swName"
          color={chartColor}
          valueField="data"
        />
        <Size height={300} />
        <ArgumentAxis title="(نرم افزار)" visualRange={visualRange} />
        <ScrollBar visible={false} />
        <ZoomAndPan argumentAxis="pan" />
        <Legend visible={false} />
        <Tooltip enabled={true} />
      </Chart>
      <div className={style.setDate}>
        <main>
          <span className={style.setDateInner}>
            <input type="date" className={style.date} />
            <input type="time" className={style.time} />
          </span>
          <h1>تا</h1>
          <span className={style.setDateInner}>
            <input type="date" className={style.date} />
            <input type="time" className={style.time} />
          </span>
          <h1>از</h1>
        </main>
      </div>
      <button>اعمال بازه زمانی</button>
    </div>
  );
};
