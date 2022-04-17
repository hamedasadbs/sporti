/*CSS*/
import style from "./softwaresCharts.module.scss";
/*CHILD COMPONENTS*/
import { BarChart } from "../../../Components/Charts/BarChart/barChart";
import { SplineChart } from "../../../Components/Charts/SplineChart/splineChart";

export const SoftwaresCharts = (props) => {
  return (
    <main className={style.softwaresCharts}>
      <SplineChart
        darkMode={props.darkMode}
        title="نسبت موفقیت پاسخ ها"
        name="okResponseRatios_softwares"
        software={props.software}
        color="#1a651a"
        darkColor="#2aa22a"
        yAxisType="نسبت"
        id="1"
      />
      <SplineChart
        darkMode={props.darkMode}
        title="تعداد درخواست ها"
        name="responseDiagram_softwares"
        software={props.software}
        color="#651b65"
        darkColor="#a12ba1"
        yAxisType="تعداد"
        id="2"
      />
      <SplineChart
        darkMode={props.darkMode}
        title="تعداد پاسخ ها"
        name="requestDiagram_softwares"
        software={props.software}
        color="#b37400"
        yAxisType="تعداد"
        darkColor="#ffaf1a"
      />

      <BarChart
        darkMode={props.darkMode}
        title="درخواست های نرم افزار"
        name="softwareRequestDiagram_softwares"
        software={props.software}
        color="#7b1e1e"
        darkColor="#b92d2d"
        yAxisType="تعداد"
        id={1}
      />
      <BarChart
        darkMode={props.darkMode}
        title="پاسخ های نرم افزار"
        name="softwareResponseDiagram_softwares"
        software={props.software}
        color="#0606f9"
        darkColor="#5151fb"
        yAxisType="تعداد"
        id={2}
      />
    </main>
  );
};
