import React, { useEffect } from "react";
/*CSS*/
import style from "./softwaresPage.module.scss";
/*CHILD COMPONENTS*/
import { SoftwaresCharts } from "./SoftwaresCharts/softwaresCharts";
import { InfoBoxes } from "../../Components/InfoBoxes/infoBoxes";
import { InfoTables } from "../../Components/InfoTables/infoTables";
import { dynamicData } from "../../Config/Dataset/dynamicData";
import { info } from "../../Config/Dataset/staticData";
import { Header } from "../../Layouts/Header/header";
import { Title } from "../../Components/Title/title";
import { SelectDropdown } from "../../Components/SelectDropdown/selectDropdown";

export const SoftwaresPage = (props) => {
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
      <main>
        <SelectDropdown darkMode={props.darkMode} />
        <Title>/ {props.title}</Title>
      </main>
      <InfoBoxes darkMode={props.darkMode} infoBox={infoBox} />
      <SoftwaresCharts darkMode={props.darkMode} />
      <InfoTables darkMode={props.darkMode} infoTable={infoTable} />
    </article>
  );
};
