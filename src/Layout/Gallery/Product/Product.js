/*INNER-COMPONENTS*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
/*CSS*/
import classes from "./Product.module.scss";

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
            <button className={classes.disabled} disabled>
              ناموجود
            </button>
            <Link
              className={classes.link}
              to={`/category/${props.categoryName}/${props.faTitle}`}
            >
              <button className={classes.showDetails}>مشاهده جزئیات</button>
            </Link>
          </div>
        ) : (
          <div className={classes.btn}>
            {isInCart() ? (
              <button className={classes.disabled} disabled>
                موجود در سبد
              </button>
            ) : (
              <button onClick={addToCart} className={classes.addToCart}>
                افزودن به سبد
              </button>
            )}
            <Link
              className={classes.link}
              to={`/category/${props.categoryName}/${props.faTitle}`}
            >
              <button className={classes.showDetails}>مشاهده جزئیات</button>
            </Link>
          </div>
        )}
      </aside>
    </>
  );
};
