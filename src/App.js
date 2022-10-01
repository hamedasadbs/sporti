/*INNER-COMPONENTS*/
import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
/*CSS*/
import "./App.scss";
/*CHILD-COMPONENTS*/
import { Home } from "../src/pages/home/Home";
import { Menu } from "./layout/menu/Menu";
import { Sign } from "../src/layout/sign/Sign";
import { Gallery } from "../src/layout/gallery/Gallery";
import { Notice } from "../src/layout/notice/Notice";
/*ASSETS*/

import { Context } from "./logic/Context";

import * as cookieLib from "./logic/Cookie";

export const App = () => {
  /*STATES*/
  const [username, setUsername] = useState(cookieLib.getCookie("username"));
  const [login, setLogin] = useState(cookieLib.getCookie("login"));
  const [page, setPage] = useState("home");

  const [sportsData, setSportsData] = useState([]);
  const [brandsData, setBrandsData] = useState([]);
  const [productTypeData, setProductTypeData] = useState([]);
  const [isHiddenMenuShown, setIsHiddenMenuShown] = useState(false);
  const [isSignShown, setIsSignShown] = useState(false);
  const [cart, setCart] = useState([]);
  /*VARIABLES*/
  const sportsURL = "http://localhost/bsShop/sports.php";
  const brandsURL = "http://localhost/bsShop/brands.php";
  const productTypeURL = "http://localhost/bsShop/productType.php";
  const cartURL = "http://localhost/bsShop/cart.php";

  const context = {
    usernameCon: [username, setUsername],
    loginCon: [login, setLogin],
    pageCon: [page, setPage],
  };
  /*FUNCTIONS*/
  const disableAll = (disable) => {
    const tagsArray = ["li", "button", "input", "a"];

    for (let t = 0; t < tagsArray.length; t++) {
      const tagsDom = document.querySelectorAll(tagsArray[t]);
      for (let i = 0; i < tagsDom.length; i++) {
        if (disable) tagsDom[i].classList.add("disable");
        else tagsDom[i].classList.remove("disable");
      }
    }
  };

  const closeForm = () => {
    disableAll(false);
    setIsSignShown(false);
    window.onscroll = function () {};
  };

  const checkTheCart = () => {
    axios
      .post(
        cartURL,
        JSON.stringify({
          method: "checkTheCart",
          username: cookieLib.getCookie("username"),
        })
      )
      .then((res) => setCart(res.data));
  };

  useEffect(() => {
    axios.post(sportsURL).then((res) => setSportsData(res.data));
    axios.post(brandsURL).then((res) => setBrandsData(res.data));
    axios.post(productTypeURL).then((res) => setProductTypeData(res.data));
    if (cookieLib.getCookie("login")) {
      checkTheCart();
    } else {
    }
  }, []);

  return (
    <Context.Provider value={context}>
      <Router>
        <div className="main">
          {isHiddenMenuShown && <Menu />}
          {isSignShown && <Sign close={closeForm} />}
          <Routes>
            {sportsData.map((res, index) => (
              <Route
                path={`/category/${res.category}`}
                key={index}
                element={
                  <Gallery
                    categoryName={res.category}
                    faTitle={res.fa_category}
                    checkTheCart={checkTheCart}
                    cart={cart}
                  />
                }
              />
            ))}

            {brandsData.map((res, index) => (
              <Route
                path={`/category/${res.brand}`}
                key={index}
                element={
                  <Gallery
                    categoryName={res.brand}
                    faTitle={res.brand}
                    checkTheCart={checkTheCart}
                    cart={cart}
                  />
                }
              />
            ))}

            {productTypeData.map((res, index) => (
              <Route
                path={`/category/${res.type}`}
                key={index}
                element={
                  <Gallery
                    categoryName={res.type}
                    faTitle={res.fa_type}
                    checkTheCart={checkTheCart}
                    cart={cart}
                  />
                }
              />
            ))}

            <Route
              path="/request-form"
              element={<Notice title="request-form" />}
            />

            <Route path="/privacy" element={<Notice title="privacy" />} />

            <Route path="/guarantee" element={<Notice title="guarantee" />} />

            <Route path="/faq" element={<Notice title="faq" />} />

            <Route path="/blog-news" element={<Notice title="blog-news" />} />

            <Route path="/about" element={<Notice title="about" />} />

            <Route path="/contact" element={<Notice title="contact" />} />

            <Route
              path="/"
              element={<Home setIsSignShown={setIsSignShown} />}
            />
          </Routes>
        </div>
      </Router>
    </Context.Provider>
  );
};
