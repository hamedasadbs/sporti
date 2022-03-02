import React from "react";
/*CSS*/
import style from "./profile.module.scss";
/*CHILD COMPONENTS*/
import { Header } from "../Header/header";

export const Profile = (props) => {
  return (
    <article className={style.profile}>
      <Header darkMode={props.darkMode} />
      <main className={style.title}>
        <h1>{props.title}</h1>
      </main>
    </article>
  );
};
