import { useEffect } from "react";
/*CSS*/
import style from "./busPage.module.scss";
/*CHILD COMPONENTS*/
import { InfoBoxes } from "../../Components/InfoBoxes/infoBoxes";
import { BusCharts } from "./BusCharts/busCharts";
import { InfoTables } from "../../Components/InfoTables/infoTables";
import { Header } from "../../Layouts/Header/header";
import { Title } from "../../Components/Title/title";

export const BusPage = (props) => {
  const infoIndex = "bus";

  useEffect(() => {
    if (props.darkMode)
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
        <Title darkMode={props.darkMode}>{props.title}</Title>
      </main>
      <InfoBoxes darkMode={props.darkMode} infoIndex={infoIndex} />
      <BusCharts darkMode={props.darkMode} />
      <InfoTables darkMode={props.darkMode} infoIndex={infoIndex} />
    </article>
  );
};
