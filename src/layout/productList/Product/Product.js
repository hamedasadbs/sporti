/*INNER-COMPONENTS*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
/*CSS*/
import classes from "./Product.module.scss";
/*ASSETS*/
import { Star, Favorite } from "@material-ui/icons";
/*CONFIGURATION*/
import * as separateLib from "../../../logic/Separate";

export const Product = (props) => {
  /*STATES*/
  const [liked, setLiked] = useState([]);
  const [loaded, setLoaded] = useState(false);
  /*VARIABLES*/
  const likedURL = "http://localhost/bsShop/liked.php";
  const isOnline = useSelector((state) => state.cookieReducer.isOnline);
  const accountName = useSelector((state) => state.cookieReducer.accountName);
  /*FUNCTIONS*/
  useEffect(() => {
    checkTheLiked();
  }, []);

  setTimeout(() => {
    setLoaded(true);
  }, 500);

  const checkTheLiked = () => {
    axios
      .post(
        likedURL,
        JSON.stringify({
          method: "checkTheLiked",
          username: accountName,
        })
      )
      .then((res) => setLiked(res.data));
  };

  const addToLiked = (id) => {
    if (isOnline) {
      axios
        .post(
          likedURL,
          JSON.stringify({
            method: "addToLiked",
            username: accountName,
            productId: id,
          })
        )
        .then(() => {
          checkTheLiked();
        });
    } else alert("ابتدا وارد حساب خود شوید");
  };

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

          <div className={classes.stars}>
            {[...Array(5 - parseInt(props.card.population))].map((x, index) => (
              <Star key={index} className={classes.star} />
            ))}
            {[...Array(parseInt(props.card.population))].map((x, index) => (
              <Star key={index} className={classes.lightStar} />
            ))}
          </div>
        </span>
        <img
          src={`/Images/Product/${props.card.image}`}
          alt={props.card.fa_title}
        />
        <div className={classes.caption}>
          <h3 className={classes.productName}>{props.card.fa_title}</h3>
          <h4 className={classes.productPrice}>
            {separateLib.separate(props.card.price)} تومان
          </h4>
        </div>
        <Link
          className={classes.link}
          to={`/category/${props.card.category}/${props.card.fa_title}`}
        >
          <button>مشاهده جزئیات</button>
        </Link>
      </div>
    );
  else return null;
};
