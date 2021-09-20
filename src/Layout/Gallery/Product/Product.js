/*INNER-COMPONENTS*/
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
/*CSS*/
import classes from "./Product.module.scss";
/*ASSETS*/
import Button from "@material-ui/core/Button";

export const Product = (props) => {
  /*VARIABLES*/
  const url = "http://localhost/bsShop/cart.php";
  /*FUNCTIONS*/
  const addToCart = () => {
    if (props.isOnline) {
      axios
        .post(
          url,
          JSON.stringify({
            method: "addToCart",
            username: props.accountName,
            productId: props.id,
          })
        )
        .then((res) => alert(res.data));
    } else alert("ابتدا وارد حساب خود شوید");
  };

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
              to={`/category/${props.categoryName}/${props.faTitle}`}
            >
              <Button variant="contained" color="primary">
                مشاهده جزئیات
              </Button>
            </Link>
          </div>
        ) : (
          <div className={classes.btn}>
            <Button onClick={addToCart} variant="contained" color="secondary">
              افزودن به سبد
            </Button>
            <Link
              className={classes.link}
              to={`/category/${props.categoryName}/${props.faTitle}`}
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
