/*INNER COMPONENTS*/
import { useEffect, useState } from "react";
import React from "react";
/*CSS*/
import style from "./dashboard.module.scss";
/*CHILD COMPONENTS*/
import { BusTransactions } from "./busTransactions/busTransactions";
import { SoftwareTransactions } from "./softwareTransactions/softwareTransactions";

export const Dashboard = (props) => {
  return (
    <article className={style.dashboard}>
      <header>
        <div className={style.search}>
          <input placeholder="جست و جو" />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <h1>{props.dashboard}</h1>
      </header>
      <BusTransactions />
      <SoftwareTransactions />
    </article>
  );
};
