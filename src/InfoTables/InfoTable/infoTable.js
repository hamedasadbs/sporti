/*INNER COMPONENTS*/
import React, { useEffect } from "react";
/*CSS*/
import style from "./infoTable.module.scss";

export const InfoTable = (props) => {
  useEffect(() => {
    const infoTable = document.getElementsByClassName(style.infoTable);
    if (props.darkMode == 1) {
      for (let i = 0; i < infoTable.length; i++) {
        infoTable[i].classList.add(style.infoTable_dark);
      }
    } else {
      for (let i = 0; i < infoTable.length; i++) {
        infoTable[i].classList.remove(style.infoTable_dark);
      }
    }
  }, [props.darkMode]);

  return (
    <main className={style.infoTable}>
      <h1 className={style.title}>
        {props.title} <i className="fa fa-table"></i>
      </h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {props.toples.map((tp, index) => (
              <th scope="col" key={index}>
                {tp}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.records.map((rec, index) => (
            <tr key={index}>
              {rec.map((rc, index) => (
                <td key={index}>{rc}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
