import React from "react";
import classes from "./Product.module.scss";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

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
            <Button variant="outlined" disabled>
              ناموجود
            </Button>
            <Link
              className={classes.link}
              to={`/${props.categoryName}/${props.faTitle}`}
            >
              <Button variant="contained" color="primary">
                مشاهده جزئیات
              </Button>
            </Link>
          </div>
        ) : (
          <div className={classes.btn}>
            <Button variant="contained" color="secondary">
              افزودن به سبد
            </Button>
            <Link
              className={classes.link}
              to={`/${props.categoryName}/${props.faTitle}`}
            >
              <Button variant="contained" color="primary">
                مشاهده جزئیات
              </Button>
            </Link>
          </div>
        )}
      </aside>
    </>
  );
};

export default Product;
