/*INNER COMPONENT*/
import { useEffect, useState, useContext } from "react";
import axios from "axios";
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

export const Product = (props) => {
  /*STATE*/
  const [liked, setLiked] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [cartIndex, setCartIndex] = useState(null);
  /*VARIABLE*/
  const likeURL = "http://localhost:8080/like";
  const login = useContext(Context).loginCon[0];
  const username = useContext(Context).usernameCon[0];
  const [cart, setCart] = useContext(Context).cartCon;
  /*FUNCTION*/

  useEffect(() => {
    checkTheLiked();
    setCart(cartLib.checkTheCart());
  }, []);

  setTimeout(() => {
    setLoaded(true);
  }, 500);

  const checkTheLiked = () => {
    axios
      .get(`${likeURL}?username=${username}`)
      .then((ct) => {
        setLiked(ct.data.dataset);
      })
      .catch((err) => alert(err));
  };

  const addToLiked = (id) => {
    if (login) {
      axios
        .post(likeURL, {
          productId: id,
          username: username,
        })
        .then(() => {
          checkTheLiked();
        });
    } else alert("ابتدا وارد حساب خود شوید");
  };

  useEffect(() => {
    if (login) {
      for (let i = 0; i < cart.length; i++) {
        if (props.card.id === cart[i].product_id) {
          setCartIndex(i);
          setIsInCart(true);
        }
      }
    }
  }, [login, cart]);
  /*JSX*/
  if (loaded)
    return (
      <div className={classes.product}>
        <span className={classes.icons}>
          {liked.some((e) => e.product_id === props.card.id) ? (
            <Favorite
              onClick={() => {
                addToLiked(props.card.id);
              }}
              className={classes.liked}
            />
          ) : (
            <Favorite
              onClick={() => {
                addToLiked(props.card.id);
              }}
              className={classes.notLiked}
            />
          )}

          <div className={classes.addToCart}>
            {isInCart ? (
              <article>
                {cart[cartIndex].number < 2 ? (
                  <span
                    onClick={() =>
                      cartLib.deleteCartHandler(
                        cart[cartIndex].username,
                        cart[cartIndex].product_id
                      )
                    }
                    className={classes.delete}
                  >
                    <Delete className={classes.fillDelete} />
                    <DeleteOutline className={classes.outlineDelete} />
                  </span>
                ) : (
                  <span
                    onClick={() =>
                      cartLib.decreaseCartHandler(
                        cart[cartIndex].username,
                        cart[cartIndex].product_id
                      )
                    }
                    className={classes.minus}
                  >
                    <RemoveCircle className={classes.fillMinus} />
                    <RemoveCircleOutline className={classes.outlineMinus} />
                  </span>
                )}
                <h1 className={classes.productCount}>
                  {cart[cartIndex].number}
                </h1>
                <span
                  onClick={() =>
                    cartLib.increaseCartHandler(
                      cart[cartIndex].username,
                      cart[cartIndex].product_id
                    )
                  }
                  className={classes.add}
                >
                  <AddCircle className={classes.fillAdd} />
                  <AddCircleOutline className={classes.outlineAdd} />
                </span>
              </article>
            ) : (
              <AddShoppingCartIcon
                onClick={() => {
                  cartLib.addToCart(props.card.id);
                }}
                className={classes.i}
              />
            )}
          </div>
        </span>
        <img
          src={`/Images/Product/${props.card.image}`}
          alt={props.card.fa_title}
        />
        <div className={classes.caption}>
          <h3 className={classes.productName}>{props.card.fa_title}</h3>
          <div className={classes.stars}>
            {[...Array(5 - parseInt(props.card.population))].map((x, index) => (
              <Star key={index} className={classes.star} />
            ))}
            {[...Array(parseInt(props.card.population))].map((x, index) => (
              <Star key={index} className={classes.lightStar} />
            ))}
          </div>
          {props.card.existence ? (
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
            {props.card.off ? (
              <div className={classes.priceContainer}>
                <h4 className={classes.price}>
                  {separateLib.separate(
                    props.card.price - props.card.price * (props.card.off / 100)
                  )}{" "}
                  تومان
                </h4>
                <h4 className={classes.priceWithOff}>
                  {separateLib.separate(props.card.price)} تومان
                </h4>
              </div>
            ) : (
              <div className={classes.priceContainer}>
                <h4 className={classes.price}>
                  {separateLib.separate(props.card.price)} تومان
                </h4>
              </div>
            )}
            {props.card.off ? (
              <div className={classes.offContainer}>
                <h4 className={classes.off}>
                  {separateLib.separate(props.card.off)}%
                </h4>
              </div>
            ) : null}
          </span>
        </div>
        <Link className={classes.link} to={`/product/${props.card.id}`}>
          <button>مشاهده جزئیات</button>
        </Link>
      </div>
    );
  else return null;
};
