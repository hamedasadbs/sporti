/*INNER-COMPONENTS*/
import React, { useEffect, useState } from "react";
import axios from "axios";
/*CSS*/
import classes from "./LastProducts.module.scss";
/*ASSETS*/
import Button from "@material-ui/core/Button";

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
          {productsData.map((item) => (
            <div className={classes.image} key={item.image}>
              <img src={`/Images/Product/${item.image}`} alt={item.fa_title} />
              <div className={classes.caption}>
                <h3 className={classes.productName}>{item.fa_title}</h3>
                <h4 className={classes.productPrice}>{item.price} تومان</h4>
              </div>
              <Button variant="contained" color="primary">
                مشاهده جزئیات
              </Button>
            </div>
          ))}
        </main>
      </article>
    </>
  );
};
