/*INNER-COMPONENTS*/
import { useState, useEffect } from "react";
/*CSS*/
import style from "./selectDropdown.module.scss";
/*CHILD COMPONENTS*/
import { dynamicData } from "../Dataset/dynamicData";

export const SelectDropdown = (props) => {
  const [sw, setSW] = useState(dynamicData.software[0].swName);
  const [showOptions, setShowOptions] = useState(false);

  window.onclick = function (e) {
    if (e.target.nodeName !== "BUTTON") {
      setShowOptions(false);
    }
  };

  const showOptionsHandler = () => {
    if (showOptions) setShowOptions(false);
    else setShowOptions(true);
  };

  const selectHandler = (sw) => {
    setSW(sw.target.innerHTML);
    setShowOptions(false);
  };

  useEffect(() => {
    if (props.darkMode == 1) {
      document
        .getElementsByClassName(style.select)[0]
        .classList.add(style.select_dark);
    } else {
      document
        .getElementsByClassName(style.select)[0]
        .classList.remove(style.select_dark);
    }
  }, [props.darkMode]);

  return (
    <div className={style.select}>
      <button onClick={showOptionsHandler}>{sw}</button>
      {showOptions && (
        <div className={style.options}>
          {dynamicData.software.map((sw) => (
            <span onClick={selectHandler}>{sw.swName}</span>
          ))}
        </div>
      )}
    </div>
  );
};
