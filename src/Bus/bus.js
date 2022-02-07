import React from "react";
/*CSS*/
import style from "./bus.module.scss";
/*CHILD COMPONENTS*/
import { InfoBoxes } from "../InfoBoxes/infoBoxes";
import { BusCharts } from "./BusCharts/busCharts";
import { InfoTables } from "../InfoTables/infoTables";
import { info } from "../Dataset/staticData";

export const Bus = (props) => {
  const infoBox = info[0].bus;
  const infoTable = info[1].bus;

  return (
    <article className={style.bus}>
      <header>
        <div className={style.search}>
          <input placeholder="جست و جو" />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
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
