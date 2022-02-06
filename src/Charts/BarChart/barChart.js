/*CSS*/
import style from "./barChart.module.scss";
/*INNER COMPONENTS*/
import React, { useEffect, useState } from "react";
import Chart, {
  ArgumentAxis,
  Series,
  ZoomAndPan,
  Legend,
  ScrollBar,
  Tooltip,
  Size,
} from "devextreme-react/chart";
import { dataset } from "../../Dataset/dataset";

export const BarChart = (props) => {
  let [date, setDate] = useState("minute" + props.id);
  const [dateType, setDateType] = useState(dataset.software);
  const [visualRange, setVisualRange] = useState({
    length: 5,
  });

  const dateHandler = (e) => {
    setDate(e.target.id);
    date = e.target.id;
  };

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
          color={props.color}
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
        <span className={style.fromSetDate}>
          <input type="date" className={style.date} />
          <input type="time" className={style.time} />
        </span>
        <h1>تا</h1>
        <span className={style.toSetDate}>
          <input type="date" className={style.date} />
          <input type="time" className={style.time} />
        </span>
        <h1>از</h1>
      </div>
    </div>
  );
};
