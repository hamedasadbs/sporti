/*inner components*/
import { useEffect } from "react";
/*css*/
import style from "./busPage.module.scss";
/*child components*/
import { InfoBoxes } from "../../Components/InfoBoxes/infoBoxes";
import { BusCharts } from "./BusCharts/busCharts";
import { InfoTables } from "../../Components/InfoTables/infoTables";
import { Header } from "../../Layouts/Header/header";
import * as dark from "../../Middleware/Library/darkMode";

export const BusPage = (props) => {
  /*variables*/
  const infoIndex = "bus";
  /*dark mode*/
  useEffect(() => {
    dark.darkMode(style.bus, style.bus_dark, props.darkMode);
  }, [props.darkMode]);
  /*render component*/
  return (
    <article className={style.bus}>
      <Header darkMode={props.darkMode} />
      <main>
        <h1 className={style.title}>{props.title}</h1>
      </main>
      <InfoBoxes darkMode={props.darkMode} infoIndex={infoIndex} />
      <BusCharts darkMode={props.darkMode} />
      <InfoTables darkMode={props.darkMode} infoIndex={infoIndex} />
    </article>
  );
};
