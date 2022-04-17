/*CSS*/
import style from "./busCharts.module.scss";
/*CHILD COMPONENTS*/
import { BarChart } from "../../../Components/Charts/BarChart/barChart";
import { SplineChart } from "../../../Components/Charts/SplineChart/splineChart";

export const BusCharts = (props) => {
  return (
    <main className={style.busCharts}>
      <SplineChart
        darkMode={props.darkMode}
        title="نسبت موفقیت پاسخ ها"
        name="okResponseRatios_bus"
        color="#1a651a"
        darkColor="#2aa22a"
        yAxisType="نسبت"
        id="1"
      />
      <SplineChart
        darkMode={props.darkMode}
        title="پاسخ های دریافت شده"
        name="responseDiagram_bus"
        color="#b37400"
        darkColor="#ffaf1a"
        yAxisType="تعداد"
        id="2"
      />
      <SplineChart
        darkMode={props.darkMode}
        title="درخواست های ارسال شده"
        name="requestDiagram_bus"
        color="#651b65"
        darkColor="#a12ba1"
        yAxisType="تعداد"
        id="3"
      />

      <BarChart
        darkMode={props.darkMode}
        title="نرم افزار هایی با بیشترین درخواست"
        name="softwareRequestDiagram_bus"
        color="#651b65"
        darkColor="#a12ba1"
        yAxisType="تعداد"
        id={1}
      />
      <BarChart
        darkMode={props.darkMode}
        title="نرم افزار هایی با بیشترین پاسخ"
        name="softwareResponseDiagram_bus"
        color="#0606f9"
        darkColor="#5151fb"
        yAxisType="تعداد"
        id={2}
      />
      <BarChart
        darkMode={props.darkMode}
        title="ضریب موفقیت تراکنش ها"
        name="transactionsSuccessRatio"
        color="#7b1e1e"
        darkColor="#b92d2d"
        yAxisType="ضریب"
        id={3}
      />
      <BarChart
        darkMode={props.darkMode}
        title="متوسط زمان پاسخ نرم افزار ها"
        name="responseTimeAverage"
        color="#a2102d"
        darkColor="#e81741"
        yAxisType="متوسط زمان"
        id={4}
      />
    </main>
  );
};
