/*INNER COMPONENTS*/
import { useEffect, useState } from "react";
/*CSS*/
import style from "./infoBox.module.scss";

export const InfoBox = (props) => {
  const colorHandler = () => {
    switch (props.bgColor) {
      case "rgb(255, 43, 43)":
        return "rgb(202, 34, 34)";
      case "rgb(34, 131, 34)":
        return "rgb(25, 100, 25)";
      case "rgb(214, 155, 44)":
        return "rgb(163, 118, 33)";
      case "rgb(126, 33, 126)":
        return "rgb(90, 23, 90)";
      case "rgb(41, 41, 250)":
        return "rgb(32, 32, 184)";
    }
  };

  return (
    <span style={{ backgroundColor: props.bgColor }} className={style.infoBox}>
      <div className={style.icon}>
        <i
          style={{ color: colorHandler() }}
          className={`fa ${props.icon1} ${style.i1}`}
        ></i>
        <i
          style={{ color: colorHandler() }}
          className={`fa ${props.icon2} ${style.i2}`}
        ></i>
      </div>
      <span>{props.value}</span>
      <label className={style.title}>{props.title}</label>
    </span>
  );
};
