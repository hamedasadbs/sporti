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
          method: "category",
        })
      )
      .then((res) => setProductsData(res.data));
  }, []);

  return (
    <>
      <article className={classes.categories}>
        {productsData.map((res) => {
          return (
            <Category
              label={res.label}
              name={res.name}
              image={res.image}
              key={res.name}
            />
          );
        })}
      </article>
    </>
  );
};

export default Categories;
