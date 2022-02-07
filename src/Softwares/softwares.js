import React, { useState } from "react";
/*CSS*/
import style from "./softwares.module.scss";
/*CHILD COMPONENTS*/
import { SoftwaresCharts } from "./SoftwaresCharts/softwaresCharts";
import { InfoBoxes } from "../InfoBoxes/infoBoxes";
import { InfoTables } from "../InfoTables/infoTables";
import { dynamicData } from "../Dataset/dynamicData";
import { info } from "../Dataset/staticData";
import { HiddenMenu } from "../HiddenMenu/hiddenMenu";

export const Softwares = (props) => {
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const infoBox = info[0].softwares;
  const infoTable = info[1].softwares;

  const hiddenMenuHandler = () => {
    if (hiddenMenu) setHiddenMenu(false);
    else setHiddenMenu(true);
  };

  return (
    <article className={style.softwares}>
      <HiddenMenu dashboard={props.dashboard} hiddenMenu={hiddenMenu} />
      <header>
        <div className={style.search}>
          <input placeholder="جست و جو" />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <i
          onClick={hiddenMenuHandler}
          className={`fa fa-bars ${style.hiddenMenubtn}`}
        ></i>
      </header>
      <main className={style.title}>
        <select>
          {dynamicData.software.map((sw) => (
            <option>{sw.swName}</option>
          ))}
        </select>
        <h1> / {props.title}</h1>
      </main>
      <InfoBoxes infoBox={infoBox} />
      <SoftwaresCharts />
      <InfoTables infoTable={infoTable} />
    </article>
  );
};
