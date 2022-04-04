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
        title="تعداد درخواست ها"
        color="#651b65"
        darkColor="#a12ba1"
        id="1"
      />
      <LineChart
        darkMode={props.darkMode}
        title="تعداد پاسخ ها"
        color="#b37400"
        darkColor="#ffaf1a"
        id="2"
      />
      <LineChart
        darkMode={props.darkMode}
        title="نسبت موفقیت پاسخ ها"
        color="#1a651a"
        darkColor="#2aa22a"
        id="3"
      />
      <BarChart
        darkMode={props.darkMode}
        title="تراکنش با سیستم های پر استفاده"
        color="#7b1e1e"
        darkColor="#b92d2d"
        id="1"
      />
      <BarChart
        darkMode={props.darkMode}
        title="درخواست به سیستم های پر استفاده"
        color="#0606f9"
        darkColor="#5151fb"
        id="2"
      />
      <BarChart
        darkMode={props.darkMode}
        title="دریافت رویداد و پاسخ از سیستم های پر تراکنش"
        color="#7b1e1e"
        darkColor="#b92d2d"
        id="3"
      />
    </main>
  );
};
