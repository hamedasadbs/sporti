import React from "react";
import classes from "./Category.module.scss";
import { Link, BrowserRouter as Router } from "react-router-dom";

import img from "../../../../../Assets/Images/allSports.png";

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
