import React, { useState, useEffect } from "react";
import classes from "./shopDetails.module.scss";

import ImageSource1 from "../../Assets/Images/s1.jpeg";
import axios from "axios";

const ShopDetails = () => {
  const [priceValue, setPriceValue] = useState(0);
  const [shoppings, setShoppings] = useState([]);
  const [productTitle, setProductTitle] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  const [productStation, setProductStation] = useState(null);
  const [productCity, setProductCity] = useState(null);
  const [productCategory, setProductCategory] = useState(null);
  const [productExplanation, setProductExplanation] = useState(null);

  useEffect(() => {
    axios
      .get("./test.json")
      .then((res) => {
        const shoppings = res.data.shoppings;
        setShoppings(shoppings);
        shoppings.map((product) => {
          if (`?id=${product.id}` == window.location.search) {
            setProductTitle(product.title);
            setProductPrice(product.price);
            setProductStation(product.station);
            setProductCity(product.city);
            setProductCategory(product.category);
            setProductExplanation(product.explanation);
          }
        });
      })
      .catch((err) => {
        alert(err);
      }, []);
  });

  const changePriceHandler = (event) => {
    setPriceValue(event.target.value);
    const demo = document.getElementById("demo");
    demo.innerHTML = event.target.value;
  };

  return (
    <>
      <section className={classes.shopDetails}>
        <div className={classes.background}></div>
        <main>
          <div className={classes.caption}>
            <div className={classes.head}>
              <div className={classes.star}>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className={classes.title}>{productTitle}</div>
            </div>
            <div className={classes.secondHead}>
              <div className={classes.category}>
                <p>
                  دسته بندی:
                  <span> {productCategory}</span>
                </p>
              </div>
              <div className={classes.station}>
                {productStation} / {productCity}
              </div>
            </div>
            <div className={classes.price}>
              <p>
                قیمت:
                <span> {productPrice} </span>
                تومان
              </p>
            </div>
            <div className={classes.explanation}>
              <p>
                توضیحات کالا:
                <span> {productExplanation} </span>
              </p>
            </div>
            <div className={classes.contact}>
              <button>اطلاعات تماس</button>
            </div>
          </div>

          <div className={classes.pictures}>
            <img className={classes.productImage} src={ImageSource1} />
            <div className={classes.slideImages}>
              <button>
                <i className="fa fa-chevron-left"></i>
              </button>
              <div className={classes.mainImage}>
                <img src={ImageSource1} alt="Cinque Terre" />
              </div>
              <div className={classes.mainImage}>
                <img src={ImageSource1} alt="Cinque Terre" />
              </div>
              <div className={classes.mainImage}>
                <img src={ImageSource1} alt="Cinque Terre" />
              </div>
              <button>
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default ShopDetails;
