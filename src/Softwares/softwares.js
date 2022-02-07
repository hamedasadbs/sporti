import React from "react";
/*CSS*/
import style from "./softwares.module.scss";
/*CHILD COMPONENTS*/
import { SoftwaresCharts } from "./SoftwaresCharts/softwaresCharts";
import { InfoBoxes } from "../InfoBoxes/infoBoxes";
import { InfoTables } from "../InfoTables/infoTables";
import { dataset } from "../Dataset/dataset";

export const Softwares = (props) => {
  const infoBox = [
    {
      bgColor: "rgb(228, 148, 0)",
      title: "تعداد پاسخ های دریافت شده",
      value: "30",
      icon1: "fa-reply",
    },
    {
      bgColor: "rgb(126, 33, 126)",
      title: "تعداد درخواست های ارسال شده",
      value: "5",
      icon1: "fa-paper-plane",
    },
    {
      bgColor: "rgb(158, 38, 38)",
      title: "تعداد کل تراکنش ها",
      value: "10",
      icon1: "fa-exchange",
    },
  ];
  return (
    <article className={style.softwares}>
      <header>
        <div className={style.search}>
          <input placeholder="جست و جو" />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </header>
      <main className={style.title}>
        <select>
          {dataset.software.map((sw) => (
            <option>{sw.swName}</option>
          ))}
        </select>
        <h1> / {props.title}</h1>
      </main>
      <InfoBoxes infoBox={infoBox} />
      <SoftwaresCharts />
      <InfoTables />
    </article>
  );
};
