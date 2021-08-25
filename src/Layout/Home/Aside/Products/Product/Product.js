import React from "react";
import classes from "./Product.module.scss";

const Product = (props) => {
  return (
    <>
      <aside className={classes.picture}>
        <div className={classes.mainImage}>
          <img
            src={`/Images/Product/${props.image}`}
            alt={"image/" + props.image}
            width="533"
            height="300"
          />
        </div>
        <div className={classes.caption}>
          <p>{props.label}</p>
          <h2>{props.price} تومان</h2>
        </div>
        <button
          {...(props.btn === "ناموجود"
            ? { className: classes.detailsInactive }
            : { className: classes.detailsActive })}
        >
          {props.btn}
        </button>
      </aside>
    </>
  );
};

export default Product;
