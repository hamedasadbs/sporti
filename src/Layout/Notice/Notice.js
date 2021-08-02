import React from "react";
import classes from "./Notice.module.scss";

const Notice = (props) => (
  <>
    <table className={classes.table}>
      <tbody>
        <tr>
          Notice
          <span>{props.title}</span>
        </tr>
      </tbody>
    </table>
  </>
);

export default Notice;
