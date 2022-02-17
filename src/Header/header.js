import React, { useEffect } from "react";
/*CSS*/
import style from "./header.module.scss";

export const Header = (props) => {
  useEffect(() => {
    if (props.mode === "dark") {
      document
        .getElementsByClassName(style.header)[0]
        .classList.add(style.header_dark);
    } else {
      document
        .getElementsByClassName(style.header)[0]
        .classList.remove(style.header_dark);
    }
  }, [props.mode]);

  return (
    <header className={style.header}>
      <div className={style.search}>
        <input placeholder="جست و جو" />
        <button
          onClick={() => {
            alert(props.mode);
          }}
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    </header>
  );
};
