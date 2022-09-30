/*INNER-COMPONENTS*/
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
/*CSS*/
import classes from "./Header.module.scss";
/*ASSETS*/
import { Person, Search, HorizontalSplit } from "@material-ui/icons";
/** */
import { Dropdown } from "../../tool/dropdown/Dropdown";
import allActions from "../../redux/AllActions";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

export const Header = () => {
  /*STATE*/
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
  /*VARIABLE*/
  const dispatch = useDispatch();
  const page = useSelector((state) => state.pageReducer.page);
  const sportsURL = "http://localhost/bsShop/sports.php";
  const brandsURL = "http://localhost/bsShop/brands.php";
  const productTypeURL = "http://localhost/bsShop/productType.php";
  const cartURL = "http://localhost/bsShop/cart.php";

  const pageHandler = (pageName) => {
    dispatch(allActions.pageActions.setPage(pageName));
  };

  const showHiddenMenu = () => {
    setIsHiddenMenuShown(true);
    window.scrollTo(0, 0);
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

  const logoutHandler = () => {
    if (window.confirm("آیا میخواهید از این حساب خارج شوید؟")) {
      setCookie("isOnline", "", -100);
      setCookie("accountName", "", -100);
      window.location.href = window.location.href;
    }
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

  const setCookie = (cName, cValue, minutes) => {
    let d = new Date();
    d.setTime(d.getTime() + minutes * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires;
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
  return (
    <header className={classes.header}>
      <nav className={classes.topHeader}>
        <ul className={classes.rightSide}>
          <li onClick={showHiddenMenu} className={classes.dropdown}>
            <HorizontalSplit className={classes.i} />
          </li>
          <div
            className={classes.mainLogo}
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
        <ul className={classes.middleSide}>
          <button className={classes.search}>
            <Search />
          </button>
          <input
            spellCheck="false"
            type="search"
            placeholder="جست و جوی محصول یا برند"
          />
        </ul>
        <ul className={classes.leftSide}>
          <li className={classes.account} onClick={showSign}>
            <PersonOutlinedIcon className={classes.i} />
            {getCookie("isOnline") == false ? (
              <label>حساب من</label>
            ) : (
              <label>{getCookie("accountName")}</label>
            )}
          </li>
          <li className={classes.basket}>
            <div className={classes.carts}>{cart.length}</div>
            <ShoppingCartOutlinedIcon className={classes.i} />
            <label>سبد من</label>
            <div className={classes.basket}>
              <Dropdown
                type={classes.basket}
                checkTheCart={checkTheCart}
                cart={cart}
              />
            </div>
          </li>
        </ul>
      </nav>

      <ul className={classes.bottomHeader}>
        <li>
          <Link
            className={classes.link}
            onClick={() => {
              pageHandler("http://localhost:3000/contact");
            }}
            to="/contact"
          >
            <span
              {...(page === "http://localhost:3000/contact"
                ? { className: classes.activeNav }
                : {})}
            >
              ارتباط با ما
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={classes.link}
            onClick={() => {
              pageHandler("http://localhost:3000/about");
            }}
            to="/about"
          >
            <span
              {...(page === "http://localhost:3000/about"
                ? { className: classes.activeNav }
                : {})}
            >
              درباره ما
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={classes.link}
            onClick={() => {
              pageHandler("http://localhost:3000/blog-news");
            }}
            to="/blog-news"
          >
            <span
              {...(page === "http://localhost:3000/blog-news"
                ? { className: classes.activeNav }
                : {})}
            >
              بلاگ و اخبار
            </span>
          </Link>
        </li>
        <li>
          <Link className={classes.link}>
            <span className={classes.productType}>
              <div className={classes.productType}>
                <Dropdown type="productType" />
              </div>
              نوع محصول
            </span>
          </Link>
        </li>
        <li>
          <Link className={classes.link}>
            <span className={classes.brands}>
              <div className={classes.brands}>
                <Dropdown type="brands" />
              </div>
              برند ها
            </span>
          </Link>
        </li>
        <li>
          <Link className={classes.link}>
            <span className={classes.sports}>
              <div className={classes.sports}>
                <Dropdown type="sports" />
              </div>
              ورزش ها
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={classes.link}
            onClick={() => {
              pageHandler("http://localhost:3000/");
            }}
            to="/#"
          >
            <span
              {...(page === "http://localhost:3000/"
                ? { className: classes.activeNav }
                : {})}
            >
              خانه
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
};
