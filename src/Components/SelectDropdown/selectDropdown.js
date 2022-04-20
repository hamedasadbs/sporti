/*inner components*/
import { useState, useEffect } from "react";
import axios from "axios";
/*css*/
import style from "./selectDropdown.module.scss";
/*child components*/
import * as dark from "../../Middleware/Library/darkMode";

export const SelectDropdown = (props) => {
  /*states*/
  const [softwares, setSoftwares] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [sw, setSW] = useState(null);
  /*dark mode*/
  useEffect(() => {
    dark.darkMode(style.select, style.select_dark, props.darkMode);
  }, [props.darkMode]);
  /*send request*/
  useEffect(() => {
    axios({
      method: "get",
      url: `http://10.42.0.72:44351/api/Software/Softwares`,
    }).then((res) => {
      setSoftwares(res.data.result);
      setSW(res.data.result[0]);
    });
  }, []);
  /*initialize options*/
  window.onclick = function (e) {
    if (e.target.nodeName !== "BUTTON") {
      setShowOptions(false);
    }
  };
  /*display option*/
  const showOptionsHandler = () => {
    if (showOptions) setShowOptions(false);
    else setShowOptions(true);
  };
  /*select options*/
  const selectHandler = (s) => {
    setSW(s.target.innerHTML);
    setShowOptions(false);
    props.setSoftware(s.target.innerHTML);
  };
  /*render component*/
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
