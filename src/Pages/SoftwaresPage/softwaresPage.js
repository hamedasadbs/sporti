import { useEffect, useState } from "react";
import axios from "axios";
/*CSS*/
import style from "./softwaresPage.module.scss";
/*CHILD COMPONENTS*/
import { SoftwaresCharts } from "./SoftwaresCharts/softwaresCharts";
import { InfoBoxes } from "../../Components/InfoBoxes/infoBoxes";
import { InfoTables } from "../../Components/InfoTables/infoTables";
import { dynamicData } from "../../Middleware/Dataset/dynamicData";
import { info } from "../../Middleware/Dataset/staticData";
import { Header } from "../../Layouts/Header/header";
import { Title } from "../../Components/Title/title";
import { SelectDropdown } from "../../Components/SelectDropdown/selectDropdown";

export const SoftwaresPage = (props) => {
  const infoBoxIndex = "softwares";
  const infoTable = info[1].softwares;

  const [infoBoxData, setInfoBoxData] = useState("");

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

  useEffect(() => {
    axios({
      method: "get",
      url: `http://10.42.0.72:44351/api/Software/StatisticsInfo`,
    }).then((res) => {
      setInfoBoxData(res.data);
    });
  }, []);

  return (
    <article className={style.softwares}>
      <Header darkMode={props.darkMode} />
      <main>
        <SelectDropdown darkMode={props.darkMode} />
        <Title>/ {props.title}</Title>
      </main>
      <InfoBoxes
        dataset={infoBoxData}
        darkMode={props.darkMode}
        infoBoxIndex={infoBoxIndex}
      />
      <SoftwaresCharts darkMode={props.darkMode} />
      <InfoTables darkMode={props.darkMode} infoTable={infoTable} />
    </article>
  );
};
