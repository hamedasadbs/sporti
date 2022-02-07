/*INNER COMPONENTS*/
import React from "react";
/*CSS*/
import style from "./busCharts.module.scss";
/*CHILD COMPONENTS*/
import { LineChart } from "../../Charts/LineChart/lineChart";
import { BarChart } from "../../Charts/BarChart/barChart";

export const BusCharts = () => {
  return (
    <main className={style.busCharts}>
      <LineChart title="نسبت موفقیت پاسخ ها" color="rgb(25, 100, 25)" id="1" />
      <LineChart title="پاسخ های ارسال شده" color="rgb(167, 108, 0)" id="2" />
      <LineChart title="درخواست های ارسال شده" color="rgb(90, 23, 90)" id="3" />
      <LineChart title="پیام های مبادله شده" color="rgb(158, 38, 38)" id="4" />
      <BarChart
        title="نرم افزار هایی با بیشترین درخواست"
        color="rgb(90, 23, 90)"
        id="1"
      />
      <BarChart
        title="نرم افزار هایی با بیشترین پاسخ"
        color="rgb(167, 108, 0)"
        id="2"
      />
      <BarChart title="ضریب موفقیت تراکنش ها" color="rgb(158, 38, 38)" id="3" />
      <BarChart
        title="متوسط زمان پاسخ نرم افزار ها"
        color="rgb(202, 20, 57)"
        id="4"
      />
    </main>
  );
};
