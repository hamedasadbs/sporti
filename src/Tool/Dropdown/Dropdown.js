/*INNER-COMPONENTS*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
/*CSS*/
import detailsStyle from "../../Layout/Details/Details.module.scss";
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
  const cart = props.cart;
  const isOnline = useSelector((state) => state.isOnline);
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
        isOnline == false ? (
          <span>لطفا وارد حساب کاربری خود شوید</span>
        ) : cart.length === 0 ? (
          <span>سبد شما خالی است</span>
        ) : (
          <span className={classes.cart}>
            <table>
              {cart.map((res) => (
                <tr key={res.id}>
                  <img
                    src={`/Images/Product/${res.image}`}
                    alt={res.fa_title}
                  />
                  <aside>
                    <article>
                      <span
                        onClick={() =>
                          deleteCartHandler(res.username, res.product_id)
                        }
                        className={classes.minus}
                      >
                        <RemoveCircle className={classes.fillMinus} />
                        <RemoveCircleOutline className={classes.outlineMinus} />
                      </span>
                      <span
                        onClick={() =>
                          deleteCartHandler(res.username, res.product_id)
                        }
                        className={classes.delete}
                      >
                        <Delete className={classes.fillDelete} />
                        <DeleteOutline className={classes.outlineDelete} />
                      </span>
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
                    <h1>{res.fa_title}</h1>
                    <h1>
                      {` ${res.number} `}
                      :تعداد{" "}
                    </h1>
                  </aside>
                </tr>
              ))}
            </table>
            <button onClick={props.signInClick} className={classes.conformShop}>
              تکمیل فرآیند خرید
            </button>
          </span>
        )
      ) : props.type === "sports" ? (
        <>
          <ul>
            {sportsData.map((res) => (
              <li
                key={res.id}
                onClick={() => {
                  window.location.href = "/category/" + res.category;
                }}
              >
                {res.fa_category}
              </li>
            ))}
          </ul>
        </>
      ) : props.type === "brands" ? (
        <>
          <ul>
            {brandsData.map((res) => (
              <li
                key={res.id}
                onClick={() => {
                  window.location.href = "/category/" + res.brand;
                }}
              >
                {res.brand}
              </li>
            ))}
          </ul>
        </>
      ) : props.type === "productType" ? (
        <>
          <ul>
            {productTypeData.map((res) => (
              <li
                key={res.id}
                onClick={() => {
                  window.location.href = "/category/" + res.type;
                }}
              >
                {res.fa_type}
              </li>
            ))}
          </ul>
        </>
      ) : props.type === "online" ? (
        <>
          <button className={classes.logout} onClick={props.logoutClick}>
            خروج
          </button>
        </>
      ) : props.type === "description" ? (
        <>
          <div
            {...(props.dis === false
              ? { className: detailsStyle.displayNone }
              : { className: detailsStyle.description })}
          >
            {props.desc}
          </div>
        </>
      ) : props.type === "features" ? (
        <>
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
        </>
      ) : props.type === "comments" ? (
        <>
          <div
            {...(props.dis === false
              ? { className: detailsStyle.displayNone }
              : { className: detailsStyle.comments })}
          >
            نظری وجود ندارد
          </div>
        </>
      ) : null}
    </>
  );
};
