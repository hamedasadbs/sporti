import React from "react";
import classes from "./TopProduct.module.scss";

const TopProduct = (props) => {
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
        <button className={classes.details}>مشاهده جزئیات</button>
      </aside>
    </>
  );
};

export default TopProduct;
