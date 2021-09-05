import React, { useEffect, useState } from "react";
import classes from "./TopProducts.module.scss";

import axios from "axios";
import TopProduct from "./TopProduct/TopProduct";

const TopProducts = () => {
  const [topProducts, setTopProducts] = useState([]);
  const url = "http://localhost/bsShop/popularProducts.php";

  useEffect(() => {
    axios.post(url).then((res) => setTopProducts(res.data));
  }, []);

  return (
    <>
      <aside className={classes.topProducts}>
        <h1 className={classes.title}>محصولات ویژه</h1>
        <main>
          {topProducts.map((lab) => {
            return (
              <TopProduct
                faTitle={lab.fa_title}
                price={lab.price}
                image={lab.image}
                categoryName={lab.category}
                key={lab.id}
              />
            );
          })}
        </main>
      </aside>
    </>
  );
};

export default TopProducts;
