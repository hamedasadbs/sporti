/*INNER-COMPONENTS*/
import React, { useEffect, useState } from "react";
import axios from "axios";
/*CSS*/
import detailsStyle from "../../layout/details/Details.module.scss";
import classes from "./Dropdown.module.scss";
/*ASSETS*/
import {
  Delete,
  DeleteOutline,
  AddCircle,
  AddCircleOutline,
  RemoveCircle,
  RemoveCircleOutline,
} from "@material-ui/icons";

import * as separateLib from "../../logic/Separate";

export const Dropdown = (props) => {
  /*STATES*/
  const [sportsData, setSportsData] = useState([]);
  const [brandsData, setBrandsData] = useState([]);
  const [productTypeData, setProductTypeData] = useState([]);
  /*VARIABLES*/
  const sportsURL = "http://localhost/bsShop/sports.php";
  const brandsURL = "http://localhost/bsShop/brands.php";
  const productTypeURL = "http://localhost/bsShop/productType.php";
  const cartDeleteURL = "http://localhost/bsShop/cart.php";
  /*FUNCTIONS*/
  useEffect(() => {
    axios.post(sportsURL).then((res) => setSportsData(res.data));
    axios.post(brandsURL).then((res) => setBrandsData(res.data));
    axios.post(productTypeURL).then((res) => setProductTypeData(res.data));
  }, []);

  const deleteCartHandler = (username, productId) => {
    axios
      .post(
        cartDeleteURL,
        JSON.stringify({
          method: "deleteCart",
          productId,
          username,
        })
      )
      .then(() => {
        props.checkTheCart();
      });
  };

  return (
    <>
      {props.type === "basket" ? (
        <span className={classes.cartDropdown}>
          <table>
            {props.cart.map((res, index) => (
              <tr key={index}>
                <img src={`/Images/Product/${res.image}`} alt={res.fa_title} />
                <aside>
                  <h1 className={classes.productName}>{res.fa_title}</h1>
                  <article>
                    {res.number < 2 ? (
                      <span
                        onClick={() =>
                          deleteCartHandler(res.username, res.product_id)
                        }
                        className={classes.delete}
                      >
                        <Delete className={classes.fillDelete} />
                        <DeleteOutline className={classes.outlineDelete} />
                      </span>
                    ) : (
                      <span
                        onClick={() =>
                          deleteCartHandler(res.username, res.product_id)
                        }
                        className={classes.minus}
                      >
                        <RemoveCircle className={classes.fillMinus} />
                        <RemoveCircleOutline className={classes.outlineMinus} />
                      </span>
                    )}
                    <h1 className={classes.productCount}>{res.number}</h1>
                    <span
                      onClick={() =>
                        deleteCartHandler(res.username, res.product_id)
                      }
                      className={classes.add}
                    >
                      <AddCircle className={classes.fillAdd} />
                      <AddCircleOutline className={classes.outlineAdd} />
                    </span>
                  </article>
                  <h1 className={classes.productPrice}>
                    {separateLib.separate(res.price) + " "}
                    تومان
                  </h1>
                </aside>
              </tr>
            ))}
          </table>
          <button onClick={props.signInClick} className={classes.conformShop}>
            تکمیل فرآیند خرید
          </button>
        </span>
      ) : props.type === "sports" ? (
        <main className={classes.dropdownContainer}>
          {sportsData.map((res, index) => (
            <span
              className={classes.dropdown}
              key={index}
              onClick={() => {
                window.location.href = "/category/" + res.category;
              }}
            >
              {res.fa_category}
            </span>
          ))}
        </main>
      ) : props.type === "brands" ? (
        <main className={classes.dropdownContainer}>
          {brandsData.map((res, index) => (
            <span
              className={classes.dropdown}
              key={index}
              onClick={() => {
                window.location.href = "/category/" + res.brand;
              }}
            >
              {res.brand}
            </span>
          ))}
        </main>
      ) : props.type === "productType" ? (
        <main className={classes.dropdownContainer}>
          {productTypeData.map((res, index) => (
            <span
              className={classes.dropdown}
              key={index}
              onClick={() => {
                window.location.href = "/category/" + res.type;
              }}
            >
              {res.fa_type}
            </span>
          ))}
        </main>
      ) : props.type === "online" ? (
        <button className={classes.logout} onClick={props.logoutClick}>
          خروج
        </button>
      ) : props.type === "description" ? (
        <div
          {...(props.dis === false
            ? { className: detailsStyle.displayNone }
            : { className: detailsStyle.description })}
        >
          {props.desc}
        </div>
      ) : props.type === "features" ? (
        <div
          {...(props.dis === false
            ? { className: detailsStyle.displayNone }
            : { className: detailsStyle.features })}
        >
          <p>قیمت محصول(تومان): {props.price}</p>
          <p>نوع محصول: {props.ty}</p>
          <p>جنس محصول: {props.kind}</p>
          <p>اندازه محصول(طول*عرض*ارتفاع): {props.size}</p>
        </div>
      ) : props.type === "comments" ? (
        <div
          {...(props.dis === false
            ? { className: detailsStyle.displayNone }
            : { className: detailsStyle.comments })}
        >
          نظری وجود ندارد
        </div>
      ) : null}
    </>
  );
};