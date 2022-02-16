/*INNER COMPONENTS*/
import { useEffect } from "react";
/*CSS*/
import style from "./infoBox.module.scss";

export const InfoBox = (props) => {
  const colorHandler = () => {
    switch (props.bgColor) {
      case "rgb(255, 43, 43)":
        return "rgb(202, 34, 34)";
      case "rgb(34, 131, 34)":
        return "rgb(25, 100, 25)";
      case "rgb(228, 148, 0)":
        return "rgb(167, 108, 0)";
      case "rgb(126, 33, 126)":
        return "rgb(90, 23, 90)";
      case "rgb(41, 41, 250)":
        return "rgb(32, 32, 184)";
      case "rgb(158, 38, 38)":
        return "rgb(105, 25, 25)";
    }
  };

  useEffect(() => {
    const infoBox = document.getElementsByClassName(style.infoBox);
    if (props.mode != "dark") {
      for (let i = 0; i < infoBox.length; i++) {
        infoBox[i].classList.remove(style.infoBox_dark);
        switch (props.name) {
          case "failedRes":
            infoBox[i].classList.add(style.failedRes);
            break;
          case "okRes":
            infoBox[i].classList.add(style.okRes);
            break;
          case "totalRes":
            infoBox[i].classList.add(style.totalRes);
            break;
          case "totalReq":
            infoBox[i].classList.add(style.totalReq);
            break;
          case "totalSoft":
            infoBox[i].classList.add(style.totalSoft);
            break;
          case "totalRes":
            infoBox[i].classList.add(style.totalRes);
            break;
          case "totalReq":
            infoBox[i].classList.add(style.totalReq);
            break;
          case "totalTransaction":
            infoBox[i].classList.add(style.totalTransaction);
            break;
        }
      }
    } else {
      for (let i = 0; i < infoBox.length; i++) {
        infoBox[i].classList.remove(style.failedRes);
        infoBox[i].classList.remove(style.okRes);
        infoBox[i].classList.remove(style.totalRes);
        infoBox[i].classList.remove(style.totalReq);
        infoBox[i].classList.remove(style.totalSoft);
        infoBox[i].classList.remove(style.totalTransaction);

        infoBox[i].classList.add(style.infoBox_dark);
      }
    }
  }, [props.mode]);

  return (
    <span className={style.infoBox}>
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
