/*INNER-COMPONENTS*/
import { useState, useEffect } from "react";
import axios from "axios";
/*CSS*/
import style from "./selectDropdown.module.scss";

export const SelectDropdown = (props) => {
  const [softwares, setSoftwares] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [sw, setSW] = useState(null);

  window.onclick = function (e) {
    if (e.target.nodeName !== "BUTTON") {
      setShowOptions(false);
    }
  };

  const showOptionsHandler = () => {
    if (showOptions) setShowOptions(false);
    else setShowOptions(true);
  };

  const selectHandler = (s) => {
    setSW(s.target.innerHTML);
    setShowOptions(false);
    props.softwareHandler(sw);
  };

  useEffect(() => {
    if (props.darkMode === 1) {
      document
        .getElementsByClassName(style.select)[0]
        .classList.add(style.select_dark);
    } else {
      document
        .getElementsByClassName(style.select)[0]
        .classList.remove(style.select_dark);
    }
  }, [props.darkMode]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://10.42.0.72:44351/api/Software/Softwares`,
    }).then((res) => {
      setSoftwares(res.data.result);
      setSW(res.data.result[0]);
    });
  }, []);

  return (
    <div className={style.select}>
      <button onClick={showOptionsHandler}>{sw}</button>
      {showOptions && (
        <div className={style.options}>
          {softwares.map((sw) => (
            <span onClick={selectHandler}>{sw}</span>
          ))}
        </div>
      )}
    </div>
  );
};
