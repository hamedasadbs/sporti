import React from "react";
import classes from "./Category.module.scss";
import { Link, BrowserRouter as Router } from "react-router-dom";

import img from "../../../../../Assets/Images/allSports.png";

const Category = (props) => {
  const category =
    props.type == 0 ? (
      <Link to={`/category/${props.name}`}>
        <div className={classes.category}>
          <img src={`/${props.image}`} alt={props.image} />
          <div className={classes.label}>{props.label}</div>
        </div>
      </Link>
    ) : (
      <Link to={`/advanced-search/${props.name}`}>
        <div className={classes.category}>
          <img src={img} alt="categoryImage" />
          <div className={classes.label}>
            {props.label + " (با طرح دلخواه)"}
          </div>
        </div>
      </Link>
    );

  return <>{category}</>;
};

export default Category;
