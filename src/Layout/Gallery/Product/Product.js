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
          <p>{props.label}</p>
          <h2>{props.price} تومان</h2>
        </div>
        {props.exi === false ? (
          <button className={classes.notExistBtn}>ناموجود</button>
        ) : (
          <div className={classes.existBtn}>
            <button className={classes.addToCart}>افزودن به سبد</button>
            <button className={classes.moreDetails}>
              <Link to={`/category/${props.url}/${props.label}`}>
                مشاهده جزئیات
              </Link>
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default Product;
