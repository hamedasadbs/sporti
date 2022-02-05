/*INNER COMPONENTS*/
import { useEffect, useState } from "react";
import React from "react";
/*CSS*/
import style from "./bus.module.scss";
/*CHILD COMPONENTS*/
import { InfoBoxes } from "./InfoBoxes/infoBoxes";
import { BusCharts } from "./BusCharts/busCharts";
import { InfoTables } from "./InfoTables/infoTables";

export const Bus = (props) => {
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
        <h1>{props.dashboard}</h1>
      </main>
      <InfoBoxes />
      <BusCharts />
      <InfoTables />
    </article>
  );
};
