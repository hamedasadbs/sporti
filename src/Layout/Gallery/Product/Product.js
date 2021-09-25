/*INNER-COMPONENTS*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
/*CSS*/
import classes from "./Product.module.scss";
/*ASSETS*/
import Button from "@material-ui/core/Button";

export const Product = (props) => {
  /*STATES*/
  const [cart, setCart] = useState([]);
  /*VARIABLES*/
  const url = "http://localhost/bsShop/cart.php";
  const cartURL = "http://localhost/bsShop/cart.php";
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
        .then((res) => alert(res.data))
        .then(() => {
          checkTheCart();
          props.checkTheCart();
        });
    } else alert("ابتدا وارد حساب خود شوید");
  };

  const checkTheCart = () => {
    axios
      .post(
        cartURL,
        JSON.stringify({
          method: "checkTheCart",
          username: props.accountName,
        })
      )
      .then((res) => setCart(res.data));
  };

  useEffect(() => {
    checkTheCart();
  }, []);

  const isInCart = () => {
    let isInCart = false;
    cart.map((res) => {
      if (res.product_id === props.id) {
        isInCart = true;
      }
    });
    return isInCart;
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
            {isInCart() ? (
              <Button variant="outlined" disabled>
                موجود در سبد
              </Button>
            ) : (
              <Button onClick={addToCart} variant="contained" color="secondary">
                افزودن به سبد
              </Button>
            )}
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
