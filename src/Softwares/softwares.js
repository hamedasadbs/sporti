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
import { SelectDropdown } from "../SelectDropdown/selectDropdown";

export const Softwares = (props) => {
  const infoBox = info[0].softwares;
  const infoTable = info[1].softwares;

  useEffect(() => {
    if (props.darkMode == 1)
      document
        .getElementsByClassName(style.softwares)[0]
        .classList.add(style.softwares_dark);
    else
      document
        .getElementsByClassName(style.softwares)[0]
        .classList.remove(style.softwares_dark);
  }, [props.darkMode]);

  return (
    <article className={style.softwares}>
      <Header darkMode={props.darkMode} />
      <main className={style.title}>
        <SelectDropdown darkMode={props.darkMode} />
        <h1>/ {props.title}</h1>
      </main>
      <InfoBoxes darkMode={props.darkMode} infoBox={infoBox} />
      <SoftwaresCharts darkMode={props.darkMode} />
      <InfoTables darkMode={props.darkMode} infoTable={infoTable} />
    </article>
  );
};
