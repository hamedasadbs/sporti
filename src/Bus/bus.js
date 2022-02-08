import React, { useState } from "react";
/*CSS*/
import style from "./bus.module.scss";
/*CHILD COMPONENTS*/
import { InfoBoxes } from "../InfoBoxes/infoBoxes";
import { BusCharts } from "./BusCharts/busCharts";
import { InfoTables } from "../InfoTables/infoTables";
import { info } from "../Dataset/staticData";
import { Header } from "../Header/header";

export const Bus = (props) => {
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const infoBox = info[0].bus;
  const infoTable = info[1].bus;

  return (
    <article className={style.bus}>
      <Header />
      <main className={style.title}>
        <h1>{props.title}</h1>
      </main>
      <InfoBoxes infoBox={infoBox} />
      <BusCharts />
      <InfoTables infoTable={infoTable} />
    </article>
  );
};
