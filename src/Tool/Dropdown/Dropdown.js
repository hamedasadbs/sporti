import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  const url = "http://localhost/fantasima/index.php";
  const [productsData, setProductsData] = useState([]);
  const [productTypeData, setProductTypeData] = useState([]);

  useEffect(() => {
    axios
      .post(
        url,
        JSON.stringify({
          method: "select",
          table: "product_list",
        })
      )
      .then((res) => setProductsData(res.data));

    axios
      .post(
        url,
        JSON.stringify({
          method: "select",
          table: "category",
        })
      )
      .then((res) => setProductTypeData(res.data));
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
    ) : props.type === "products" ? (
      <>
        <ul>
          {productsData.map((res) => {
            return (
              <li key={res.english_label}>
                {res.farsi_label}
                <ul>{res.english_label}</ul>
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
                key={res.name}
                onClick={() => {
                  window.location.href = res.name;
                }}
              >
                <Link className="link" to={`/category/${res.name}`}>
                  {res.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    ) : null;

  return <>{dropdown}</>;
};

export default Dropdown;
