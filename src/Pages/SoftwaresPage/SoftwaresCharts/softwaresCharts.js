/*CSS*/
import style from "./softwaresCharts.module.scss";
/*CHILD COMPONENTS*/
import { LineChart } from "../../../Components/Charts/LineChart/lineChart";
import { BarChart } from "../../../Components/Charts/BarChart/barChart";

export const SoftwaresCharts = (props) => {
  return (
    <main className={style.softwaresCharts}>
      <LineChart
        darkMode={props.darkMode}
        title="نسبت موفقیت پاسخ ها"
        name="okResponseRatios_softwares"
        software={props.software}
        color="#1a651a"
        darkColor="#2aa22a"
        id="1"
      />
      <LineChart
        darkMode={props.darkMode}
        title="تعداد درخواست ها"
        name="responseDiagram_softwares"
        software={props.software}
        color="#651b65"
        darkColor="#a12ba1"
        id="2"
      />
      <LineChart
        darkMode={props.darkMode}
        title="تعداد پاسخ ها"
        name="requestDiagram_softwares"
        software={props.software}
        color="#b37400"
        darkColor="#ffaf1a"
      />

      <BarChart
        darkMode={props.darkMode}
        title="درخواست های نرم افزار"
        name="softwareRequestDiagram_softwares"
        software={props.software}
        color="#7b1e1e"
        darkColor="#b92d2d"
        id={1}
      />
      <BarChart
        darkMode={props.darkMode}
        title="پاسخ های نرم افزار"
        name="softwareResponseDiagram_softwares"
        software={props.software}
        color="#0606f9"
        darkColor="#5151fb"
        id={2}
      />
    </main>
  );
};
