/*INNER-COMPONENTS*/
import { useState } from "react";
/*CSS*/
import style from "./search.module.scss";

export const Search = () => {
  const [firstType, setFirstType] = useState(true);
  const [secondType, setSecondType] = useState(false);

  function firstTypeHandler() {
    setFirstType(true);
    setSecondType(false);
  }

  function secondTypeHandler() {
    setFirstType(false);
    setSecondType(true);
  }

  return (
    <nav className={style.searchNav}>
      <div className={style.tabs}>
        <button
          {...(secondType
            ? { className: style.activeTab }
            : { className: style.notActiveTab })}
          onClick={secondTypeHandler}
        >
          نوع دوم
        </button>
        <button
          {...(firstType
            ? { className: style.activeTab }
            : { className: style.notActiveTab })}
          onClick={firstTypeHandler}
        >
          نوع اول
        </button>
      </div>
      <div className={style.search}>
        <button>
          جست و جو<i className="fa fa-search"></i>
        </button>
        <input type="text" placeholder="دنبال چی ای؟" />
      </div>
    </nav>
  );
};
