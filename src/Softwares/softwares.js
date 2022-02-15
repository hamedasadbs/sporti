import React, { useEffect } from "react";
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
  const infoBox = info[0].softwares;
  const infoTable = info[1].softwares;

  useEffect(() => {
    if (props.mode == "dark")
      document
        .getElementsByClassName(style.bus)[0]
        .classList.add(style.darkMode);
    else
      document
        .getElementsByClassName(style.bus)[0]
        .classList.remove(style.darkMode);
  }, [props.mode]);

  return (
    <article className={style.softwares}>
      <Header mode={props.mode} />
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
