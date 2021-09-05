import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import detailsStyle from "../../Layout/Details/Details.module.scss";

const Dropdown = (props) => {
  const productTypeURL = "http://localhost/bsShop/productType.php";

  const [productTypeData, setProductTypeData] = useState([]);

  useEffect(() => {
    axios.post(productTypeURL).then((res) => setProductTypeData(res.data));
  }, []);

  const dropdown =
    props.type === "basket" ? (
      <span>سبد شما خالی است</span>
    ) : props.type === "account" ? (
      <>
        <button className="login" onClick={props.signInClick}>
          ورود
        </button>
        <button className="register" onClick={props.signUpClick}>
          عضویت
        </button>
      </>
    ) : props.type === "productType" ? (
      <>
        <ul>
          {productTypeData.map((res) => {
            return (
              <li
                key={res.id}
                onClick={() => {
                  window.location.href = res.en_title;
                }}
              >
                <Link className="link" to={`/category/${res.en_title}`}>
                  {res.fa_title}
                </Link>
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
