import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Categories.module.scss";

import Category from "./Category/Category";

const Categories = () => {
  const url = "http://localhost/fantasima/index.php";
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios
      .post(
        url,
        JSON.stringify({
          method: "select",
          table: "category",
          orderByType: "DESC",
        })
      )
      .then((res) => setProductsData(res.data));
  }, []);

  return (
    <>
      <div className={classes.categories}>
        {productsData.map((res) => {
          return (
            <Category label={res.label} name={res.name} image={res.image} />
          );
        })}
      </div>
    </>
  );
};

export default Categories;
