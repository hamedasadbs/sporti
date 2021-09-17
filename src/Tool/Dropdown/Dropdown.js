import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import detailsStyle from "../../Layout/Details/Details.module.scss";

const Dropdown = (props) => {
  const sportsURL = "http://localhost/bsShop/sports.php";
  const brandsURL = "http://localhost/bsShop/brands.php";
  const productTypeURL = "http://localhost/bsShop/productType.php";

  const [sportsData, setSportsData] = useState([]);
  const [brandsData, setBrandsData] = useState([]);
  const [productTypeData, setProductTypeData] = useState([]);

  useEffect(() => {
    axios.post(sportsURL).then((res) => setSportsData(res.data));
    axios.post(brandsURL).then((res) => setBrandsData(res.data));
    axios.post(productTypeURL).then((res) => setProductTypeData(res.data));
  }, []);

  const dropdown =
    props.type === "basket" ? (
      props.isOnline == false ? (
        <span>لطفا وارد حساب کاربری خود شوید</span>
      ) : (
        <span>سبد شما خالی است</span>
      )
    ) : props.type === "account" ? (
      <>
        <Button
          style={{ backgroundColor: "#3363FF" }}
          onClick={props.signInClick}
          variant="contained"
          color="secondary"
        >
          ورود
        </Button>
        <Button
          style={{ border: "1px solid #3363FF", color: "#3363FF" }}
          onClick={props.signUpClick}
          variant="outlined"
          color="secondary"
        >
          عضویت
        </Button>
      </>
    ) : props.type === "sports" ? (
      <>
        <ul>
          {sportsData.map((res) => {
            return (
              <li
                key={res.id}
                onClick={() => {
                  window.location.href = "/category/" + res.category;
                }}
              >
                {res.fa_category}
              </li>
            );
          })}
        </ul>
      </>
    ) : props.type === "brands" ? (
      <>
        <ul>
          {brandsData.map((res) => {
            return (
              <li
                key={res.id}
                onClick={() => {
                  window.location.href = "/category/" + res.brand;
                }}
              >
                {res.brand}
              </li>
            );
          })}
        </ul>
      </>
    ) : props.type === "productType" ? (
      <>
        <ul>
          {productTypeData.map((res) => {
            return (
              <li
                key={res.id}
                onClick={() => {
                  window.location.href = "/category/" + res.type;
                }}
              >
                {res.type}
              </li>
            );
          })}
        </ul>
      </>
    ) : props.type === "online" ? (
      <>
        <button className="logout" onClick={props.logoutClick}>
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
    ) : null;

  return <>{dropdown}</>;
};

export default Dropdown;
