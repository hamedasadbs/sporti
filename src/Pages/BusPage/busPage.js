import { useEffect, useState } from "react";
import axios from "axios";
/*CSS*/
import style from "./busPage.module.scss";
/*CHILD COMPONENTS*/
import { InfoBoxes } from "../../Components/InfoBoxes/infoBoxes";
import { BusCharts } from "./BusCharts/busCharts";
import { InfoTables } from "../../Components/InfoTables/infoTables";
import { info } from "../../Middleware/Dataset/staticData";
import { Header } from "../../Layouts/Header/header";
import { Title } from "../../Components/Title/title";

export const BusPage = (props) => {
  const infoBoxIndex = "bus";
  const infoTable = info.bus;

  const [infoBoxData, setInfoBoxData] = useState("");

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

  useEffect(() => {
    axios({
      method: "get",
      url: `http://10.42.0.72:44351/api/Bus/StatisticsInfo`,
    }).then((res) => {
      setInfoBoxData(res.data);
    });
  }, []);

  return (
    <article className={style.bus}>
      <Header darkMode={props.darkMode} />
      <main>
        <Title>{props.title}</Title>
      </main>
      <InfoBoxes
        dataset={infoBoxData}
        darkMode={props.darkMode}
        infoBoxIndex={infoBoxIndex}
      />
      <BusCharts darkMode={props.darkMode} />
      <InfoTables darkMode={props.darkMode} infoTable={infoTable} />
    </article>
  );
};
