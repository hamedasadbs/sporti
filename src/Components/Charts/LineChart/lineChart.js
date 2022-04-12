/*CSS*/
import style from "./lineChart.module.scss";
/*INNER COMPONENTS*/
import { useEffect, useState } from "react";
import Chart, {
  ArgumentAxis,
  Series,
  ZoomAndPan,
  Legend,
  ScrollBar,
  Tooltip,
  Size,
  Point,
  CommonSeriesSettings,
} from "devextreme-react/chart";

export const LineChart = (props) => {
  let [date, setDate] = useState("minute" + props.id);
  let [dateTitle, setDateTitle] = useState("دقیقه");
  const [chartColor, setChartColor] = useState(props.color);
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
    if (props.darkMode === 1) {
      setChartColor(props.darkColor);
      for (let i = 0; i < lineCharts.length; i++) {
        lineCharts[i].classList.add(style.lineChart_dark);
      }
    } else {
      setChartColor(props.color);
      for (let i = 0; i < lineCharts.length; i++) {
        lineCharts[i].classList.remove(style.lineChart_dark);
      }
    }
  }, [props.darkMode, props]);

  const dateHandler = (e) => {
    setDate(e.target.id);
    date = e.target.id;
    btnStyling();
    setDateTitle(e.target.name);
    switch (e.target.name) {
      case "دقیقه":
        setVisualRange({
          startValue: 0,
          endValue: 60,
        });
        props.setTimeType(0);
        break;
      case "ساعت":
        setVisualRange({
          startValue: 0,
          endValue: 24,
        });
        props.setTimeType(1);
        break;
      case "روز":
        setVisualRange({
          startValue: 0,
          endValue: 31,
        });
        props.setTimeType(2);
        break;
      case "ماه":
        setVisualRange({
          startValue: 0,
          endValue: 12,
        });
        props.setTimeType(3);
        break;
      case "سال":
        setVisualRange({
          startValue: 0,
          endValue: 10,
        });
        props.setTimeType(4);
        break;
      default:
        break;
    }
  };

  return (
    <div className={style.lineChart}>
      <h1>
        {props.title} <i className="fa fa-line-chart"></i>
      </h1>
      <Chart id="chart" palette="Harmony Light" dataSource={props.dataset}>
        <CommonSeriesSettings
          argumentField="xPosition"
          valueField={props.yPosition}
          type="spline"
        >
          <Point visible={true} size="7" />
        </CommonSeriesSettings>
        <Series
          type="line"
          argumentField="xPosition"
          color={chartColor}
          valueField={props.yPosition}
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
