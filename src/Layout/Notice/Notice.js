import React from "react";
import classes from "./Notice.module.scss";

const Notice = (props) => (
  <>
    <table className={classes.table}>
      <tbody>
        <tr>
          <td>
            <label>Notice</label>
            <span>{props.title}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);

export default Notice;
