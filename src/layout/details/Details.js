/*INNER COMPONENT*/
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
/*STYLE*/
import classes from "./Details.module.scss";
/*CHILD COMPONENT*/
import { Dropdown } from "../../tool/dropdown/Dropdown";

export const Details = (props) => {
  /*STATE*/
  const [isDescDisplay, setIsDescDisplay] = useState(false);
  const [isFeaturesDisplay, setIsFeaturesDisplay] = useState(true);
  const [isCommentsDisplay, setIsCommentsDisplay] = useState(false);
  const [number, setNumber] = useState(props.exi);
  /*VARIABLE*/
  const url = "http://localhost/bsShop/cart.php";
  const isOnline = useSelector((state) => state.isOnline);
  const accountName = useSelector((state) => state.accountName);
  const cart = props.cart;
  /*FUNCTION*/
  const descriptionHandler = () => {
    setIsFeaturesDisplay(false);
    setIsCommentsDisplay(false);
    setIsDescDisplay(true);
  };
  const featuresHandler = () => {
    setIsDescDisplay(false);
    setIsCommentsDisplay(false);
    setIsFeaturesDisplay(true);
  };
  const commentsHandler = () => {
    setIsDescDisplay(false);
    setIsFeaturesDisplay(false);
    setIsCommentsDisplay(true);
  };

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
  /*JSX*/
  return (
    <div className={classes.details}>
      <h1 className={classes.title}>{props.faTitle}</h1>
      <article>
        <div className={classes.extraInfos}>
          <div className={classes.tabs}>
            <button
              onClick={commentsHandler}
              {...(isCommentsDisplay === true && {
                className: classes.activeTab,
              })}
            >
              نظرات
            </button>
            <button
              onClick={descriptionHandler}
              {...(isDescDisplay === true && {
                className: classes.activeTab,
              })}
            >
              توضیحات
            </button>
            <button
              onClick={featuresHandler}
              {...(isFeaturesDisplay === true && {
                className: classes.activeTab,
              })}
            >
              مشخصات
            </button>
          </div>
          <Dropdown dis={isDescDisplay} type="description" desc={props.desc} />
          <Dropdown
            dis={isFeaturesDisplay}
            price={props.price}
            type="features"
            ty={props.type}
            kind={props.kind}
            size={props.size}
          />
          <Dropdown dis={isCommentsDisplay} type="comments" desc={props.desc} />
          {number > 0 ? (
            isInCart() ? (
              <button onClick={addToCart} className={classes.addToCart}>
                موجود در سبد (افزودن)
              </button>
            ) : (
              <button onClick={addToCart} className={classes.addToCart}>
                افزودن به سبد
              </button>
            )
          ) : (
            <button className={classes.disabled} disabled>
              ناموجود
            </button>
          )}
        </div>
        <div className={classes.images}>
          <div className={classes.primary}>
            <img src={`/Images/Product/${props.image}`} alt={props.faTitle} />
          </div>
          <div className={classes.secondary}>
            <img src={`/Images/Product/${props.image}`} alt={props.faTitle} />
            <img src={`/Images/Product/${props.image}`} alt={props.faTitle} />
            <img src={`/Images/Product/${props.image}`} alt={props.faTitle} />
            <img src={`/Images/Product/${props.image}`} alt={props.faTitle} />
          </div>
        </div>
      </article>
    </div>
  );
};
