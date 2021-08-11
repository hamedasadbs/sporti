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
          method: "select",
          table: "products",
          orderBy: "population",
          orderByType: "DESC",
          limit: 3,
        })
      )
      .then((res) => setTopProducts(res.data));
  };

  useEffect(() => {
    updateRequest();
  }, []);

  return (
    <>
      <div className={classes.topProducts}>
        <span className={classes.title}>محصولات ویژه</span>
        {topProducts.map((lab) => {
          return (
            <Product
              btn="مشاهده جزئیات"
              label={lab.name}
              price={lab.price}
              image={lab.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
