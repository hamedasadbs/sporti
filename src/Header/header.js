import React, { useEffect } from "react";
/*CSS*/
import style from "./header.module.scss";

export const Header = (props) => {
  useEffect(() => {
    if (props.darkMode == 1) {
      document
        .getElementsByClassName(style.header)[0]
        .classList.add(style.header_dark);
    } else {
      document
        .getElementsByClassName(style.header)[0]
        .classList.remove(style.header_dark);
    }
  }, [props.darkMode]);

  return (
    <header className={style.header}>
      <div className={style.profile}>
        <button>
          <i className="fa fa-user-circle"></i>
        </button>
        <button>
          <i className="fa fa-bell"></i>
        </button>
      </div>
      <div className={style.search}>
        <input placeholder="جست و جو" />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </header>
  );
};
