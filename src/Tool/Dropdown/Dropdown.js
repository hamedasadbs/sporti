import React, { useEffect, useState } from "react";
import axios from "axios";

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
          type: "normal",
        })
      )
      .then((res) => setProductsData(res.data));

    axios
      .post(
        url,
        JSON.stringify({
          method: "select",
          table: "category",
          type: "normal",
        })
      )
      .then((res) => setProductTypeData(res.data));
  }, []);

  const dropdown =
    props.type == "basket" ? (
      <span>سبد شما خالی است</span>
    ) : props.type == "account" ? (
      <>
        <button className="login" onClick={props.signInClick}>
          ورود
        </button>
        <button className="register" onClick={props.signUpClick}>
          عضویت
        </button>
      </>
    ) : props.type == "products" ? (
      <>
        <ul>
          {productsData.map((res) => {
            return (
              <li>
                {res.farsi_label}
                <ul>{res.english_label}</ul>
              </li>
            );
          })}
        </ul>
      </>
    ) : props.type == "productType" ? (
      <>
        <ul>
          {productTypeData.map((res) => {
            return <li>{res.label}</li>;
          })}
        </ul>
      </>
    ) : null;

  return <>{dropdown}</>;
};

export default Dropdown;