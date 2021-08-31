import Advertising from "../src/Layout/Home/Article/Advertising/Advertising";
import Categories from "../src/Layout/Home/Article/Categories/Categories";
import Bulletin from "../src/Layout/Home/Aside/Bulletin/Bulletin";
import Products from "../src/Layout/Home/Aside/Products/Products";
import LastProducts from "../src/Layout/Home/Main/LastProducts/LastProducts";

import Dropdown from "./Tool/Dropdown/Dropdown";

import Footer from "../src/Layout/Footer/Footer";

import Sign from "../src/Layout/Sign/Sign";
import Gallery from "../src/Layout/Gallery/Gallery";
import Notice from "../src/Layout/Notice/Notice";

import "./App.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
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

  const setCookie = (cName, cValue, minutes) => {
    let d = new Date();
    d.setTime(d.getTime() + minutes * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires;
  };

  const getCookie = (cName) => {
    const nameString = cName + "=";

    const value = document.cookie.split("; ").filter((item) => {
      return item.includes(nameString);
    });

    if (value.length) {
      return value[0].substring(nameString.length, value[0].length);
    } else {
      return "";
    }
  };

  const showHiddenMenu = () => {
    setIsHiddenMenuShown(true);
    window.scrollTo(0, 0);
  };

  const closeHiddenMenu = () => {
    setIsHiddenMenuShown(false);
  };

  const disableScroll = () => {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  };

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

  const showSingIn = () => {
    disableAll(true);
    setIsSignInShown(true);
    window.scrollTo(0, 0);
    disableScroll();
  };

  const showSingUp = () => {
    disableAll(true);
    setIsSignUpShown(true);
    window.scrollTo(0, 0);
    disableScroll();
  };

  const closeForm = () => {
    disableAll(false);
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
          method: "products",
        })
      )
      .then((res) => setProductsData(res.data));

    axios
      .post(
        url,
        JSON.stringify({
          method: "productType",
        })
      )
      .then((res) => setProductTypeData(res.data));
  }, []);

  const onlineHandler = (isOnline) => {
    setCookie("isOnline", isOnline, 1);
  };

  const accountNameHandler = (name) => {
    setCookie("accountName", name, 1);
  };

  const logoutHandler = () => {
    setCookie("isOnline", "", -1);
    setCookie("accountName", "", -1);
  };

  return (
    <div className="body">
      <div className="innerBody">
        <Router>
          <div className="main">
            {isHiddenMenuShown && (
              <div className="hiddenMenu">
                <FontAwesomeIcon
                  onClick={closeHiddenMenu}
                  icon={faTimes}
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
                        <button
                          className="login"
                          onClick={() => {
                            closeForm();
                            showSingIn();
                            closeHiddenMenu();
                          }}
                        >
                          ورود
                        </button>
                        <button
                          className="register"
                          onClick={() => {
                            closeForm();
                            showSingUp();
                            closeHiddenMenu();
                          }}
                        >
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
                          return (
                            <li
                              key={res.name}
                              onClick={() => {
                                window.location.href = res.name;
                              }}
                            >
                              <Link
                                onClick={closeHiddenMenu}
                                to={`/category/${res.name}`}
                              >
                                {res.label} -
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                  <li
                    onClick={() => {
                      pageHandler("http://localhost:3000/blog-news");
                    }}
                  >
                    <Link to="/blog-news" onClick={closeHiddenMenu}>
                      بلاگ و اخبار
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
                  <li onClick={showHiddenMenu} className="dropdown">
                    <FontAwesomeIcon className="i" icon={faBars} />
                  </li>
                  <div
                    className="mainLogo"
                    onClick={() => {
                      pageHandler("http://localhost:3000/");
                    }}
                  >
                    <Link to="/#">
                      <img src="/blueSnake-label.png" alt="blueSnake" />
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
                    {getCookie("isOnline") == false ? (
                      <label>حساب من</label>
                    ) : (
                      <label>{getCookie("accountName")}</label>
                    )}
                    <FontAwesomeIcon icon={faUserCircle} className="i" />
                    <div className="account">
                      {getCookie("isOnline") == false ? (
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
                      ) : (
                        <Dropdown
                          type="online"
                          logoutClick={() => {
                            logoutHandler();
                            window.location.href = window.location.href;
                          }}
                        />
                      )}
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
                        {...(page === "http://localhost:3000/contact"
                          ? { className: "activeNav" }
                          : {})}
                      >
                        ارتباط با ما
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
                        {...(page === "http://localhost:3000/about"
                          ? { className: "activeNav" }
                          : {})}
                      >
                        درباره ما
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link"
                      onClick={() => {
                        pageHandler("http://localhost:3000/blog-news");
                      }}
                      to="/blog-news"
                    >
                      <span
                        {...(page === "http://localhost:3000/blog-news"
                          ? { className: "activeNav" }
                          : {})}
                      >
                        بلاگ و اخبار
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="link">
                      <span className="productType">
                        <div className="productType">
                          <Dropdown type="productType" />
                        </div>
                        <FontAwesomeIcon icon={faChevronDown} /> نوع محصول
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="link">
                      <span className="products">
                        <FontAwesomeIcon icon={faChevronDown} /> محصولات
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
                        {...(page === "http://localhost:3000/"
                          ? { className: "activeNav" }
                          : {})}
                      >
                        خانه
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>
            {isSignUpShown && (
              <Sign
                type="signup"
                close={closeForm}
                online={onlineHandler}
                accountName={accountNameHandler}
              />
            )}
            {isSignInShown && (
              <Sign
                online={onlineHandler}
                accountName={accountNameHandler}
                type="login"
                close={closeForm}
              />
            )}
            <Switch>
              {productTypeData.map((res) => {
                return (
                  <Route path={`/category/${res.name}`} key={res.name}>
                    <Gallery name={res.name} label={res.label} />
                  </Route>
                );
              })}

              <Route path="/request-form">
                <Notice title="request-form" />
              </Route>

              <Route path="/privacy">
                <Notice title="privacy" />
              </Route>

              <Route path="/guarantee">
                <Notice title="guarantee" />
              </Route>

              <Route path="/faq">
                <Notice title="faq" />
              </Route>

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
                <LastProducts />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
