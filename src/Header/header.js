import React from "react";
/*CSS*/
import style from "./header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.search}>
        <input placeholder="جست و جو" />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </header>
  );
};
