import React from "react";
import classes from "./TopProduct.module.scss";
import { Link } from "react-router-dom";

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
          <p>{props.faTitle}</p>
          <h2>{props.price} تومان</h2>
        </div>
        <Link
          className={classes.link}
          to={`/category/${props.categoryName}/${props.faTitle}`}
        >
          <button className={classes.details}>مشاهده جزئیات</button>
        </Link>
      </aside>
    </>
  );
};

export default TopProduct;
