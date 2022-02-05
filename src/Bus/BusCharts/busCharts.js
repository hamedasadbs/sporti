/*INNER COMPONENTS*/
import React, { useState } from "react";
/*CSS*/
import style from "./busCharts.module.scss";
/*CHILD COMPONENTS*/
import { LineChart } from "../../Charts/LineChart/lineChart";
import { BarChart } from "../../Charts/BarChart/barChart";

export const BusCharts = () => {
  const [date, setDate] = useState("دقیقه");

  const dateHandler = (d) => {
    setDate(d);
  };
  return (
    <main className={style.busCharts}>
      <LineChart
        xName="زمان"
        yName="تعداد"
        title="ضریب موفقیت ها"
        color="rgb(25, 100, 25)"
        id="1"
        date={dateHandler}
      />
      <LineChart
        xName="زمان"
        yName="تعداد"
        title="پاسخ های ارسال شده"
        color="rgb(163, 118, 33)"
        id="2"
        date={dateHandler}
      />
      <LineChart
        xName="زمان"
        yName="تعداد"
        title="درخواست های ارسال شده"
        color="rgb(90, 23, 90)"
        id="3"
        date={dateHandler}
      />
      <LineChart
        xName="زمان"
        yName="تعداد"
        title="پیام های مبادله شده"
        color="rgb(22, 53, 99)"
        id="4"
        date={dateHandler}
      />
      <BarChart
        xName="نرم افزار"
        yName="تعداد"
        title="نرم افزار هایی با بیشترین درخواست"
        color="rgb(90, 23, 90)"
        id="5"
      />
      <BarChart
        xName="نرم افزار"
        yName="تعداد"
        title="نرم افزار هایی با بیشترین پاسخ"
        color="rgb(163, 118, 33)"
        id="6"
      />
      <BarChart
        xName="نرم افزار"
        yName="ضریب"
        title="ضریب موفقیت تراکنش ها"
        color="rgb(22, 53, 99)"
        id="7"
      />
      <BarChart
        xName="نرم افزار"
        yName="زمان پاسخ"
        title="متوسط زمان پاسخ نرم افزار ها"
        color="rgb(202, 20, 57)"
        id="8"
      />
    </main>
  );
};
