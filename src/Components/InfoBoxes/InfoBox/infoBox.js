/*INNER COMPONENTS*/
import { useEffect } from "react";
/*CSS*/
import style from "./infoBox.module.scss";

export const InfoBox = (props) => {
  useEffect(() => {
    const infoBox = document.getElementsByClassName(style.infoBox);

    for (let i = 0; i < infoBox.length; i++) {
      infoBox[i].classList.remove(style.infoBox_dark);
    }

    switch (props.name) {
      case "failedRes":
        infoBox[props.index].classList.add(style.failedRes);
        break;
      case "okRes":
        infoBox[props.index].classList.add(style.okRes);
        break;
      case "totalRes":
        infoBox[props.index].classList.add(style.totalRes);
        break;
      case "totalReq":
        infoBox[props.index].classList.add(style.totalReq);
        break;
      case "totalSoft":
        infoBox[props.index].classList.add(style.totalSoft);
        break;
      case "totalTransaction":
        infoBox[props.index].classList.add(style.totalTransaction);
        break;
      case "totalEventsReq":
        infoBox[props.index].classList.add(style.totalEventsReq);
        break;
      default:
        break;
    }
    if (props.darkMode == 1) {
      for (let i = 0; i < infoBox.length; i++) {
        infoBox[i].classList.add(style.infoBox_dark);
      }
    }
  }, [props.darkMode]);

  return (
    <span className={style.infoBox}>
      <div className={style.icon}>
        <i className={`fa ${props.icon1} ${style.i1}`}></i>
        <i className={`fa ${props.icon2} ${style.i2}`}></i>
      </div>
      <span>{props.value}</span>
      <label className={style.title}>{props.title}</label>
    </span>
  );
};
