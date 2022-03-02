import React from "react";
/*CSS*/
import style from "./setting.module.scss";
/*CHILD COMPONENTS*/
import { Header } from "../Header/header";

export const Setting = (props) => {
  return (
    <article className={style.setting}>
      <Header darkMode={props.darkMode} />
      <main className={style.title}>
        <h1>{props.title}</h1>
      </main>
    </article>
  );
};
