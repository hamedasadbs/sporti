/*CHILD COMPONENTS*/
import { Header } from "../../layout/header/Header";
import { Advertising } from "./advertising/Advertising";
import { Categories } from "./categories/Categories";
import { ProductList } from "../../layout/productList/ProductList";
import { Footer } from "../../layout/footer/Footer";
/*STYLE*/
import classes from "./Home.module.scss";

export const Home = (props) => {
  return (
    <div className={classes.home}>
      <Header />
      <Advertising />
      <Categories />
      <ProductList title="جدیدترین محصولات" />
      <ProductList title="محصولات منتخب" />
      <Footer />
    </div>
  );
};
