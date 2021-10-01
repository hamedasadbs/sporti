/*INNER-COMPONENTS*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
/*CSS*/
import classes from "./LastProducts.module.scss";
/*ASSETS*/
import { Star, Favorite } from "@material-ui/icons";

export const LastProducts = () => {
  /*STATES*/
  const [productsData, setProductsData] = useState([]);
  /*VARIABLES*/
  const url = "http://localhost/bsShop/lastProducts.php";
  /*FUNCTIONS*/
  useEffect(() => {
    axios.post(url).then((res) => setProductsData(res.data));
  }, []);

  return (
    <>
      <article className={classes.lastProducts}>
        <h1 className={classes.title}>آخرین محصولات</h1>
        <main className={classes.imageList}>
          {productsData.map((res) => (
            <div className={classes.image} key={res.image}>
              <span className={classes.icons}>
                <Favorite className={classes.liked} />
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
