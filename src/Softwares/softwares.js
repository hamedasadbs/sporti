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
    if (props.mode === "dark")
      document
        .getElementsByClassName(style.softwares)[0]
        .classList.add(style.softwares_dark);
    else
      document
        .getElementsByClassName(style.softwares)[0]
        .classList.remove(style.softwares_dark);
  }, [props.mode]);

  return (
    <article className={style.softwares}>
      <Header mode={props.mode} />
      <main className={style.title}>
        <select>
          {dynamicData.software.map((sw, index) => (
            <option key={index}>{sw.swName}</option>
          ))}
        </select>
        <h1> / {props.title}</h1>
      </main>
      <InfoBoxes mode={props.mode} infoBox={infoBox} />
      <SoftwaresCharts mode={props.mode} />
      <InfoTables mode={props.mode} infoTable={infoTable} />
    </article>
  );
};
