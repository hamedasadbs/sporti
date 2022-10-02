/*INNER COMPONENT*/
import { useState, useEffect } from "react";
import axios from "axios";
/*STYLE*/
import classes from "./Categories.module.scss";
/*CHILD COMPONENT*/
import { Category } from "./category/Category";

export const Categories = () => {
  /*STATE*/
  const [productsData, setProductsData] = useState([]);
  /*VARIABLE*/
  const url = "http://localhost:8080/category";
  /*FUNCTION*/
  useEffect(() => {
    axios.get(url).then((res) => {
      setProductsData(res.data.cat);
    });
  }, []);
  /*JSX*/
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
