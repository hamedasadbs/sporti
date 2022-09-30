/*CHILD COMPONENTS*/
import { Header } from "../../layout/header/Header";
import { Advertising } from "./advertising/Advertising";
import { Categories } from "./categories/Categories";
import { LastProducts } from "./lastProducts/LastProducts";
import { Footer } from "../../layout/footer/Footer";
/*STYLE*/
import classes from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={classes.home}>
      <Header />
      <Advertising />
      <Categories />
      <LastProducts />
      <Footer />
    </div>
  );
};
