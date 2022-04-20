/*css*/
import style from "./softwaresCharts.module.scss";
/*child components*/
import { BarChart } from "../../../Components/Charts/BarChart/barChart";
import { SplineChart } from "../../../Components/Charts/SplineChart/splineChart";

export const SoftwaresCharts = (props) => {
  /*render component*/
  return (
    <main className={style.softwaresCharts}>
      <SplineChart
        darkMode={props.darkMode}
        title="نرخ موفقیت پاسخ ها"
        name="okResponseRatios_softwares"
        software={props.software}
        color="#1a651a"
        darkColor="#2aa22a"
        yAxisType="نرخ موفقیت"
        id="1"
      />
      <SplineChart
        darkMode={props.darkMode}
        title="پاسخ های دریافت شده"
        name="responseDiagram_softwares"
        software={props.software}
        color="#b37400"
        darkColor="#ffaf1a"
        yAxisType="تعداد"
        id="2"
      />
      <SplineChart
        darkMode={props.darkMode}
        title="درخواست های ارسال شده"
        name="requestDiagram_softwares"
        software={props.software}
        color="#651b65"
        darkColor="#a12ba1"
        yAxisType="تعداد"
      />

      <BarChart
        darkMode={props.darkMode}
        title="تعداد درخواست های نرم افزارها"
        name="softwareRequestDiagram_softwares"
        software={props.software}
        color="#651b65"
        darkColor="#a12ba1"
        yAxisType="تعداد"
        id={1}
      />
      <BarChart
        darkMode={props.darkMode}
        title="تعداد پاسخ های نرم افزارها"
        name="softwareResponseDiagram_softwares"
        software={props.software}
        color="#b37400"
        darkColor="#ffaf1a"
        yAxisType="تعداد"
        id={2}
      />
    </main>
  );
};
