import React, { useState, useEffect } from "react";
import classes from "./LastProducts.module.scss";
import "./js/lightslider";
import "./css/lightslider.css";

import axios from "axios";
import $ from "jquery";

const LastProduct = () => {
  const [items, setItems] = useState(4);
  const url = "http://localhost/fantasima/index.php";
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios
      .post(
        url,
        JSON.stringify({
          method: "select",
          table: "products",
          orderBy: "id",
          orderByType: "DESC",
        })
      )
      .then((res) => setProductsData(res.data));

    checkScreenSize();
  }, []);

  $(document).ready(function () {
    $("#content-slider").lightSlider({
      item: items,
    });
    $("#image-gallery").lightSlider({
      onSliderLoad: function () {
        $("#image-gallery").removeClass("cS-hidden");
      },
    });
  });

  const normal = window.matchMedia(
    "(max-width: 1800px) and (min-width: 1300px)"
  );
  const big = window.matchMedia("(max-width: 1300px) and (min-width: 1005px)");
  const medium = window.matchMedia(
    "(max-width: 1005px) and (min-width: 705px)"
  );
  const small = window.matchMedia("(max-width: 705px) and (min-width: 605px)");

  const checkScreenSize = () => {
    if (normal.matches) setItems(4);
    if (big.matches) setItems(3);
    if (medium.matches) setItems(2);
    if (small.matches) setItems(1);
  };

  let picture = productsData.map((pic) => {
    return (
      <li key={pic.id}>
        <div className={classes.picture}>
          <div className={classes.mainImage}>
            <img
              src={`/Images/Product/${pic.image}`}
              alt={pic.name}
              width="533"
              height="300"
            />
          </div>
          <div className={classes.caption}>
            <p>{pic.name}</p>
            <h2>{pic.price} تومان</h2>
          </div>
          <button className={classes.details}>مشاهده جزئیات</button>
        </div>
      </li>
    );
  });

  return (
    <>
      <section className={classes.lastProduct}>
        <span className={classes.title}>جدیدترین محصولات</span>
        <main>
          <div className={classes.demo}>
            <div className={classes.item}>
              <ul id="content-slider" className={classes.contentSlider}>
                {picture}
              </ul>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default LastProduct;
