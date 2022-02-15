/*INNER COMPONENTS*/
import React from "react";
/*CSS*/
import style from "./softwaresCharts.module.scss";
/*CHILD COMPONENTS*/
import { LineChart } from "../../Charts/LineChart/lineChart";
import { BarChart } from "../../Charts/BarChart/barChart";

export const SoftwaresCharts = (props) => {
  return (
    <main className={style.softwaresCharts}>
      <LineChart
        mode={props.mode}
        title="تعداد درخواست ها"
        color="rgb(90, 23, 90)"
        id="1"
      />
      <LineChart
        mode={props.mode}
        title="تعداد پاسخ ها"
        color="rgb(167, 108, 0)"
        id="2"
      />
      <LineChart
        mode={props.mode}
        title="نسبت موفقیت پاسخ ها"
        color="rgb(25, 100, 25)"
        id="3"
      />
      <BarChart
        mode={props.mode}
        title="تراکنش با سیستم های پر استفاده"
        color="rgb(158, 38, 38)"
        id="1"
      />
      <BarChart
        mode={props.mode}
        title="درخواست به سیستم های پر استفاده"
        color="rgb(90, 23, 90)"
        id="2"
      />
      <BarChart
        mode={props.mode}
        title="دریافت رویداد و پاسخ از سیستم های پر تراکنش"
        color="rgb(167, 108, 0)"
        id="3"
      />
    </main>
  );
};
