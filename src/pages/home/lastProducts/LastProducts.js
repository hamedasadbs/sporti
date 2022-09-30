/*INNER-COMPONENTS*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
/*CSS*/
import classes from "./LastProducts.module.scss";
/*ASSETS*/
import { Star, Favorite } from "@material-ui/icons";
/*CONFIGURATION*/
import * as separateLib from "../../../logic/Separate";

import InfiniteCarousel from "react-leaf-carousel";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const LastProducts = (props) => {
  /*STATES*/
  const [productsData, setProductsData] = useState([]);
  const [liked, setLiked] = useState([]);

  const [loaded, setLoaded] = useState(false);
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
      <article className={classes.lastProducts}>
        <h1 className={classes.title}>آخرین محصولات</h1>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          nextArrow={
            <div
              className={classes.arrow}
              style={{
                position: "absolute",
                right: -30,
                top: 250,
              }}
            >
              <ArrowForwardIosIcon
                style={{ fontSize: 50, color: "rgb(37, 37, 37)" }}
              />
            </div>
          }
          prevArrow={
            <div
              className={classes.arrow}
              style={{
                position: "absolute",
                left: -30,
                top: 250,
              }}
            >
              <ArrowBackIosNewIcon
                style={{ fontSize: 50, color: "rgb(37, 37, 37)" }}
              />
            </div>
          }
          showSides={false}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice={true}
        >
          {productsData.map((res, index) => (
            <div className={classes.card} key={index}>
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
                  {[...Array(5 - parseInt(res.population))].map((x, index) => (
                    <Star key={index} className={classes.star} />
                  ))}
                  {[...Array(parseInt(res.population))].map((x, index) => (
                    <Star key={index} className={classes.lightStar} />
                  ))}
                </div>
              </span>
              <img src={`/Images/Product/${res.image}`} alt={res.fa_title} />
              <div className={classes.caption}>
                <h3 className={classes.productName}>{res.fa_title}</h3>
                <h4 className={classes.productPrice}>
                  {separateLib.separate(res.price)} تومان
                </h4>
              </div>
              <Link
                className={classes.link}
                to={`/category/${res.category}/${res.fa_title}`}
              >
                <button>مشاهده جزئیات</button>
              </Link>
            </div>
          ))}
        </InfiniteCarousel>
      </article>
    );
  else return null;
};
