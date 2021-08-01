import Advertising from "../src/Layout/Home/Article/Advertising/Advertising";
import Products from "../src/Layout/Home/Article/Products/Products";
import Notice from "../src/Layout/Home/Aside/Notice/Notice";
import TopProducts from "../src/Layout/Home/Aside/TopProducts/TopProducts";
import LastProducts from "../src/Layout/Home/Main/LastProducts/LastProducts";

import Dropdown from "./Tool/Dropdown/Dropdown";

import Footer from "../src/Layout/Footer/Footer";

import Sign from "../src/Layout/Home/Sign/Sign";
import Shopping from "../src/Shopping/Shopping";
import ShopDetails from "../src/Shopping/shopDetails/shopDetails";

import "./App.scss";

import mainLogo from "./Assets/Images/logofantas.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowClose,
  faChevronDown,
  faChevronLeft,
  faUserCircle,
  faShoppingBasket,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const url = "http://localhost/fantasima/index.php";
  const [productsData, setProductsData] = useState([]);
  const [productTypeData, setProductTypeData] = useState([]);
  const [isHiddenMenuShown, setIsHiddenMenuShown] = useState(false);
  const [isSignUpShown, setIsSignUpShown] = useState(false);
  const [isSignInShown, setIsSignInShown] = useState(false);

  const [isProductTypeOpen, setIsProductTypeOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const showHiddenMenu = () => {
    setIsHiddenMenuShown(true);
    window.scrollTo(0, 0);
  };

  const closeHiddenMenu = () => {
    setIsHiddenMenuShown(false);
    window.onscroll = function () {};
  };

  const disableScroll = () => {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  };

  const showSingIn = () => {
    setIsSignInShown(true);
    window.scrollTo(0, 0);
    disableScroll();
  };

  const showSingUp = () => {
    setIsSignUpShown(true);
    window.scrollTo(0, 0);
    disableScroll();
  };

  const closeForm = () => {
    setIsSignUpShown(false);
    setIsSignInShown(false);
    window.onscroll = function () {};
  };

  const openProductType = () => {
    if (isProductTypeOpen) setIsProductTypeOpen(false);
    else setIsProductTypeOpen(true);
  };

  const openProducts = () => {
    if (isProductsOpen) setIsProductsOpen(false);
    else setIsProductsOpen(true);
  };

  const openAccount = () => {
    if (isAccountOpen) setIsAccountOpen(false);
    else setIsAccountOpen(true);
  };

  const openBasket = () => {
    if (isBasketOpen) setIsBasketOpen(false);
    else setIsBasketOpen(true);
  };

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

  return (
    <div className="body">
      <div className="innerBody">
        <div className="main">
          <Router>
            {isHiddenMenuShown && (
              <div className="hiddenMenu">
                <FontAwesomeIcon
                  onClick={closeHiddenMenu}
                  icon={faWindowClose}
                  className="closeHiddenMenu"
                />
                <ul className="rightSide">
                  <li className="account" onClick={openAccount}>
                    {isAccountOpen ? (
                      <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronLeft} />
                    )}
                    <label> حساب من </label>
                    <FontAwesomeIcon icon={faUserCircle} className="account" />
                    {isAccountOpen && (
                      <ul>
                        <button className="login" onClick={showSingIn}>
                          ورود
                        </button>
                        <button className="register" onClick={showSingUp}>
                          عضویت
                        </button>
                      </ul>
                    )}
                  </li>
                  <li className="basket" onClick={openBasket}>
                    {isBasketOpen ? (
                      <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronLeft} />
                    )}
                    <label> سبد من </label>
                    <FontAwesomeIcon icon={faShoppingBasket} className="basket">
                      <div className="carts">0</div>
                    </FontAwesomeIcon>
                    {isBasketOpen && (
                      <ul>
                        <li>سبد شما خالی است!</li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link to="/#" onClick={closeHiddenMenu}>
                      خانه
                    </Link>
                  </li>
                  <li className="products" onClick={openProducts}>
                    <Link to="/#">
                      {isProductsOpen ? (
                        <FontAwesomeIcon icon={faChevronDown} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronLeft} />
                      )}{" "}
                      محصولات
                    </Link>
                    {isProductsOpen && (
                      <ul>
                        {productsData.map((res) => {
                          return (
                            <li>{res.farsi_label} -</li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                  <li className="productType" onClick={openProductType}>
                    <Link to="/#">
                      {isProductTypeOpen ? (
                        <FontAwesomeIcon icon={faChevronDown} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronLeft} />
                      )}{" "}
                      نوع محصول
                    </Link>
                    {isProductTypeOpen && (
                      <ul>
                        {productTypeData.map((res) => {
                          return <li>{res.label} -</li>;
                        })}
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link to="/fantesiart" onClick={closeHiddenMenu}>
                      فانتزیآرت
                    </Link>
                  </li>
                  <li>
                    <Link to="/fantesiblog" onClick={closeHiddenMenu}>
                      فانتزیبلاگ
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={closeHiddenMenu}>
                      درباره ما
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={closeHiddenMenu}>
                      ارتباط با ما
                    </Link>
                  </li>
                  <li className="search">
                    <button>
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <input
                      spellCheck="false"
                      type="search"
                      placeholder="جست و جوی محصول یا برند"
                    />
                  </li>
                </ul>
              </div>
            )}
            <header className="header">
              <nav className="topHeader">
                <ul className="rightSide">
                  <li onClick={showHiddenMenu} className="dropdown ">
                    <FontAwesomeIcon className="i" icon={faBars} />
                  </li>
                  <div className="mainLogo">
                    <Link to="/Home">
                      <img src={mainLogo} alt="logo" />
                      <span>fantasima</span>
                    </Link>
                  </div>
                </ul>
                <ul className="middleSide">
                  <button className="search">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                  <input
                    spellCheck="false"
                    type="search"
                    placeholder="جست و جوی محصول یا برند"
                  />
                </ul>
                <ul className="leftSide">
                  <li className="account">
                    <label>حساب من</label>
                    <FontAwesomeIcon icon={faUserCircle} className="i" />
                    <div className="account">
                      <Dropdown
                        type="account"
                        signInClick={() => {
                          closeForm();
                          showSingIn();
                        }}
                        signUpClick={() => {
                          closeForm();
                          showSingUp();
                        }}
                      />
                    </div>
                  </li>
                  <li className="basket">
                    <div className="carts">0</div>
                    <label>سبد من</label>
                    <FontAwesomeIcon icon={faShoppingBasket} className="i" />
                    <div className="basket">
                      <Dropdown type="basket" />
                    </div>
                  </li>
                </ul>
              </nav>

              <nav className="bottomHeader">
                <ul className="rightSide">
                  <li>
                    <Link to="/contact">ارتباط با ما</Link>
                  </li>
                  <li>
                    <Link to="/about">درباره ما</Link>
                  </li>
                  <li>
                    <Link to="/fantesiblog">فانتزیبلاگ</Link>
                  </li>
                  <li>
                    <Link to="/fantesiart">فانتزیآرت</Link>
                  </li>
                  <li className="productType">
                    <div className="productType">
                      <Dropdown type="productType" />
                    </div>
                    <Link to="/#">
                      <FontAwesomeIcon icon={faChevronDown} /> نوع محصول
                    </Link>
                  </li>
                  <li className="products">
                    <Link to="/#">
                      <FontAwesomeIcon icon={faChevronDown} /> محصولات
                    </Link>
                    <div className="products">
                      <Dropdown type="products" />
                    </div>
                  </li>
                  <li className="home">
                    <Link to="/#">خانه</Link>
                  </li>
                </ul>
              </nav>
            </header>
            <Switch>
              <Route path="/ShoppingDetails" component={ShopDetails} />

              <Route path="/Shopping">
                <Shopping />
              </Route>

              <Route path="/">
                <Advertising
                  click={() => {
                    closeHiddenMenu();
                    closeForm();
                    window.scrollTo(0, 0);
                    showSingUp();
                  }}
                />
                <Products />
                <Notice />
                <TopProducts />
                {isSignUpShown && <Sign type="signUp" close={closeForm} />}
                {isSignInShown && <Sign type="signIn" close={closeForm} />}
                <LastProducts title="آخرین محصولات" />
              </Route>
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
