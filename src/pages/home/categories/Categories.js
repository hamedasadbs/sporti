/*INNER-COMPONENTS*/
import React, { useState, useEffect } from "react";
import axios from "axios";
/*CSS*/
import classes from "./Categories.module.scss";
/*CHILD-COMPONENTS*/
import { Category } from "./category/Category";

export const Categories = () => {
  /*STATES*/
  const [productsData, setProductsData] = useState([]);
  /*VARIABLES*/
  const url = "http://localhost/bsShop/category.php";
  /*FUNCTIONS*/
  useEffect(() => {
    axios.post(url).then((res) => setProductsData(res.data));
  }, []);

  return (
    <article className={classes.categories}>
      {productsData.map((res, index) => (
        <Category
          faTitle={res.fa_title}
          enTitle={res.en_title}
          image={res.image}
          key={index}
        />
      ))}
    </article>
  );
};
