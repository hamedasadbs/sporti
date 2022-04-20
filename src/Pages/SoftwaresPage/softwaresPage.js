/*inner components*/
import { useEffect, useState } from "react";
/*css*/
import style from "./softwaresPage.module.scss";
/*child components*/
import { SoftwaresCharts } from "./SoftwaresCharts/softwaresCharts";
import { InfoBoxes } from "../../Components/InfoBoxes/infoBoxes";
import { InfoTables } from "../../Components/InfoTables/infoTables";
import { Header } from "../../Layouts/Header/header";
import { SelectDropdown } from "../../Components/SelectDropdown/selectDropdown";
import * as dark from "../../Middleware/Library/darkMode";

export const SoftwaresPage = (props) => {
  /*states*/
  const [software, setSoftware] = useState("CallCenter");
  /*varianle*/
  const infoIndex = "softwares";
  /*dark mode*/
  useEffect(() => {
    dark.darkMode(style.softwares, style.softwares_dark, props.darkMode);
  }, [props.darkMode]);
  /*render component*/
  return (
    <article className={style.softwares}>
      <Header darkMode={props.darkMode} />
      <main>
        <SelectDropdown setSoftware={setSoftware} darkMode={props.darkMode} />
        <h1 className={style.title}>/ {props.title}</h1>
      </main>
      <InfoBoxes darkMode={props.darkMode} infoIndex={infoIndex} />
      <SoftwaresCharts software={software} darkMode={props.darkMode} />
      <InfoTables
        software={software}
        darkMode={props.darkMode}
        infoIndex={infoIndex}
      />
    </article>
  );
};
