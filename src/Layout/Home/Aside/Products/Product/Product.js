import React from "react";
import classes from "./Product.module.scss";

const Product = (props) => {
  return (
    <>
      <div className={classes.picture}>
        <div className={classes.mainImage}>
          <img
            src={`/${props.image}`}
            alt={"image/" + props.image}
            width="533"
            height="300"
          />
        </div>
        <div className={classes.caption}>
          <h2>{props.price} تومان</h2>
          <p>{props.label}</p>
        </div>
        <button
          {...(props.btn == "ناموجود"
            ? { className: classes.detailsInactive }
            : { className: classes.detailsActive })}
        >
          {props.btn}
        </button>
      </div>
    </>
  );
};

export default Product;
