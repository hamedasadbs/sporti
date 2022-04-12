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
import { dynamicData } from "../../../Middleware/Dataset/dynamicData";

export const BarChart = (props) => {
  const [chartColor, setChartColor] = useState(props.color);
  const dateType = dynamicData.software;
  const visualRange = {
    length: 5,
  };

  useEffect(() => {
    const barCharts = document.getElementsByClassName(style.barChart);
    if (props.darkMode === 1) {
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
  }, [props.darkMode, props]);

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

  const timeRangeHandler = () => {
    const setDateInner = document.getElementsByClassName(style.setDateInner);

    const startDate = setDateInner[props.id * 2 - 2].firstChild.value;
    const startTime = setDateInner[props.id * 2 - 2].lastChild.value;
    const finishDate = setDateInner[props.id * 2 - 1].firstChild.value;
    const finishTime = setDateInner[props.id * 2 - 1].lastChild.value;

    const timeRange = [startDate, startTime, finishDate, finishTime];
    props.setTimeRange(timeRange);
  };

  return (
    <div className={style.barChart}>
      <h1>
        {props.title} <i className="fa fa-bar-chart"></i>
      </h1>
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
            <input id="finishDate" type="date" className={style.date} />
            <input id="finishTime" type="time" className={style.time} />
          </span>
          <h1>تا</h1>
          <span className={style.setDateInner}>
            <input id="startDate" type="date" className={style.date} />
            <input id="startTime" type="time" className={style.time} />
          </span>
          <h1>از</h1>
        </main>
      </div>
      <button onClick={timeRangeHandler}>اعمال بازه زمانی</button>
    </div>
  );
};
