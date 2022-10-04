/*INNER COMPONENT*/
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../logic/Context";
/*STYLE*/
import classes from "./Detail.module.scss";
/*CHILD COMPONENT*/
import { Dropdown } from "../../components/dropdown/Dropdown";

export const Detail = ({ product }) => {
  /*STATE*/
  const [isDescDisplay, setIsDescDisplay] = useState(false);
  const [isFeaturesDisplay, setIsFeaturesDisplay] = useState(true);
  const [isCommentsDisplay, setIsCommentsDisplay] = useState(false);
  const [number, setNumber] = useState(product.existence);
  /*VARIABLE*/
  const url = "http://localhost/bsShop/cart.php";
  const login = useContext(Context).loginCon[0];
  const username = useContext(Context).usernameCon[0];
  const cart = useContext(Context).cartCon[0];
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
    if (login) {
      axios
        .post(
          url,
          JSON.stringify({
            method: "addToCart",
            username: username,
            productId: product.id,
          })
        )
        .then(() => {
          // product.checkTheCart();
          setNumber((state) => state - 1);
        });
    } else alert("ابتدا وارد حساب خود شوید");
  };

  const isInCart = () => {
    let isInCart = false;
    cart.map((res) => {
      if (res.product_id === product.id) {
        isInCart = true;
      }
    });
    return isInCart;
  };

  /*JSX*/
  return (
    <div className={classes.detail}>
      <h1 className={classes.title}>{product.faTitle}</h1>
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
          <Dropdown
            dis={isDescDisplay}
            type="description"
            desc={product.desc}
          />
          <Dropdown
            dis={isFeaturesDisplay}
            price={product.price}
            type="features"
            ty={product.type}
            kind={product.kind}
            size={product.size}
          />
          <Dropdown
            dis={isCommentsDisplay}
            type="comments"
            desc={product.desc}
          />
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
            <img
              src={`/Images/Product/${product.image}`}
              alt={product.faTitle}
            />
          </div>
          <div className={classes.secondary}>
            <img
              src={`/Images/Product/${product.image}`}
              alt={product.faTitle}
            />
            <img
              src={`/Images/Product/${product.image}`}
              alt={product.faTitle}
            />
            <img
              src={`/Images/Product/${product.image}`}
              alt={product.faTitle}
            />
            <img
              src={`/Images/Product/${product.image}`}
              alt={product.faTitle}
            />
          </div>
        </div>
      </article>
    </div>
  );
};
