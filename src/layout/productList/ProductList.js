/*INNER COMPONENT*/
import { useState, useContext } from "react";
import { Context } from "../../logic/Context";
import InfiniteCarousel from "react-leaf-carousel";
/*STYLE*/
import classes from "./ProductList.module.scss";
/*MUI*/
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
/*CHILD COMPONENT*/
import { Product } from "./product/Product";

export const ProductList = (props) => {
  /*STATE*/
  const [loaded, setLoaded] = useState(false);
  /*VARIABLE*/
  const products = useContext(Context).productsCon[0];
  /*FUNCTION*/
  setTimeout(() => {
    setLoaded(true);
  }, 500);
  /*JSX*/
  if (loaded)
    return (
      <article className={classes.productList}>
        <h1 className={classes.title}>{props.title}</h1>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 1300,
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
          {products.map((res, index) => (
            <Product card={res} key={index} />
          ))}
        </InfiniteCarousel>
      </article>
    );
  else return null;
};
