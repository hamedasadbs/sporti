/*INNER-COMPONENTS*/
import React, { useState, useEffect } from "react";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";
/*CSS*/
import "./App.scss";
/*CHILD-COMPONENTS*/
import { Advertising } from "../src/Layout/Home/Article/Advertising/Advertising";
import { Categories } from "../src/Layout/Home/Article/Categories/Categories";
import { LastProducts } from "../src/Layout/Home/Main/LastProducts/LastProducts";
import { Dropdown } from "./Tool/Dropdown/Dropdown";
import { Footer } from "../src/Layout/Footer/Footer";
import { Sign } from "../src/Layout/Sign/Sign";
import { Gallery } from "../src/Layout/Gallery/Gallery";
import { Notice } from "../src/Layout/Notice/Notice";
/*ASSETS*/
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
import { store } from "./Redux/Store";

export const App = () => {
  /*STATES*/
  const [sportsData, setSportsData] = useState([]);
  const [brandsData, setBrandsData] = useState([]);
  const [productTypeData, setProductTypeData] = useState([]);
  const [isHiddenMenuShown, setIsHiddenMenuShown] = useState(false);
  const [isSignUpShown, setIsSignUpShown] = useState(false);
  const [isSignInShown, setIsSignInShown] = useState(false);
  const [isSportsOpen, setIsSportsOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isProductTypeOpen, setIsProductTypeOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [page, setPage] = useState(window.location.href);
  /*VARIABLES*/
  const sportsURL = "http://localhost/bsShop/sports.php";
  const brandsURL = "http://localhost/bsShop/brands.php";
  const productTypeURL = "http://localhost/bsShop/productType.php";
  /*FUNCTIONS*/
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

  const openSports = () => {
    if (isSportsOpen) setIsSportsOpen(false);
    else setIsSportsOpen(true);
  };

  const openBrands = () => {
    if (isBrandsOpen) setIsBrandsOpen(false);
    else setIsBrandsOpen(true);
  };

  const openProductType = () => {
    if (isProductTypeOpen) setIsProductTypeOpen(false);
    else setIsProductTypeOpen(true);
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
    axios.post(sportsURL).then((res) => setSportsData(res.data));
    axios.post(brandsURL).then((res) => setBrandsData(res.data));
    axios.post(productTypeURL).then((res) => setProductTypeData(res.data));
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
    <Provider store={store}>
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
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        className="account"
                      />
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
                      <FontAwesomeIcon
                        icon={faShoppingBasket}
                        className="basket"
                      >
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
                    <li className="sports" onClick={openSports}>
                      <Link>
                        {isSportsOpen ? (
                          <FontAwesomeIcon icon={faChevronDown} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronLeft} />
                        )}{" "}
                        ورزش ها
                      </Link>
                      {isSportsOpen && (
                        <ul>
                          {sportsData.map((res) => {
                            return (
                              <li
                                key={res.id}
                                onClick={() => {
                                  window.location.href = res.category;
                                }}
                              >
                                <Link
                                  onClick={closeHiddenMenu}
                                  to={`/${res.category}`}
                                >
                                  {res.fa_category} -
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                    <li className="brands" onClick={openBrands}>
                      <Link>
                        {isBrandsOpen ? (
                          <FontAwesomeIcon icon={faChevronDown} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronLeft} />
                        )}{" "}
                        برند ها
                      </Link>
                      {isBrandsOpen && (
                        <ul>
                          {brandsData.map((res) => {
                            return (
                              <li
                                key={res.id}
                                onClick={() => {
                                  window.location.href = res.brand;
                                }}
                              >
                                <Link
                                  onClick={closeHiddenMenu}
                                  to={`/${res.brand}`}
                                >
                                  {res.brand} -
                                </Link>
                              </li>
                            );
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
                                key={res.id}
                                onClick={() => {
                                  window.location.href = res.type;
                                }}
                              >
                                <Link
                                  onClick={closeHiddenMenu}
                                  to={`/${res.type}`}
                                >
                                  {res.fa_type} -
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
                        <img
                          data-toggle="tooltip"
                          src="/sporti-label.png"
                          alt="sporti.com"
                        />
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
                        <Dropdown
                          type="basket"
                          isOnline={getCookie("isOnline")}
                        />
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
                        <span className="brands">
                          <div className="brands">
                            <Dropdown type="brands" />
                          </div>
                          <FontAwesomeIcon icon={faChevronDown} /> برند ها
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="link">
                        <span className="sports">
                          <div className="sports">
                            <Dropdown type="sports" />
                          </div>
                          <FontAwesomeIcon icon={faChevronDown} /> ورزش ها
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
                {sportsData.map((res) => {
                  return (
                    <Route path={`/category/${res.category}`} key={res.id}>
                      <Gallery
                        categoryName={res.category}
                        faTitle={res.fa_category}
                      />
                    </Route>
                  );
                })}

                {brandsData.map((res) => {
                  return (
                    <Route path={`/category/${res.brand}`} key={res.id}>
                      <Gallery categoryName={res.brand} faTitle={res.brand} />
                    </Route>
                  );
                })}

                {productTypeData.map((res) => {
                  return (
                    <Route path={`/category/${res.type}`} key={res.id}>
                      <Gallery categoryName={res.type} faTitle={res.fa_type} />
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
                  <LastProducts />
                </Route>
              </Switch>
            </div>
            <Footer />
          </Router>
        </div>
      </div>
    </Provider>
  );
};
