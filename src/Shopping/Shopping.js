import React, { useState, useEffect } from "react";
import classes from "./Shopping.module.scss";

import ImageSource2 from "../Assets/Images/s2.jpeg";

import LastProducts from "../Layout/Home/Main/LastProducts/LastProducts";
import axios from "axios";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

const Shopping = () => {
  const [priceValue, setPriceValue] = useState(0);
  const [shoppings, setShoppings] = useState([]);

  useEffect(() => {
    axios
      .get("./test.json")
      .then((res) => {
        const shoppings = res.data.shoppings;
        setShoppings(shoppings);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const changePriceHandler = (event) => {
    setPriceValue({ priceValue: event.target.value });
    const demo = document.getElementById("demo");
    demo.innerHTML = event.target.value;
  };

  let picLength = 0;
  const picture = shoppings.map((pic) => {
    return (
      <Link to={`/ShoppingDetails?id=${pic.id}`} key={pic.id}>
        <div className={classes.picture}>
          <div className={classes.mainImage}>
            <img
              src={ImageSource2}
              alt="Cinque Terre"
              width="533"
              height="300"
            />
          </div>
          <div className={classes.caption}>
            <div className={classes.star}>
              <h2>{pic.title}</h2>
            </div>
            <p className={classes.price}>تومان {pic.price}</p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <>
      <LastProducts />
      {/*<section className={classes.shop}>
                <div className={classes.background}></div>
                <div className={classes.mainShop}>
                    <main className={classes.filter}>
                        <div className={classes.searchButton}>
                            <button>جستجو</button>
                        </div>
                        <div className={classes.search}>
                            <label>جستجو</label>
                            <div className={classes.searchInput}>
                                <input type="search" placeholder='جستجو براساس نام' />
                                <i className='fa fa-search'></i>
                            </div>
                        </div>
                        <div className={classes.productDegree}>
                            <label>درجه محصول</label>
                            <select name="productDegree">
                                <option value="all states">تمام حالت</option>
                                <option value="all states">تمام حالت</option>
                                <option value="all states">تمام حالت</option>
                                <option value="all states">تمام حالت</option>
                            </select>
                        </div>
                        <div className={classes.price}>
                            <label>قیمت (تومان)</label>
                            <div className={classes.slideContainer}>
                                <input onChange={changePriceHandler} type="range" min="0" max="120000000" value={priceValue} />
                                <p><span id="demo">0</span></p>
                            </div>
                        </div>
                    </main>
                    <section className={classes.categories}>
                        <ul>
                            <li className={classes.disabled}>
                                <label className={classes.disabled}>دسته بندی</label>
                            </li>
                            <li>
                                <label>فلایت</label>
                                <img src={ImageSource2} />
                            </li>
                            <li>
                                <label>شفت</label>
                                <img src={ImageSource2} />
                            </li>
                            <li>
                                <label>دارت</label>
                                <img src={ImageSource2} />
                            </li>
                            <li>
                                <label>تخته</label>
                                <img src={ImageSource2} />
                            </li>
                        </ul>
                    </section>
                    <menu className={classes.gallery}>
                        {picture}
                    </menu>
                </div>
            </section>*/}
    </>
  );
};

export default Shopping;
