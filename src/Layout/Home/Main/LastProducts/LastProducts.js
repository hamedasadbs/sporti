import React, { useState, useEffect } from "react";
import classes from "./LastProducts.module.scss";
import "./js/lightslider";
import "./css/lightslider.css";

import src from "../../../../Assets/Images/s1.jpeg";

import axios from "axios";
import $ from "jquery";

const LastProduct = (props) => {
  const [matches, setMatches] = useState([]);

  $(document).ready(function () {
    $("#content-slider").lightSlider({
      loop: false,
      keyPress: true,
      item: 4
    });
    $("#image-gallery").lightSlider({
      gallery: true,
      item: 3,
      thumbItem: 10,
      slideMargin: 0,
      speed: 400,
      auto: false,
      loop: true,
      onSliderLoad: function () {
        $("#image-gallery").removeClass("cS-hidden");
      },
    });
  });

  useEffect(() => {
    axios
      .get("./test.json")
      .then((res) => {
        const match = res.data.matches;
        setMatches(match);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  let picture = null;

  picture = matches.map((pic) => {
    return (
      <li>
        <div key={pic.id} className={classes.picture}>
          <div className={classes.mainImage}>
            <img src={src} alt="Cinque Terre" width="533" height="300" />
          </div>
          <div className={classes.caption}>
            <h2>{pic.price} تومان</h2>
            <p>{pic.text}</p>
          </div>
          <button className={classes.details}>مشاهده جزئیات</button>
        </div>
      </li>
    );
  });

  return (
    <>
      <section className={classes.lastProduct}>
        <span className={classes.title}>{props.title}</span>
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
