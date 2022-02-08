import React, { useState } from "react";
/*CSS*/
import style from "./softwares.module.scss";
/*CHILD COMPONENTS*/
import { SoftwaresCharts } from "./SoftwaresCharts/softwaresCharts";
import { InfoBoxes } from "../InfoBoxes/infoBoxes";
import { InfoTables } from "../InfoTables/infoTables";
import { dynamicData } from "../Dataset/dynamicData";
import { info } from "../Dataset/staticData";
import { Header } from "../Header/header";

export const Softwares = (props) => {
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const infoBox = info[0].softwares;
  const infoTable = info[1].softwares;

  return (
    <article className={style.softwares}>
      <Header />
      <main className={style.title}>
        <select>
          {dynamicData.software.map((sw) => (
            <option>{sw.swName}</option>
          ))}
        </select>
        <h1> / {props.title}</h1>
      </main>
      <InfoBoxes infoBox={infoBox} />
      <SoftwaresCharts />
      <InfoTables infoTable={infoTable} />
    </article>
  );
};
