import React, { useState } from "react";
/*CSS*/
import style from "./bus.module.scss";
/*CHILD COMPONENTS*/
import { InfoBoxes } from "../InfoBoxes/infoBoxes";
import { BusCharts } from "./BusCharts/busCharts";
import { InfoTables } from "../InfoTables/infoTables";
import { info } from "../Dataset/staticData";
import { HiddenMenu } from "../HiddenMenu/hiddenMenu";

export const Bus = (props) => {
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const infoBox = info[0].bus;
  const infoTable = info[1].bus;

  const hiddenMenuHandler = () => {
    if (hiddenMenu) setHiddenMenu(false);
    else setHiddenMenu(true);
  };

  return (
    <article className={style.bus}>
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
        <h1>{props.title}</h1>
      </main>
      <InfoBoxes infoBox={infoBox} />
      <BusCharts />
      <InfoTables infoTable={infoTable} />
    </article>
  );
};
