import { useEffect, useState } from "react";
/*CSS*/
import style from "./softwaresPage.module.scss";
/*CHILD COMPONENTS*/
import { SoftwaresCharts } from "./SoftwaresCharts/softwaresCharts";
import { InfoBoxes } from "../../Components/InfoBoxes/infoBoxes";
import { InfoTables } from "../../Components/InfoTables/infoTables";
//import { info } from "../../Middleware/Dataset/staticData";
import { Header } from "../../Layouts/Header/header";
import { Title } from "../../Components/Title/title";
import { SelectDropdown } from "../../Components/SelectDropdown/selectDropdown";

export const SoftwaresPage = (props) => {
  const infoIndex = "softwares";
  const [software, setSoftware] = useState("CallCenter");

  useEffect(() => {
    if (props.darkMode)
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
        <SelectDropdown setSoftware={setSoftware} darkMode={props.darkMode} />
        <Title darkMode={props.darkMode}>/ {props.title}</Title>
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
