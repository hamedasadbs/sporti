import React, {useEffect, useState} from "react";
import classes from "./TopProducts.module.scss";

import axios from "axios";
import TopProduct from "./TopProduct/TopProduct";

const TopProducts = () => {
  const [topProducts, setTopProducts] = useState([]);
  const url='http://localhost/fantasima/index.php'

  useEffect(() => {
    
    axios.post(url,JSON.stringify({
      method:'select',
      table:'products',
      type:'conditional'
    }))
    .then(res => setTopProducts(res.data));
  },[]);

  return (
    <>
      <div className={classes.topProducts}>
        <span className={classes.title}>محصولات ویژه</span>
        {topProducts.map((lab) => {
          return <TopProduct label={lab.text} price={lab.price} />;
        })}
      </div>
    </>
  );
};

export default TopProducts;
