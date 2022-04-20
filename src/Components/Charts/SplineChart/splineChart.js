/*css*/
import style from "./splineChart.module.scss";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
/*inner components*/
import { useEffect, useState } from "react";
/*child components*/
import * as request from "../../../Middleware/Requests/axiosRequest";
import * as dark from "../../../Middleware/Library/darkMode";

export const SplineChart = (props) => {
  /*states*/
  const [timeType, setTimeType] = useState(0);
  const [dataset, setDataset] = useState([]);
  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  let [date, setDate] = useState("minute" + props.id);
  let [dateTitle, setDateTitle] = useState("دقیقه");
  /*initial button styles*/
  useEffect(() => {
    btnStyling();
  });
  /*dark mode*/
  useEffect(() => {
    dark.darkMode(style.splineChart, style.splineChart_dark, props.darkMode);
  }, [props.darkMode, props]);
  /*send request*/
  useEffect(() => {
    let url = "";
    switch (props.name) {
      /*bus charts*/
      case "okResponseRatios_bus":
        url = `http://10.42.0.72:44351/api/Bus/OkResponseRatios?timeType=${timeType}`;
        break;
      case "responseDiagram_bus":
        url = `http://10.42.0.72:44351/api/Bus/ResponseDiagram?timeType=${timeType}`;
        break;
      case "requestDiagram_bus":
        url = `http://10.42.0.72:44351/api/Bus/RequestDiagram?timeType=${timeType}`;
        break;
      /*softwares charts*/
      case "okResponseRatios_softwares":
        url = `http://10.42.0.72:44351/api/Software/OkResponseRatios?software=${props.software}&timeType=${timeType}`;
        break;
      case "responseDiagram_softwares":
        url = `http://10.42.0.72:44351/api/Software/ResponseDiagram?software=${props.software}&timeType=${timeType}`;
        break;
      case "requestDiagram_softwares":
        url = `http://10.42.0.72:44351/api/Software/RequestDiagram?software=${props.software}&timeType=${timeType}`;
        break;
      default:
        url = "";
    }
    request.axiosRequest(url).then((res) => {
      setDataset(res);
    });
  }, [timeType, props.software, props]);
  /*button styling*/
  const btnStyling = () => {
    const btn = document.getElementsByClassName("btn" + props.id);
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove(style.activeDate);
    }
    document.getElementById(date).classList.add(style.activeDate);
  };
  /*change date*/
  const dateHandler = (e) => {
    setDate(e.target.id);
    date = e.target.id;
    btnStyling();
    setDateTitle(e.target.name);
    switch (e.target.name) {
      case "دقیقه":
        setTimeType(0);
        break;
      case "ساعتی":
        setTimeType(1);
        break;
      case "روزانه":
        setTimeType(2);
        break;
      case "ماهانه":
        setTimeType(3);
        break;
      case "سالانه":
        setTimeType(4);
        break;
      default:
        break;
    }
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
  /*chart options*/
  const options = {
    chart: {
      type: "areaspline",
      backgroundColor:
        Highcharts.defaultOptions.legend?.backgroundColor || "transparent",
      height: 300,
    },
    legend: {
      enabled: false,
    },
    title: {
      text: " ",
    },
    xAxis: {
      categories: dataset.map((ds, i) =>
        dateTitle === "ماهانه"
          ? months[i]
          : dateTitle === "سالانه"
          ? new Date().getFullYear() - 621 - ds.xPosition
          : ds.xPosition
      ),
      title: {
        text: `(زمان-${dateTitle})`,
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
    tooltip: {
      shared: true,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: props.yAxisType,
        data: dataset.map((ds) => ds[Object.keys(dataset[0])[0]]),
        color: props.darkMode ? props.darkColor : props.color,
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
          width: 10,
        },
      },
    ],
    plotOptions: {
      series: {
        fillOpacity: 0.5,
      },
    },
  };
  /*render component*/
  return (
    <div className={style.splineChart}>
      <h1>
        {props.title} <i className="fa fa-line-chart"></i>
      </h1>
      {dataset.length && (
        <HighchartsReact highcharts={Highcharts} options={options} />
      )}
      <div className={style.setDate}>
        <main>
          <button
            className={`btn${props.id}`}
            id={`yearly${props.id}`}
            name="سالانه"
            onClick={dateHandler}
          >
            سالانه
          </button>
          <button
            className={`btn${props.id}`}
            id={`monthly${props.id}`}
            name="ماهانه"
            onClick={dateHandler}
          >
            ماهانه
          </button>
          <button
            className={`btn${props.id}`}
            id={`daily${props.id}`}
            name="روزانه"
            onClick={dateHandler}
          >
            روزانه
          </button>
          <button
            className={`btn${props.id}`}
            id={`hourly${props.id}`}
            name="ساعتی"
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
