/*INNER COMPONENTS*/
import React, { useEffect } from "react";
/*CSS*/
import style from "./infoTable.module.scss";

export const InfoTable = (props) => {
  useEffect(() => {
    const barCharts = document.getElementsByClassName(style.infoTable);
    if (props.mode == "dark") {
      for (let i = 0; i < barCharts.length; i++) {
        barCharts[i].classList.add(style.infoTable_dark);
      }
    } else {
      for (let i = 0; i < barCharts.length; i++) {
        barCharts[i].classList.remove(style.infoTable_dark);
      }
    }
  }, [props.mode]);

  return (
    <main className={style.infoTable}>
      <h1 className={style.title}>
        {props.title} <i className="fa fa-table"></i>
      </h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {props.toples.map((tp) => (
              <th scope="col">{tp}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.records.map((rec) => (
            <tr>
              {rec.map((rc) => (
                <td>{rc}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
