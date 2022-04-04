/*CSS*/
import style from "./busCharts.module.scss";
/*CHILD COMPONENTS*/
import { LineChart } from "../../../Components/Charts/LineChart/lineChart";
import { BarChart } from "../../../Components/Charts/BarChart/barChart";

export const BusCharts = (props) => {
  return (
    <main className={style.busCharts}>
      <LineChart
        darkMode={props.darkMode}
        title="نسبت موفقیت پاسخ ها"
        color="#1a651a"
        darkColor="#2aa22a"
        id="1"
      />
      <LineChart
        darkMode={props.darkMode}
        title="پاسخ های ارسال شده"
        color="#b37400"
        darkColor="#ffaf1a"
        id="2"
      />
      <LineChart
        darkMode={props.darkMode}
        title="درخواست های ارسال شده"
        color="#651b65"
        darkColor="#a12ba1"
        id="3"
      />
      <LineChart
        darkMode={props.darkMode}
        title="پیام های مبادله شده"
        color="#7b1e1e"
        darkColor="#b92d2d"
        id="4"
      />
      <BarChart
        darkMode={props.darkMode}
        title="نرم افزار هایی با بیشترین درخواست"
        color="#651b65"
        darkColor="#a12ba1"
        id="1"
      />
      <BarChart
        darkMode={props.darkMode}
        title="نرم افزار هایی با بیشترین پاسخ"
        color="#0606f9"
        darkColor="#5151fb"
        id="2"
      />
      <BarChart
        darkMode={props.darkMode}
        title="ضریب موفقیت تراکنش ها"
        color="#7b1e1e"
        darkColor="#b92d2d"
        id="3"
      />
      <BarChart
        darkMode={props.darkMode}
        title="متوسط زمان پاسخ نرم افزار ها"
        color="#a2102d"
        darkColor="#e81741"
        id="4"
      />
    </main>
  );
};
