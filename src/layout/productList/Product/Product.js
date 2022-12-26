/*INNER COMPONENT*/
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../logic/Context";
/*STYLE*/
import classes from "./Product.module.scss";
/*ICON*/
import { Star, Favorite } from "@material-ui/icons";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Delete,
  DeleteOutline,
  AddCircle,
  AddCircleOutline,
  RemoveCircle,
  RemoveCircleOutline,
} from "@material-ui/icons";
/*LIBRARY*/
import * as separateLib from "../../../logic/Separate";
import * as cartLib from "../../../logic/Cart";
import * as likedLib from "../../../logic/Liked";
/*MUI*/
import IconButton from "@mui/material/IconButton";

export const Product = ({ card }) => {
  /*STATE*/
  const [loaded, setLoaded] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [cartIndex, setCartIndex] = useState(null);
  /*VARIABLE*/
  const login = useContext(Context).loginCon[0];
  const setAlert = useContext(Context).alertCon[1];
  const userInfo = useContext(Context).userInfoCon[0];
  const cart = useContext(Context).cartCon[0];
  const liked = useContext(Context).likedCon[0];
  const checkTheCart = useContext(Context).checkTheCartCon[0];
  const checkTheLiked = useContext(Context).checkTheLikedCon[0];
  /*FUNCTION*/
  setTimeout(() => {
    setLoaded(true);
  }, 500);

  const addToLikedHandler = () => {
    if (login) {
      likedLib.addToLiked(userInfo.username, card.id);
      checkTheLiked();
      checkTheLiked();
    } else
      setAlert({
        bool: true,
        text: "ابتدا وارد حساب خود شوید",
        type: "warning",
      });
  };

  useEffect(() => {
    updateCart();
  }, [cart]);

  const updateCart = () => {
    if (login)
      for (let i = 0; i < cart.length; i++) {
        if (card.id === cart[i].product_id) {
          setCartIndex(i);
          setIsInCart(true);
        }
      }
  };

  const addHandler = () => {
    if (login) {
      setAlert({
        bool: true,
        text: "کالا به سبد اضافه شد",
        type: "info",
      });
      cartLib.addToCart(userInfo.username, card.id);
      checkTheCart();
      checkTheCart();
    } else
      setAlert({
        bool: true,
        text: "ابتدا وارد حساب خود شوید",
        type: "warning",
      });
  };

  const increaseHandler = () => {
    cartLib.increaseCartHandler(userInfo.username, cart[cartIndex].product_id);
    checkTheCart();
    checkTheCart();
  };

  const decreaseHandler = () => {
    cartLib.decreaseCartHandler(userInfo.username, cart[cartIndex].product_id);
    checkTheCart();
    checkTheCart();
  };

  const deleteHandler = () => {
    setAlert({
      bool: true,
      text: "کالا از سبد حذف شد",
      type: "info",
    });
    cartLib.deleteCartHandler(userInfo.username, cart[cartIndex].product_id);
    checkTheCart();
    checkTheCart();
    setCartIndex(null);
  };

  /*JSX*/
  if (loaded)
    return (
      <div className={classes.product}>
        <span className={classes.icons}>
          {liked.some((e) => e.product_id === card.id) && login ? (
            <Favorite onClick={addToLikedHandler} className={classes.liked} />
          ) : (
            <Favorite
              onClick={addToLikedHandler}
              className={classes.notLiked}
            />
          )}
          <div className={classes.addToCart}>
            {isInCart && cart[cartIndex] && login ? (
              <article>
                {cart[cartIndex].number < 2 ? (
                  <IconButton
                    onClick={deleteHandler}
                    className={classes.delete}
                  >
                    <Delete className={classes.fillDelete} />
                    <DeleteOutline className={classes.outlineDelete} />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={decreaseHandler}
                    className={classes.minus}
                  >
                    <RemoveCircle className={classes.fillMinus} />
                    <RemoveCircleOutline className={classes.outlineMinus} />
                  </IconButton>
                )}
                <h1 className={classes.productCount}>
                  {cart[cartIndex].number}
                </h1>
                <IconButton onClick={increaseHandler} className={classes.add}>
                  <AddCircle className={classes.fillAdd} />
                  <AddCircleOutline className={classes.outlineAdd} />
                </IconButton>
              </article>
            ) : (
              <IconButton onClick={addHandler}>
                <AddShoppingCartIcon className={classes.i} />
              </IconButton>
            )}
          </div>
        </span>
        <img src={card.image} alt={card.fa_title} />
        <div className={classes.caption}>
          <h3 className={classes.productName}>{card.fa_title}</h3>
          <div className={classes.stars}>
            {[...Array(5 - parseInt(card.population))].map((x, index) => (
              <Star key={index} className={classes.star} />
            ))}
            {[...Array(parseInt(card.population))].map((x, index) => (
              <Star key={index} className={classes.lightStar} />
            ))}
          </div>
          {card.existence ? (
            <h5 className={classes.center}>
              <LocalMallOutlinedIcon className={classes.i} />
              موجود در فروشگاه اسپورتی
            </h5>
          ) : (
            <h5 className={classes.center} style={{ color: "lightgray" }}>
              ناموجود
            </h5>
          )}
          <span className={classes.productPrice}>
            {card.off ? (
              <div className={classes.priceContainer}>
                <h4 className={classes.price}>
                  {separateLib.separate(
                    card.price - card.price * (card.off / 100)
                  )}{" "}
                  <span>تومان</span>
                </h4>
                <h4 className={classes.priceWithOff}>
                  {separateLib.separate(card.price)} <span>تومان</span>
                </h4>
              </div>
            ) : (
              <div className={classes.priceContainer}>
                <h4 className={classes.price}>
                  {separateLib.separate(card.price)} <span>تومان</span>
                </h4>
              </div>
            )}
            {card.off ? (
              <div className={classes.offContainer}>
                <h4 className={classes.off}>
                  {separateLib.separate(card.off)}%
                </h4>
              </div>
            ) : null}
          </span>
        </div>
        <Link className={classes.link} to={`/product/${card.id}`}>
          <button>مشاهده جزئیات</button>
        </Link>
      </div>
    );
  else return null;
};
