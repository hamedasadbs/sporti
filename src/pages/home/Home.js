/*INNER COMPONENTS*/
import { useEffect, useState } from "react";
import axios from "axios";
/*CHILD COMPONENTS*/
import { Advertising } from "./advertising/Advertising";
import { Categories } from "./categories/Categories";
import { ProductList } from "../../layout/productList/ProductList";
/*STYLE*/
import classes from "./Home.module.scss";

export const Home = () => {
  /*STATE*/
  const [products, setProducts] = useState([]);
  /*FUNCTION*/
  useEffect(() => {
    axios
      .post("http://localhost:8080/products")
      .then((res) => setProducts(res.data.pro));
  }, []);
  return (
    <div className={classes.home}>
      <Advertising />
      <Categories />
      <ProductList products={products} title="جدیدترین محصولات" />
      <ProductList products={products} title="محصولات منتخب" />
    </div>
  );
};
