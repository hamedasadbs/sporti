import React, { useEffect, useState } from "react";
import classes from "./Products.module.scss";

import axios from "axios";
import Product from "./Product/Product";

const Products = () => {
  const [topProducts, setTopProducts] = useState([]);
  const url = "http://localhost/fantasima/index.php";

  const updateRequest = () => {
    axios
      .post(
        url,
        JSON.stringify({
          method: "popularProducts",
        })
      )
      .then((res) => setTopProducts(res.data));
  };

  useEffect(() => {
    updateRequest();
  }, []);

  return (
    <>
      <aside className={classes.topProducts}>
        <span className={classes.title}>محصولات ویژه</span>
        {topProducts.map((lab) => {
          return (
            <Product
              btn="مشاهده جزئیات"
              label={lab.name}
              price={lab.price}
              image={lab.image}
              key={lab.name}
            />
          );
        })}
      </aside>
    </>
  );
};

export default Products;
