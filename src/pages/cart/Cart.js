/*INNER COMPONENT*/
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../logic/Context";
/*STYLE*/
import classes from "./Cart.module.scss";
/*CHILD COMPONENT*/
import { Product } from "./product/Product";
/*MUI*/
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
/*ICON*/
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
/*LIBRARY*/
import * as separateLib from "../../logic/Separate";

export const Cart = (props) => {
  /*STATE*/
  let [minPrice, setMinPrice] = useState(0);
  let [maxPrice, setMaxPrice] = useState(500000);
  /*VARIABLE*/
  const brandsData = useContext(Context).typeCon.brands[0];
  const productTypeData = useContext(Context).typeCon.productType[0];
  const productKindData = useContext(Context).typeCon.productKind[0];
  const cart = useContext(Context).cartCon[0];
  /*FUNCTION*/

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showMinRange = (e) => {
    setMinPrice(parseInt(e.target.value));
  };

  const showMaxRange = (e) => {
    setMaxPrice(parseInt(e.target.value));
  };
  /*JSX*/
  return (
    <article className={classes.carts}>
      <div className={classes.cart}>
        <h1 className={classes.title}>سبد خرید شما</h1>
        <main>
          {cart.length > 0 ? (
            cart.map((res, index) => {
              return res.price <= maxPrice && res.price >= minPrice ? (
                <Product card={res} key={index} />
              ) : null;
            })
          ) : (
            <span className={classes.nothingToShow}>!موردی یافت نشد</span>
          )}
        </main>
      </div>
      <div className={classes.filter}>
        <table className={classes.price}>
          <thead>
            <tr>
              <td>قیمت (تومان)</td>
            </tr>
          </thead>
          <tbody className={classes.price}>
            <tr>
              <td>
                <span>
                  {separateLib.separate(minPrice) +
                    " - " +
                    separateLib.separate(maxPrice)}
                </span>
                <div className={classes.priceBar}>
                  <input
                    onChange={showMinRange}
                    type="range"
                    min="0"
                    max="500000"
                    value={minPrice}
                    step="10000"
                  />
                  <input
                    onChange={showMaxRange}
                    type="range"
                    min="0"
                    max="500000"
                    value={maxPrice}
                    step="10000"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => (window.location.href = window.location.href)}>
          حذف همه فیلترها
        </button>
        <table className={classes.type}>
          <thead>
            <tr>
              <td>نوع کالا</td>
            </tr>
          </thead>
          <tbody>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              {productTypeData.map((res) => (
                <tr key={res.fa_type}>
                  <td>
                    <FormControlLabel
                      value={res.type}
                      control={<Radio />}
                      label={<h1>{res.fa_type}</h1>}
                    />
                  </td>
                </tr>
              ))}
            </RadioGroup>
          </tbody>
        </table>
        <table className={classes.kind}>
          <thead>
            <tr>
              <td>جنس کالا</td>
            </tr>
          </thead>
          <tbody>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              {productKindData.map((res, index) => (
                <tr key={index}>
                  <td>
                    <FormControlLabel
                      value={res.kind}
                      control={<Radio />}
                      label={<h1>{res.kind}</h1>}
                    />
                  </td>
                </tr>
              ))}
            </RadioGroup>
          </tbody>
        </table>
        <table className={classes.brand}>
          <thead>
            <tr>
              <td>برند کالا</td>
            </tr>
          </thead>
          <tbody>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              {brandsData.map((res, index) => (
                <tr key={index}>
                  <td>
                    <FormControlLabel
                      value={res.brand}
                      control={<Radio />}
                      label={<h1>{res.brand}</h1>}
                    />
                  </td>
                </tr>
              ))}
            </RadioGroup>
          </tbody>
        </table>
      </div>
    </article>
  );
};
