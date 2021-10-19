/*INNER-COMPONENTS*/
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
/*CSS*/
import classes from "./Product.module.scss";

export const Product = (props) => {
  /*VARIABLES*/
  const url = "http://localhost/bsShop/cart.php";
  const isOnline = useSelector((state) => state.isOnline);
  const accountName = useSelector((state) => state.accountName);
  const cart = props.cart;
  const [number, setNumber] = useState(props.exi);
  /*FUNCTIONS*/
  const addToCart = () => {
    if (isOnline) {
      axios
        .post(
          url,
          JSON.stringify({
            method: "addToCart",
            username: accountName,
            productId: props.id,
          })
        )
        .then(() => {
          props.checkTheCart();
          setNumber((state) => state - 1);
        });
    } else alert("ابتدا وارد حساب خود شوید");
  };

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
          {number <= 5 && number > 0 && (
            <h3>تنها {number} عدد در انبار باقی مانده است</h3>
          )}
        </div>
        {number <= 0 ? (
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
              <button onClick={addToCart} className={classes.addToCart}>
                موجود در سبد (افزودن)
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
