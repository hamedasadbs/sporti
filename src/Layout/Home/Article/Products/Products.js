import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Products.module.scss";

import Product from "./Product/Product";

const Products = () => {
  const url = "http://localhost/fantasima/index.php";
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios
      .post(
        url,
        JSON.stringify({
          method: "select",
          table: "category",
          type: "normal",
        })
      )
      .then((res) => setProductsData(res.data));
  }, []);

  return (
    <>
      <div className={classes.products}>
        {productsData.map((res) => {
          return (
            <Product label={res.label} type={res.has_details} name={res.name} />
          );
        })}
      </div>
    </>
  );
};

export default Products;
