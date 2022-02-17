/*CSS*/
import style from "./lineChart.module.scss";
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
/*CHILD COMPONENTS*/
import { dynamicData } from "../../Dataset/dynamicData";

export const LineChart = (props) => {
  let [date, setDate] = useState("minute" + props.id);
  let [dateTitle, setDateTitle] = useState("دقیقه");
  const [dateType, setDateType] = useState(dynamicData.minute);
  const [visualRange, setVisualRange] = useState({
    startValue: 0,
    endValue: 60,
  });

  const btnStyling = () => {
    const btn = document.getElementsByClassName("btn" + props.id);
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove(style.activeDate);
    }
    document.getElementById(date).classList.add(style.activeDate);
  };

  useEffect(() => {
    btnStyling();
  });

  useEffect(() => {
    const lineCharts = document.getElementsByClassName(style.lineChart);
    if (props.mode === "dark") {
      for (let i = 0; i < lineCharts.length; i++) {
        lineCharts[i].classList.add(style.lineChart_dark);
      }
    } else {
      for (let i = 0; i < lineCharts.length; i++) {
        lineCharts[i].classList.remove(style.lineChart_dark);
      }
    }
  }, [props.mode]);

  const dateHandler = (e) => {
    setDate(e.target.id);
    date = e.target.id;
    btnStyling();
    setDateTitle(e.target.name);
    switch (e.target.name) {
      case "دقیقه":
        setDateType(dynamicData.minute);
        setVisualRange({
          startValue: 0,
          endValue: 60,
        });
        break;
      case "ساعت":
        setDateType(dynamicData.hour);
        setVisualRange({
          startValue: 0,
          endValue: 24,
        });
        break;
      case "روز":
        setDateType(dynamicData.day);
        setVisualRange({
          startValue: 0,
          endValue: 31,
        });
        break;
      case "ماه":
        setDateType(dynamicData.month);
        setVisualRange({
          startValue: 0,
          endValue: 12,
        });
        break;
      case "سال":
        setDateType(dynamicData.year);
        setVisualRange({
          startValue: 0,
          endValue: 5,
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className={style.lineChart}>
      <h1>{props.title}</h1>
      <Chart id="chart" palette="Harmony Light" dataSource={dateType}>
        <Series
          type="line"
          argumentField="label"
          color={props.color}
          valueField="data"
        />
        <Size height={300} />
        <ArgumentAxis title={`(زمان-${dateTitle})`} visualRange={visualRange} />
        <ScrollBar visible={false} />
        <ZoomAndPan argumentAxis="pan" />
        <Legend visible={false} />
        <Tooltip enabled={true} />
      </Chart>
      <div className={style.setDate}>
        <main>
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
        </main>
      </div>
    </div>
  );
};
