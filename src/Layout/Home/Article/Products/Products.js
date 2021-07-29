import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Products.module.scss";

import Product from "./Product/Product";

const Products = () => {
  const url='http://localhost/fantasima/index.php'
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {

    axios({
      url:url,
      method:'push',
      data:1
    })
    .then(res => setProductsData(res.data));

  },[]);

  return (
    <>
      <div className={classes.products}>
        {productsData.map(res => {
          return <Product label={res.label} type={res.has_details} />;
        })}
      </div>
    </>
  );
};

export default Products;
