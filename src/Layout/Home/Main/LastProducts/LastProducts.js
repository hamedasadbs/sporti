/*INNER-COMPONENTS*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
/*CSS*/
import classes from "./LastProducts.module.scss";
/*ASSETS*/
import { Star, Favorite } from "@material-ui/icons";

export const LastProducts = (props) => {
  /*STATES*/
  const [productsData, setProductsData] = useState([]);
  const [liked, setLiked] = useState([]);
  /*VARIABLES*/
  const url = "http://localhost/bsShop/lastProducts.php";
  const likedURL = "http://localhost/bsShop/liked.php";
  const isOnline = useSelector((state) => state.cookieReducer.isOnline);
  const accountName = useSelector((state) => state.cookieReducer.accountName);
  /*FUNCTIONS*/
  useEffect(() => {
    axios.post(url).then((res) => setProductsData(res.data));
    checkTheLiked();
  }, []);

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

  return (
    <>
      <article className={classes.lastProducts}>
        <h1 className={classes.title}>آخرین محصولات</h1>
        <main className={classes.imageList}>
          {productsData.map((res) => (
            <div className={classes.image} key={res.image}>
              <span className={classes.icons}>
                {liked.some((e) => e.product_id === res.id) ? (
                  <Favorite
                    onClick={() => {
                      addToLiked(res.id);
                    }}
                    className={classes.liked}
                  />
                ) : (
                  <Favorite
                    onClick={() => {
                      addToLiked(res.id);
                    }}
                    className={classes.notLiked}
                  />
                )}

                <div className={classes.stars}>
                  {[...Array(5 - parseInt(res.population))].map((x) => (
                    <Star className={classes.star} />
                  ))}
                  {[...Array(parseInt(res.population))].map((x) => (
                    <Star className={classes.lightStar} />
                  ))}
                </div>
              </span>
              <img src={`/Images/Product/${res.image}`} alt={res.fa_title} />
              <div className={classes.caption}>
                <h3 className={classes.productName}>{res.fa_title}</h3>
                <h4 className={classes.productPrice}>{res.price} تومان</h4>
              </div>
              <Link
                className={classes.link}
                to={`/category/${res.category}/${res.fa_title}`}
              >
                <button>مشاهده جزئیات</button>
              </Link>
            </div>
          ))}
        </main>
      </article>
    </>
  );
};
