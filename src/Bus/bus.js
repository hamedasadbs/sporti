import React, { useEffect } from "react";
/*CSS*/
import style from "./bus.module.scss";
/*CHILD COMPONENTS*/
import { InfoBoxes } from "../InfoBoxes/infoBoxes";
import { BusCharts } from "./BusCharts/busCharts";
import { InfoTables } from "../InfoTables/infoTables";
import { info } from "../Dataset/staticData";
import { Header } from "../Header/header";

export const Bus = (props) => {
  const infoBox = info[0].bus;
  const infoTable = info[1].bus;

  useEffect(() => {
    if (props.mode == "dark")
      document
        .getElementsByClassName(style.bus)[0]
        .classList.add(style.bus_dark);
    else
      document
        .getElementsByClassName(style.bus)[0]
        .classList.remove(style.bus_dark);
  }, [props.mode]);

  return (
    <article className={style.bus}>
      <Header mode={props.mode} />
      <main className={style.title}>
        <h1>{props.title}</h1>
      </main>
      <InfoBoxes mode={props.mode} infoBox={infoBox} />
      <BusCharts mode={props.mode} />
      <InfoTables mode={props.mode} infoTable={infoTable} />
    </article>
  );
};
