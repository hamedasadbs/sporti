/*INNER-COMPONENTS*/
import React, { useEffect, useState } from "react";
import axios from "axios";
/*CSS*/
import classes from "./ProductList.module.scss";

import InfiniteCarousel from "react-leaf-carousel";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { Product } from "./Product/Product";

export const ProductList = (props) => {
  /*STATES*/
  const [productsData, setProductsData] = useState([]);

  const [loaded, setLoaded] = useState(false);
  /*VARIABLES*/
  const url = "http://localhost:8080/products";
  /*FUNCTIONS*/
  useEffect(() => {
    axios.get(url).then((res) => {
      setProductsData(res.data.pro);
    });
  }, []);

  setTimeout(() => {
    setLoaded(true);
  }, 500);

  if (loaded)
    return (
      <article className={classes.productList}>
        <h1 className={classes.title}>{props.title}</h1>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          nextArrow={
            <div
              className={classes.arrow}
              style={{
                position: "absolute",
                right: -30,
                top: 250,
              }}
            >
              <ArrowForwardIosIcon
                style={{ fontSize: 50, color: "rgb(37, 37, 37)" }}
              />
            </div>
          }
          prevArrow={
            <div
              className={classes.arrow}
              style={{
                position: "absolute",
                left: -30,
                top: 250,
              }}
            >
              <ArrowBackIosNewIcon
                style={{ fontSize: 50, color: "rgb(37, 37, 37)" }}
              />
            </div>
          }
          showSides={false}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice={true}
        >
          {productsData.map((res, index) => (
            <Product card={res} key={index} />
          ))}
        </InfiniteCarousel>
      </article>
    );
  else return null;
};
