import React, { useEffect, useState } from "react";
import classes from "./Products.module.scss";

import axios from "axios";
import Product from "./Product/Product";

const Products = (props) => {
  const [topProducts, setTopProducts] = useState([]);
  const [gallery, setGallery] = useState([]);
  const url = "http://localhost/fantasima/index.php";

  useEffect(() => {
    if (props.type == "topProducts") {
      axios
        .post(
          url,
          JSON.stringify({
            method: "select",
            table: "products",
            orderBy: "population",
            orderByType: 'DESC',
            limit: 3
          })
        )
        .then((res) => setTopProducts(res.data));
    } else {
      axios
        .post(
          url,
          JSON.stringify({
            method: "select",
            table: "products",
            condition: props.name,
            orderBy:'id',
            orderByType:'DESC'
          })
        )
        .then((res) => setGallery(res.data));
    }
  }, []);

  const products =
    props.type == "topProducts" ? (
      <div className={classes.topProducts}>
        <span className={classes.title}>محصولات ویژه</span>
        {topProducts.map((lab) => {
          return (
            <Product btn="مشاهده جزئیات" label={lab.name} price={lab.price} />
          );
        })}
      </div>
    ) : (
      <div className={classes.gallery}>
        <span className={classes.title}>{props.label}</span>
        {gallery.map((lab) => {
          return (
            <Product
              btn="افزودن به سبد خرید"
              label={lab.name}
              price={lab.price}
            />
          );
        })}
      </div>
    );

  return <>{products}</>;
};

export default Products;
