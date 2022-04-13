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
  Label,
} from "devextreme-react/chart";
/*CHILD COMPONENTS*/
import * as request from "../../../Middleware/Requests/axiosRequest";

export const BarChart = (props) => {
  const [chartColor, setChartColor] = useState(props.color);
  const [range, setRange] = useState([]);
  const [dataset, setDataset] = useState([]);

  const visualRange = {
    length: 5,
  };

  useEffect(() => {
    const barCharts = document.getElementsByClassName(style.barChart);
    if (props.darkMode) {
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

  const timeRangeHandler = () => {
    const setDateInner = document.getElementsByClassName(style.setDateInner);

    const startDate = setDateInner[props.id * 2 - 1].firstChild.value;
    const startTime = setDateInner[props.id * 2 - 1].lastChild.value;
    const finishDate = setDateInner[props.id * 2 - 2].firstChild.value;
    const finishTime = setDateInner[props.id * 2 - 2].lastChild.value;

    const sTime = startTime.split(":");
    const sHour = sTime[0];
    const sMin = sTime[1];

    const fTime = finishTime.split(":");
    const fHour = fTime[0];
    const fMin = fTime[1];

    const timeRange = [startDate, sHour, sMin, finishDate, fHour, fMin];
    setRange(timeRange);
  };

  useEffect(() => {
    let url = "";
    let start = "";
    let finish = "";
    if (range.length) {
      start = `&start=${range[0]}%20${range[1]}%3A${range[2]}%3A00`;
      finish = `&end=${range[3]}%20${range[4]}%3A${range[5]}%3A00`;
    }

    switch (props.name) {
      /*bus charts*/
      case "softwareRequestDiagram_bus":
        url = `http://10.42.0.72:44351/api/Bus/SoftwareRequestDiagram?takeCount=5${start}${finish}`;
        break;
      case "softwareResponseDiagram_bus":
        url = `http://10.42.0.72:44351/api/Bus/SoftwareResponseDiagram?takeCount=5${start}${finish}`;
        break;
      case "transactionsSuccessRatio":
        url = `http://10.42.0.72:44351/api/Bus/TransactionsSuccessRatio?takeCount=5${start}${finish}`;
        break;
      case "responseTimeAverage":
        url = `http://10.42.0.72:44351/api/Bus/ResponseTimeAverage?takeCount=5${start}${finish}`;
        break;
      /*softwares charts*/
      case "softwareRequestDiagram_softwares":
        url = `http://10.42.0.72:44351/api/Software/SoftwareRequestDiagram?Software=${props.software}&TakeCount=5${start}${finish}`;
        break;
      case "softwareResponseDiagram_softwares":
        url = `http://10.42.0.72:44351/api/Software/SoftwareResponseDiagram?Software=${props.software}&TakeCount=5${start}${finish}`;
        break;
      default:
        url = "";
    }
    request.axiosRequest(url).then((res) => {
      setDataset(res);
    });
  }, [range, props.software, props]);

  return (
    <div className={style.barChart}>
      <h1>
        {props.title} <i className="fa fa-bar-chart"></i>
      </h1>
      {dataset.length ? (
        <Chart id="chart" palette="Harmony Light" dataSource={dataset}>
          {typeof dataset[0][Object.keys(dataset[0])[0]] == "string" ? (
            <Series
              type="bar"
              argumentField={Object.keys(dataset[0])[0]}
              color={chartColor}
              valueField={Object.keys(dataset[0])[1]}
            />
          ) : (
            <Series
              type="bar"
              argumentField={Object.keys(dataset[0])[1]}
              color={chartColor}
              valueField={Object.keys(dataset[0])[0]}
            />
          )}

          <Size height={300} />
          <ArgumentAxis title="(نرم افزار)" visualRange={visualRange}>
            <Label displayMode="stagger" />
          </ArgumentAxis>
          <ScrollBar visible={false} />
          <ZoomAndPan argumentAxis="pan" />
          <Legend visible={false} />
          <Tooltip enabled={true} />
        </Chart>
      ) : (
        <h1 className={style.noDataToShow}>اطلاعاتی جهت نمایش وجود ندارد</h1>
      )}

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
