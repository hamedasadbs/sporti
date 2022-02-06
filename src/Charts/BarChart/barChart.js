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
} from "devextreme-react/chart";
import { dataset } from "../../Dataset/dataset";

export const BarChart = (props) => {
  let [date, setDate] = useState("minute" + props.id);
  const [dateType, setDateType] = useState(dataset.software);
  const [visualRange, setVisualRange] = useState({
    startValue: 0,
    endValue: 60,
  });

  const dateHandler = (e) => {
    setDate(e.target.id);
    date = e.target.id;
  };

  return (
    <div className={style.barChart}>
      <h1>{props.title}</h1>
      <Chart id="chart" palette="Harmony Light" dataSource={dateType}>
        <Series
          type="bar"
          argumentField="swName"
          color={props.color}
          valueField="data"
        />
        <ArgumentAxis title="نرم افزار" visualRange={visualRange} />
        <ScrollBar visible={false} />
        <ZoomAndPan argumentAxis="pan" />
        <Legend visible={false} />
        <Tooltip enabled={true} />
      </Chart>
      <div className={style.setDate}>
        <button
          className={`btn${props.id}`}
          id={`yearly${props.id}`}
          name="سال"
          onClick={dateHandler}
        >
          سالانه
        </button>
        <button
          className={`btn${props.id}`}
          id={`monthly${props.id}`}
          name="ماه"
          onClick={dateHandler}
        >
          ماهانه
        </button>
        <button
          className={`btn${props.id}`}
          id={`daily${props.id}`}
          name="روز"
          onClick={dateHandler}
        >
          روزانه
        </button>
        <button
          className={`btn${props.id}`}
          id={`hourly${props.id}`}
          name="ساعت"
          onClick={dateHandler}
        >
          ساعتی
        </button>
        <button
          className={`btn${props.id}`}
          id={`minute${props.id}`}
          name="دقیقه"
          onClick={dateHandler}
        >
          دقیقه
        </button>
      </div>
    </div>
  );
};
