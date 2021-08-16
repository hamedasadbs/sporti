import React from "react";
import classes from "./Category.module.scss";
import { Link } from "react-router-dom";

const Category = (props) => (
  <>
    <Link to={`/category/${props.name}`}>
      <div className={classes.category}>
        <img src={`/Images/Category/${props.image}`} alt={props.image} />
        <div className={classes.label}>{props.label}</div>
      </div>
    </Link>
  </>
);

export default Category;
