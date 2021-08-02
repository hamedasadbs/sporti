import React from "react";
import classes from "./Product.module.scss";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

const Product = (props) => {
  let moreDetails = "";
  if (props.type == 1) moreDetails = "(جزئیات بیشتر)";

  return (
    <>
      <Link to={`/category/${props.name}`}>
        <div className={classes.product}>
          <div className={classes.label}>{props.label + " " + moreDetails}</div>
          {props.type == 1 && (
            <div className={classes.moreDetails}>
              <button>جزئیات بیشتر</button>
            </div>
          )}
        </div>
      </Link>
    </>
  );
};

export default Product;
