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
  const url = "http://localhost:8080/category";
  /*FUNCTIONS*/
  useEffect(() => {
    axios.get(url).then((res) => {
      setProductsData(res.data.cat);
    });
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
