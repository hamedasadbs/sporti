import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Categories.module.scss";

import Category from "./Category/Category";

const Categories = () => {
  const url = "http://localhost/bsShop/category.php";
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios.post(url).then((res) => setProductsData(res.data));
  }, []);

  return (
    <>
      <article className={classes.categories}>
        {productsData.map((res) => {
          return (
            <Category
              faTitle={res.fa_title}
              enTitle={res.en_title}
              image={res.image}
              key={res.id}
            />
          );
        })}
      </article>
    </>
  );
};

export default Categories;
