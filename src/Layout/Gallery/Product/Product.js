import React from "react";
import classes from "./Product.module.scss";
import { Link } from "react-router-dom";

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
          <p>{props.faTitle}</p>
          <h2>{props.price} تومان</h2>
        </div>
        {props.exi === false ? (
          <div className={classes.btn}>
            <button className={classes.notActive}>ناموجود</button>
            <Link
              className={classes.link}
              to={`/category/${props.categoryName}/${props.faTitle}`}
            >
              <button className={classes.moreDetails}>مشاهده جزئیات</button>
            </Link>
          </div>
        ) : (
          <div className={classes.btn}>
            <button className={classes.addToCart}>افزودن به سبد</button>
            <Link
              className={classes.link}
              to={`/category/${props.categoryName}/${props.faTitle}`}
            >
              <button className={classes.moreDetails}>مشاهده جزئیات</button>
            </Link>
          </div>
        )}
      </aside>
    </>
  );
};

export default Product;
