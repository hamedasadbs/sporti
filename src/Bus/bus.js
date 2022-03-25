import React, { useEffect } from "react";
/*CSS*/
import style from "./bus.module.scss";
/*CHILD COMPONENTS*/
import { InfoBoxes } from "../InfoBoxes/infoBoxes";
import { BusCharts } from "./BusCharts/busCharts";
import { InfoTables } from "../InfoTables/infoTables";
import { info } from "../Dataset/staticData";
import { Header } from "../Header/header";
import { Title } from "../Title/title";

export const Bus = (props) => {
  const infoBox = info[0].bus;
  const infoTable = info[1].bus;

  useEffect(() => {
    if (props.darkMode == 1)
      document
        .getElementsByClassName(style.bus)[0]
        .classList.add(style.bus_dark);
    else
      document
        .getElementsByClassName(style.bus)[0]
        .classList.remove(style.bus_dark);
  }, [props.darkMode]);

  return (
    <article className={style.bus}>
      <Header darkMode={props.darkMode} />
      <main>
        <Title>{props.title}</Title>
      </main>
      <InfoBoxes darkMode={props.darkMode} infoBox={infoBox} />
      <BusCharts darkMode={props.darkMode} />
      <InfoTables darkMode={props.darkMode} infoTable={infoTable} />
    </article>
  );
};
