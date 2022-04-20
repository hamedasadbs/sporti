/*css file*/
import style from "./barChart.module.scss";
/*inner components*/
import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { DatePicker } from "jalali-react-datepicker";
/*child components*/
import * as request from "../../../Middleware/Requests/axiosRequest";
import * as geo_jal from "../../../Middleware/Library/gregorian_Jalali";
import * as dark from "../../../Middleware/Library/darkMode";

export const BarChart = (props) => {
  /*states*/
  const [range, setRange] = useState([]);
  const [dataset, setDataset] = useState([]);
  /*dark mode*/
  useEffect(() => {
    dark.darkMode(style.barChart, style.barChart_dark, props.darkMode);
  }, [props.darkMode, props]);
  /*send request*/
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
  /*time range changer*/
  const timeRangeHandler = () => {
    const setDate = document.getElementsByClassName(style.setDate);

    const startDate =
      setDate[
        props.id - 1
      ].childNodes[0].childNodes[0].childNodes[1].childNodes[0].value.split(
        " - "
      );
    const finishDate =
      setDate[
        props.id - 1
      ].childNodes[0].childNodes[2].childNodes[1].childNodes[0].value.split(
        " - "
      );

    /*start date*/
    const sDate = startDate[0].split("/");
    let sYear = sDate[0];
    let sMonth = sDate[1];
    let sDay = sDate[2];
    /*start time*/
    const sTime = startDate[1].split(":");
    const sHour = sTime[0];
    const sMinute = sTime[1];
    /*finish date*/
    const fDate = finishDate[0].split("/");
    let fYear = fDate[0];
    let fMonth = fDate[1];
    let fDay = fDate[2];
    /*finish time*/
    const fTime = finishDate[1].split(":");
    const fHour = fTime[0];
    const fMinute = fTime[1];

    const jSDate = geo_jal.jalali_to_gregorian(
      parseInt(sYear),
      parseInt(sMonth),
      parseInt(sDay)
    );

    const jFDate = geo_jal.jalali_to_gregorian(
      parseInt(fYear),
      parseInt(fMonth),
      parseInt(fDay)
    );

    sYear = jSDate[0];
    sMonth = jSDate[1];
    sDay = jSDate[2];

    fYear = jFDate[0];
    fMonth = jFDate[1];
    fDay = jFDate[2];

    setRange([
      `${sYear}/${sMonth}/${sDay}`,
      sHour,
      sMinute,
      `${fYear}/${fMonth}/${fDay}`,
      fHour,
      fMinute,
    ]);
  };
  /*hex color to rgb color*/
  const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };
  /*fix data*/
  const fixHandler = (x) => {
    return parseFloat(x.toFixed(2));
  };
  /*chart options*/
  const options = {
    chart: {
      type: "column",
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "transparent",
      style: {
        fontFamily: "arial",
      },
      height: 300,
    },
    title: {
      text: " ",
    },
    xAxis: {
      categories: dataset.map((ds) =>
        typeof dataset[0][Object.keys(dataset[0])[0]] == "string"
          ? ds[Object.keys(dataset[0])[0]]
          : ds[Object.keys(dataset[0])[1]]
      ),
      title: {
        text: `(نرم افزار)`,
        style: {
          fontSize: "17px",
          color: "lightgray",
        },
      },
      labels: {
        style: {
          fontSize: "12px",
          color: props.darkMode ? "white" : "gray",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: " ",
      },
      labels: {
        style: {
          fontSize: "12px",
          color: props.darkMode ? "white" : "gray",
        },
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        stacking: "normal",
        pointWidth: 50,
        borderWidth: 2,
        borderColor: props.color,
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: props.yAxisType,
        color: props.darkMode
          ? `rgba(${hexToRgb(props.darkColor).r},${
              hexToRgb(props.darkColor).g
            },${hexToRgb(props.darkColor).b},0.5)`
          : `rgba(${hexToRgb(props.color).r},${hexToRgb(props.color).g},${
              hexToRgb(props.color).b
            },0.5)`,
        data: dataset.map((ds) => ({
          y:
            typeof dataset[0][Object.keys(dataset[0])[0]] == "number"
              ? fixHandler(ds[Object.keys(dataset[0])[0]])
              : fixHandler(ds[Object.keys(dataset[0])[1]]),
        })),
        shadow: {
          color: props.darkMode
            ? `rgba(${hexToRgb(props.darkColor).r},${
                hexToRgb(props.darkColor).g
              },${hexToRgb(props.darkColor).b},0.6)`
            : `rgba(${hexToRgb(props.color).r},${hexToRgb(props.color).g},${
                hexToRgb(props.color).b
              },0.2)`,
          offsetX: 1,
          offsetY: 1,
          opacity: "0.1",
          width: 12,
        },
      },
    ],
  };
  /*render component*/
  return (
    <div className={style.barChart}>
      <h1>
        {props.title} <i className="fa fa-bar-chart"></i>
      </h1>
      {dataset.length ? (
        <HighchartsReact highcharts={Highcharts} options={options} />
      ) : (
        <h1 className={style.noDataToShow}>اطلاعاتی جهت نمایش وجود ندارد</h1>
      )}
      <div className={style.setDate}>
        <main>
          <DatePicker className={style.setDateInner} id="finishDate" />
          <h1>تا</h1>
          <DatePicker className={style.setDateInner} id="startDate" />
          <h1>از</h1>
        </main>
      </div>
      <button onClick={timeRangeHandler}>اعمال بازه زمانی</button>
    </div>
  );
};
