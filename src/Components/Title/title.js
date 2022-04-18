/*INNER COMPONENTS*/
import { useEffect } from "react";
/*CSS*/
import style from "./title.module.scss";

export const Title = (props) => {
  useEffect(() => {
    const title = document.getElementsByClassName(style.title);
    for (let i = 0; i < title.length; i++) {
      if (props.darkMode) {
        title[i].classList.add(style.title_dark);
      } else {
        title[i].classList.remove(style.title_dark);
      }
    }
  }, [props.darkMode]);

  return <h1 className={style.title}>{props.children}</h1>;
};
