/*INNER-COMPONENTS*/
import React from "react";
import { Link } from "react-router-dom";
/*CSS*/
import classes from "./Category.module.scss";

export const Category = (props) => (
  <Link className={classes.category} to={`/category/${props.enTitle}`}>
    <img src={`/Images/Category/${props.image}`} alt={props.enTitle} />
    <div className={classes.label}>
      <h1>{props.faTitle}</h1>
    </div>
  </Link>
);
