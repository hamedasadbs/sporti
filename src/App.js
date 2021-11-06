/*INNER-COMPONENTS*/
import React, { useState, useEffect } from "react";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import {
  Cancel,
  ArrowDropDown,
  ArrowLeft,
  Person,
  ShoppingBasket,
  Search,
  HorizontalSplit,
} from "@material-ui/icons";
import allActions from "./Redux/AllActions";

export const App = () => {
  /*STATES*/
  const [sportsData, setSportsData] = useState([]);
  const [brandsData, setBrandsData] = useState([]);
  const [productTypeData, setProductTypeData] = useState([]);
  const [isHiddenMenuShown, setIsHiddenMenuShown] = useState(false);
  const [isSignShown, setIsSignShown] = useState(false);
  const [isSportsOpen, setIsSportsOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isProductTypeOpen, setIsProductTypeOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [cart, setCart] = useState([]);
  /*VARIABLES*/
  const sportsURL = "http://localhost/bsShop/sports.php";
  const brandsURL = "http://localhost/bsShop/brands.php";
  const productTypeURL = "http://localhost/bsShop/productType.php";
  const cartURL = "http://localhost/bsShop/cart.php";
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
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

  const showSign = () => {
    if (getCookie("isOnline") == false) {
      disableAll(true);
      setIsSignShown(true);
      window.scrollTo(0, 0);
      disableScroll();
    } else {
      logoutHandler();
    }
  };

  const closeForm = () => {
    disableAll(false);
    setIsSignShown(false);
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

  const openBasket = () => {
    if (isBasketOpen) setIsBasketOpen(false);
    else setIsBasketOpen(true);
  };

  const pageHandler = (pageName) => {
    dispatch(allActions.pageActions.setPage(pageName));
  };

  const checkTheCart = () => {
    axios
      .post(
        cartURL,
        JSON.stringify({
          method: "checkTheCart",
          username: getCookie("accountName"),
        })
      )
      .then((res) => setCart(res.data));
  };

  useEffect(() => {
    axios.post(sportsURL).then((res) => setSportsData(res.data));
    axios.post(brandsURL).then((res) => setBrandsData(res.data));
    axios.post(productTypeURL).then((res) => setProductTypeData(res.data));
    if (getCookie("isOnline")) {
      checkTheCart();
      dispatch(allActions.cookieActions.setOnline());
      dispatch(
        allActions.cookieActions.setAccountName(getCookie("accountName"))
      );
    } else {
      dispatch(allActions.cookieActions.setOffline());
      dispatch(
        allActions.cookieActions.setAccountName(getCookie("accountName"))
      );
    }
  }, []);

  const logoutHandler = () => {
    if (window.confirm("آیا میخواهید از این حساب خارج شوید؟")) {
      setCookie("isOnline", "", -100);
      setCookie("accountName", "", -100);
      window.location.href = window.location.href;
    }
  };

  return (
    <div className="body">
      <div className="innerBody">
        <Router>
          <div className="main">
            {isHiddenMenuShown && (
              <div className="hiddenMenu">
                <Cancel onClick={closeHiddenMenu} className="closeHiddenMenu" />
                <ul className="rightSide">
                  <li className="account">
                    <label
                      onClick={() => {
                        closeForm();
                        showSign();
                        closeHiddenMenu();
                      }}
                    >
                      حساب من{" "}
                    </label>
                  </li>
                  <li className="basket" onClick={openBasket}>
                    {isBasketOpen ? <ArrowDropDown /> : <ArrowLeft />}
                    <label>سبد من </label>
                    {isBasketOpen && (
                      <ul>
                        {getCookie("isOnline") == false ? (
                          <li>لطفا وارد حساب کاربری خود شوید</li>
                        ) : cart.length === 0 ? (
                          <li>سبد شما خالی است</li>
                        ) : (
                          cart.map((res) => <li>{res.fa_title}</li>)
                        )}
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
                      {isSportsOpen ? <ArrowDropDown /> : <ArrowLeft />}ورزش ها
                    </Link>
                    {isSportsOpen && (
                      <ul>
                        {sportsData.map((res) => (
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
                        ))}
                      </ul>
                    )}
                  </li>
                  <li className="brands" onClick={openBrands}>
                    <Link>
                      {isBrandsOpen ? <ArrowDropDown /> : <ArrowLeft />}برند ها
                    </Link>
                    {isBrandsOpen && (
                      <ul>
                        {brandsData.map((res) => (
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
                        ))}
                      </ul>
                    )}
                  </li>
                  <li className="productType" onClick={openProductType}>
                    <Link>
                      {isProductTypeOpen ? <ArrowDropDown /> : <ArrowLeft />}
                      نوع محصول
                    </Link>
                    {isProductTypeOpen && (
                      <ul>
                        {productTypeData.map((res) => (
                          <li
                            key={res.id}
                            onClick={() => {
                              window.location.href = res.type;
                            }}
                          >
                            <Link onClick={closeHiddenMenu} to={`/${res.type}`}>
                              {res.fa_type} -
                            </Link>
                          </li>
                        ))}
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
                      <Search />
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
                    <HorizontalSplit className="i" />
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
                    <Search />
                  </button>
                  <input
                    spellCheck="false"
                    type="search"
                    placeholder="جست و جوی محصول یا برند"
                  />
                </ul>
                <ul className="leftSide">
                  <li className="account" onClick={showSign}>
                    <Person className="i" />
                    {getCookie("isOnline") == false ? (
                      <label>حساب من</label>
                    ) : (
                      <label>{getCookie("accountName")}</label>
                    )}
                  </li>
                  <li className="basket">
                    <div className="carts">{cart.length}</div>
                    <ShoppingBasket className="i" />
                    <label>سبد من</label>
                    <div className="basket">
                      <Dropdown
                        type="basket"
                        checkTheCart={checkTheCart}
                        cart={cart}
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
                        نوع محصول
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="link">
                      <span className="brands">
                        <div className="brands">
                          <Dropdown type="brands" />
                        </div>
                        برند ها
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="link">
                      <span className="sports">
                        <div className="sports">
                          <Dropdown type="sports" />
                        </div>
                        ورزش ها
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
            {isSignShown && <Sign close={closeForm} />}
            <Switch>
              {sportsData.map((res) => (
                <Route path={`/category/${res.category}`} key={res.id}>
                  <Gallery
                    categoryName={res.category}
                    faTitle={res.fa_category}
                    checkTheCart={checkTheCart}
                    cart={cart}
                  />
                </Route>
              ))}

              {brandsData.map((res) => (
                <Route path={`/category/${res.brand}`} key={res.id}>
                  <Gallery
                    categoryName={res.brand}
                    faTitle={res.brand}
                    checkTheCart={checkTheCart}
                    cart={cart}
                  />
                </Route>
              ))}

              {productTypeData.map((res) => (
                <Route path={`/category/${res.type}`} key={res.id}>
                  <Gallery
                    categoryName={res.type}
                    faTitle={res.fa_type}
                    checkTheCart={checkTheCart}
                    cart={cart}
                  />
                </Route>
              ))}

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
                <Advertising />
                <Categories />
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
