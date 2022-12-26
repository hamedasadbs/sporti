/*INNER COMPONENT*/
import { useEffect, useState, useContext } from "react";
import { Context } from "../../../logic/Context";
/*STYLE*/
import classes from "./Product.module.scss";
/*ICON*/
import {
  Favorite,
  Delete,
  DeleteOutline,
  AddCircle,
  AddCircleOutline,
  RemoveCircle,
  RemoveCircleOutline,
} from "@material-ui/icons";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
/*LIBRARY*/
import * as separateLib from "../../../logic/Separate";
import * as cartLib from "../../../logic/Cart";
import * as likedLib from "../../../logic/Liked";
/*MUI*/
import IconButton from "@mui/material/IconButton";

export const Product = (props) => {
  /*STATE*/
  const [loaded, setLoaded] = useState(false);
  /*VARIABLE*/
  const login = useContext(Context).loginCon[0];
  const liked = useContext(Context).likedCon[0];
  const userInfo = useContext(Context).userInfoCon[0];
  const checkTheCart = useContext(Context).checkTheCartCon[0];
  const checkTheLiked = useContext(Context).checkTheLikedCon[0];
  /*FUNCTION*/
  useEffect(() => {
    checkTheLiked();
    checkTheLiked();
  }, []);

  setTimeout(() => {
    setLoaded(true);
  }, 500);

  const addToLikedHandler = () => {
    if (login) {
      likedLib.addToLiked(userInfo.username, props.card.product_id);
      checkTheLiked();
      checkTheLiked();
    } else alert("ابتدا وارد حساب خود شوید");
  };

  const increaseHandler = () => {
    cartLib.increaseCartHandler(userInfo.username, props.card.product_id);
    checkTheCart();
    checkTheCart();
  };

  const decreaseHandler = () => {
    cartLib.decreaseCartHandler(userInfo.username, props.card.product_id);
    checkTheCart();
    checkTheCart();
  };

  const deleteHandler = () => {
    cartLib.deleteCartHandler(userInfo.username, props.card.product_id);
    checkTheCart();
    checkTheCart();
  };

  /*JSX*/
  if (loaded)
    return (
      <div
        className={classes.product}
        style={{ borderBottomWidth: props.id === props.length - 1 && 0 }}
      >
        <span className={classes.icons}>
          {liked.some((e) => e.product_id === props.card.product_id) ? (
            <Favorite onClick={addToLikedHandler} className={classes.liked} />
          ) : (
            <Favorite
              onClick={addToLikedHandler}
              className={classes.notLiked}
            />
          )}
          <div className={classes.addToCart}>
            <article>
              {props.card.number < 2 ? (
                <span onClick={deleteHandler} className={classes.delete}>
                  <Delete className={classes.fillDelete} />
                  <DeleteOutline className={classes.outlineDelete} />
                </span>
              ) : (
                <span onClick={decreaseHandler} className={classes.minus}>
                  <RemoveCircle className={classes.fillMinus} />
                  <RemoveCircleOutline className={classes.outlineMinus} />
                </span>
              )}
              <h1 className={classes.productCount}>{props.card.number}</h1>
              <span onClick={increaseHandler} className={classes.add}>
                <AddCircle className={classes.fillAdd} />
                <AddCircleOutline className={classes.outlineAdd} />
              </span>
            </article>
          </div>
        </span>
        <img src={props.card.image} alt={props.card.fa_title} />
        <div className={classes.caption}>
          <h3 className={classes.productName}>{props.card.fa_title}</h3>
          <ul className={classes.conditions}>
            <li>
              <TaskAltOutlinedIcon
                style={{ color: "green" }}
                className={classes.i}
              />
              گارانتی اصالت و سلامت فیزیکی کالا
            </li>
            <li>
              <FlashOnOutlinedIcon
                style={{ color: "blue" }}
                className={classes.i}
              />
              ارسال پیشتاز
            </li>
            <li>
              <LocalMallOutlinedIcon
                style={{ color: "#f19372" }}
                className={classes.i}
              />
              موجود در انبار اسپورتی
            </li>
            <li>
              <LocalShippingOutlinedIcon
                style={{ color: "red" }}
                className={classes.i}
              />
              ارسال پستی اسپورتی
            </li>
          </ul>
        </div>
        <span className={classes.productDetails}>
          <IconButton className={classes.option}>
            <MoreVertOutlinedIcon className={classes.i} />
          </IconButton>
          {props.card.off ? (
            <div className={classes.priceContainer}>
              <h4 className={classes.price}>
                {separateLib.separate(
                  (props.card.price -
                    props.card.price * (props.card.off / 100)) *
                    props.card.number
                )}{" "}
                <span>تومان</span>
              </h4>
              <h4 className={classes.offPrice}>
                {separateLib.separate(
                  props.card.price * (props.card.off * 0.01) * props.card.number
                )}{" "}
                <span>تومان</span> تخفیف
              </h4>
            </div>
          ) : (
            <div className={classes.priceContainer}>
              <h4 className={classes.price}>
                {separateLib.separate(props.card.price * props.card.number)}{" "}
                <span>تومان</span>
              </h4>
            </div>
          )}
        </span>
      </div>
    );
  else return null;
};
