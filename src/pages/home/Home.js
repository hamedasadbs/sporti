/*CHILD COMPONENTS*/
import { Advertising } from "./advertising/Advertising";
import { Categories } from "./categories/Categories";
import { ProductList } from "../../layout/productList/ProductList";
/*STYLE*/
import classes from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={classes.home}>
      <Advertising />
      <Categories />
      <ProductList title="جدیدترین محصولات" />
      <ProductList title="محصولات منتخب" />
    </div>
  );
};
