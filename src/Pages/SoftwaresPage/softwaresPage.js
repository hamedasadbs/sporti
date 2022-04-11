import { useEffect, useState } from "react";
import axios from "axios";
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
  const [software, setSoftware] = useState(null);

  const softwareHandler = (sw) => {
    setSoftware(sw);
  };

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
        <SelectDropdown
          softwareHandler={softwareHandler}
          darkMode={props.darkMode}
        />
        <Title>/ {props.title}</Title>
      </main>
      <InfoBoxes darkMode={props.darkMode} infoIndex={infoIndex} />
      <SoftwaresCharts darkMode={props.darkMode} />
      <InfoTables
        software={software}
        darkMode={props.darkMode}
        infoIndex={infoIndex}
      />
    </article>
  );
};
