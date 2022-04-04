/*INNER COMPONENTS*/
import React from "react";
/*CSS*/
import style from "./title.module.scss";

export const Title = (props) => {
  return <h1 className={style.title}>{props.children}</h1>;
};
