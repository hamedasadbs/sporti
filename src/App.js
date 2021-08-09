import Advertising from "../src/Layout/Home/Article/Advertising/Advertising";
import Categories from "../src/Layout/Home/Article/Categories/Categories";
import Bulletin from "../src/Layout/Home/Aside/Bulletin/Bulletin";
import Products from "../src/Layout/Home/Aside/Products/Products";
import LastProducts from "../src/Layout/Home/Main/LastProducts/LastProducts";

import Dropdown from "./Tool/Dropdown/Dropdown";

import Footer from "../src/Layout/Footer/Footer";

import Sign from "../src/Layout/Home/Sign/Sign";
import Gallery from "../src/Layout/Gallery/Gallery";
import Notice from "../src/Layout/Notice/Notice";

import "./App.scss";

import mainLogo from "./Assets/Images/blueSnakeLogo.png";

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

  const [page, setPage] = useState(window.location.href);

  const showHiddenMenu = () => {
    setIsHiddenMenuShown(true);
    window.scrollTo(0, 0);
  };

  const closeHiddenMenu = () => {
    setIsHiddenMenuShown(false);
    window.onscroll = function () {};
  };

  const disableScroll = () => {
    alert(window.location.href);
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

  const pageHandler = (pageName) => {
    setPage(pageName);
  };

  useEffect(() => {
    axios
      .post(
        url,
        JSON.stringify({
          method: "select",
          selected: "*",
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
                  <li
                    onClick={() => {
                      pageHandler("http://localhost:3000/");
                    }}
                  >
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
                          return <li>{res.farsi_label} -</li>;
                        })}
                      </ul>
                    )}
                  </li>
                  <li className="productType" onClick={openProductType}>
                    <Link>
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
                  <li
                    onClick={() => {
                      pageHandler("http://localhost:3000/fantasiblog");
                    }}
                  >
                    <Link to="/fantasiblog" onClick={closeHiddenMenu}>
                      فانتزیبلاگ
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      pageHandler("http://localhost:3000/about");
                    }}
                  >
                    <Link to="/about" onClick={closeHiddenMenu}>
                      درباره ما
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      pageHandler("http://localhost:3000/contact");
                    }}
                  >
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
                    <Link to="/about">
                      <img src={mainLogo} alt="logo" />
                      <span>BlueSnake</span>
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
                    <Link
                      className="link"
                      onClick={() => {
                        pageHandler("http://localhost:3000/contact");
                      }}
                      to="/contact"
                    >
                      <span
                        {...(page == "http://localhost:3000/contact"
                          ? { className: "activeNav" }
                          : {})}
                      >
                        <a>ارتباط با ما</a>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link"
                      onClick={() => {
                        pageHandler("http://localhost:3000/about");
                      }}
                      to="/about"
                    >
                      <span
                        {...(page == "http://localhost:3000/about"
                          ? { className: "activeNav" }
                          : {})}
                      >
                        <a>درباره ما</a>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link"
                      onClick={() => {
                        pageHandler("http://localhost:3000/blog-news");
                      }}
                      to="/fantasiblog"
                    >
                      <span
                        {...(page == "http://localhost:3000/blog-news"
                          ? { className: "activeNav" }
                          : {})}
                      >
                        <a>بلاگ و اخبار</a>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="link">
                      <span className="productType">
                        <div className="productType">
                          <Dropdown type="productType" />
                        </div>
                        <a>
                          <FontAwesomeIcon icon={faChevronDown} /> نوع محصول
                        </a>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="link">
                      <span className="products">
                        <a>
                          <FontAwesomeIcon icon={faChevronDown} /> محصولات
                        </a>
                        <div className="products">
                          <Dropdown type="products" />
                        </div>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link"
                      onClick={() => {
                        pageHandler("http://localhost:3000/");
                      }}
                      to="/#"
                    >
                      <span
                        {...(page == "http://localhost:3000/"
                          ? { className: "activeNav" }
                          : {})}
                      >
                        <a>خانه</a>
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>
            <Switch>
              {productTypeData.map((res) => {
                if (res.has_details == 0) {
                  return (
                    <Route path={`/category/${res.name}`}>
                      <Gallery name={res.name} label={res.label} />
                    </Route>
                  );
                } else {
                  return (
                    <Route path={`/advanced-search/${res.name}`}>
                      <Gallery name={res.name} label={res.label} />
                    </Route>
                  );
                }
              })}

              <Route path="/blog-news">
                <Notice title="blog-news" />
              </Route>

              <Route path="/about">
                <Notice title="about" />
              </Route>

              <Route path="/contact">
                <Notice title="contact" />
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
                <Categories />
                <Bulletin />
                <Products />
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
