import React from "react";
import classes from "./Category.module.scss";
import { Link } from "react-router-dom";

const Category = (props) => (
  <>
    <Link to={`/category/${props.enTitle}`}>
      <div className={classes.category}>
        <img src={`/Images/Category/${props.image}`} alt={props.enTitle} />
        <div className={classes.label}>
          <h1>{props.faTitle}</h1>
        </div>
      </div>
    </Link>
  </>
);

export default Category;
